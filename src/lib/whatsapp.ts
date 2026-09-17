import { personal } from "../content/site";

/** Builds a wa.me deep link with a pre-filled, context-specific message. */
export function waLink(message: string): string {
  return `https://wa.me/${personal.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
