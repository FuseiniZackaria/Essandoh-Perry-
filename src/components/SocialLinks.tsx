import { social } from "../content/site";
import { IconLinkedIn, IconTikTok } from "./Icons";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({ className = "", iconClassName = "h-4 w-4" }: SocialLinksProps) {
  const links = [
    { href: social.linkedin, label: "LinkedIn", Icon: IconLinkedIn },
    { href: social.tiktok, label: "TikTok", Icon: IconTikTok },
  ];

  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group inline-flex items-center gap-2 text-text-muted transition-colors duration-300 hover:text-text"
          >
            <Icon className={`${iconClassName} transition-transform duration-300 group-hover:-translate-y-0.5`} />
            <span className="text-sm">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
