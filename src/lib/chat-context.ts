import { createContext, useContext, type Context } from "react";

export interface ChatContextValue {
  isOpen: boolean;
  openChat: (trigger?: HTMLElement) => void;
  closeChat: () => void;
}

export const ChatContext: Context<ChatContextValue | null> = createContext<ChatContextValue | null>(null);

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
}
