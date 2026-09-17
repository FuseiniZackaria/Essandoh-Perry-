import { waLink } from "../lib/whatsapp";
import { IconArrowUpRight, IconWhatsApp } from "./Icons";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  variant?: "solid" | "outline" | "ghost";
  showIcon?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  solid: "bg-accent text-white hover:bg-accent-glow",
  outline: "border border-border-strong text-text hover:border-accent-glow hover:text-white",
  ghost: "text-text-muted hover:text-text",
};

export default function WhatsAppButton({ message, label, variant = "solid", showIcon = true, className = "" }: WhatsAppButtonProps) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {variant === "solid" && showIcon && <IconWhatsApp className="h-4 w-4 opacity-90" />}
      <span>{label}</span>
      <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
