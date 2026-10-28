import { useMemo, useRef, useState, type ReactNode } from "react";
import { ChatContext } from "./chat-context";

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const value = useMemo(
    () => ({
      isOpen,
      openChat: (trigger?: HTMLElement) => {
        triggerRef.current = trigger ?? null;
        setIsOpen(true);
      },
      closeChat: () => {
        setIsOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      },
    }),
    [isOpen],
  );
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
