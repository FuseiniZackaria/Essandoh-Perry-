import { useEffect, useRef, useState, type FormEvent } from "react";
import { useChat } from "../lib/chat-context";
import { waLink } from "../lib/whatsapp";
import { whatsapp } from "../content/site";
import { IconClose } from "./Icons";

type ChatMessage = { role: "user" | "assistant"; content: string };
const greeting = "Hello, my name is Elsie, Perry's personal AI assistant. How may I help you today?";

export default function ChatWidget() {
  const { isOpen, openChat, closeChat } = useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "assistant", content: greeting }]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const [bookingUrl, setBookingUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [isOpen]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isSending]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeChat();
      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>("button:not(:disabled), input:not(:disabled), a[href]");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeChat]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isSending) return;
    const history = [...messages, { role: "user" as const, content: text }];
    setMessages(history);
    setInput("");
    setError(false);
    setBookingUrl("");
    setIsSending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.filter((message) => message.content !== greeting) }),
      });
      if (!response.ok) {
        const failure: unknown = await response.json().catch(() => null);
        if (
          response.status === 429 &&
          failure && typeof failure === "object" &&
          "code" in failure && failure.code === "rate_limited" &&
          "error" in failure && typeof failure.error === "string"
        ) {
          const errorMessage = failure.error;
          setMessages((current) => [...current, { role: "assistant", content: errorMessage }]);
          return;
        }
        throw new Error("Chat request failed");
      }
      const data: unknown = await response.json();
      if (!data || typeof data !== "object" || !("reply" in data) || typeof data.reply !== "string") throw new Error("Invalid response");
      const replyText = data.reply;
      setMessages((current) => [...current, { role: "assistant", content: replyText }]);
      if ("whatsappUrl" in data && typeof data.whatsappUrl === "string") {
        const url = new URL(data.whatsappUrl);
        if (url.protocol === "https:" && url.hostname === "wa.me") setBookingUrl(url.toString());
      }
    } catch {
      setError(true);
      setMessages((current) => [...current, { role: "assistant", content: "I'm having trouble right now. You can email info@essandohperry.tech or message Perry on WhatsApp." }]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      {!isOpen && (
        <button type="button" onClick={(event) => openChat(event.currentTarget)} aria-label="Chat with Elsie" className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center gap-3 rounded-full border border-accent-glow/40 bg-accent px-5 text-sm font-medium text-white shadow-xl shadow-black/30 transition hover:bg-accent-glow focus-visible:outline-offset-4 sm:bottom-7 sm:right-7">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50 motion-reduce:animate-none" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" /></span>
          Chat with Elsie
        </button>
      )}

      {isOpen && (
        <section ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="elsie-title" className="fixed inset-0 z-[60] flex flex-col border border-border bg-bg shadow-2xl shadow-black/40 sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(680px,calc(100dvh-3rem))] sm:w-[min(420px,calc(100vw-2rem))] sm:rounded-3xl">
          <header className="flex shrink-0 items-center justify-between border-b border-border bg-bg-secondary px-5 py-4 sm:rounded-t-3xl">
            <div><p className="text-xs text-accent-glow">Perry's personal AI assistant</p><h2 id="elsie-title" className="mt-1 text-base font-semibold text-text">Elsie</h2></div>
            <button type="button" onClick={closeChat} aria-label="Close chat" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text hover:bg-card"><IconClose className="h-4 w-4" /></button>
          </header>

          <div ref={listRef} aria-live="polite" aria-relevant="additions text" className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === "user" ? "rounded-br-md bg-accent text-white" : "rounded-bl-md border border-border bg-card text-text"}`}>{message.content}</p>
              </div>
            ))}
            {isSending && <p role="status" className="text-sm text-text-muted">Elsie is typing…</p>}
          </div>

          {bookingUrl && <a className="mx-4 mb-3 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent-glow" href={bookingUrl} target="_blank" rel="noopener noreferrer">Continue to Perry's team on WhatsApp</a>}
          {error && <a className="mx-4 mb-2 text-sm text-accent-glow underline underline-offset-4" href={waLink(whatsapp.general)} target="_blank" rel="noopener noreferrer">Message Perry on WhatsApp</a>}
          <form onSubmit={sendMessage} className="shrink-0 border-t border-border bg-bg-secondary p-4 sm:rounded-b-3xl">
            <label className="sr-only" htmlFor="elsie-message">Your message</label>
            <div className="flex gap-2">
              <input ref={inputRef} id="elsie-message" value={input} onChange={(event) => setInput(event.target.value)} maxLength={4000} placeholder="Write a message…" disabled={isSending} className="min-w-0 flex-1 rounded-full border border-border-strong bg-bg px-4 py-3 text-base text-text placeholder:text-text-muted disabled:opacity-60" />
              <button type="submit" disabled={isSending || !input.trim()} className="min-h-12 rounded-full bg-accent px-5 text-sm font-medium text-white hover:bg-accent-glow disabled:cursor-not-allowed disabled:opacity-50">Send</button>
            </div>
            <p className="mt-3 text-center text-xs leading-relaxed text-text-muted">Conversations may be shared with Perry's team to arrange bookings.</p>
          </form>
        </section>
      )}
    </>
  );
}
