import { footer, personal, whatsapp } from "../content/site";
import { waLink } from "../lib/whatsapp";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono-tight text-sm text-text">{personal.name}</p>
          <p className="mt-1 text-sm text-text-muted">{footer.tagline}</p>
        </div>

        <SocialLinks
          className="gap-6"
        />
        <a
          href={waLink(whatsapp.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted transition-colors hover:text-text"
        >
          WhatsApp
        </a>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border px-5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono-tight text-[11px] text-text-muted">{footer.copyright}</p>
        <a
          href={footer.developer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-tight text-[11px] text-text-muted transition-colors hover:text-text"
        >
          Developed by {footer.developer.name}
        </a>
      </div>
    </footer>
  );
}
