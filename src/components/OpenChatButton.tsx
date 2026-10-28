import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { useChat } from "../lib/chat-context";
import { IconArrowUpRight } from "./Icons";

type Variant = "solid" | "outline" | "ghost";

interface OpenChatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  solid: "bg-accent text-white hover:bg-accent-glow",
  outline: "border border-border-strong text-text hover:border-accent-glow",
  ghost: "text-text-muted hover:text-text",
};

export default function OpenChatButton({ label, variant = "solid", className = "", onClick, ...props }: OpenChatButtonProps) {
  const { openChat } = useChat();
  return (
    <button
      type="button"
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        openChat(event.currentTarget);
        onClick?.(event);
      }}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {label}
      <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}
