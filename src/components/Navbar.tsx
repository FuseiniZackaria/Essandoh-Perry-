import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { nav, personal, whatsapp } from "../content/site";
import { waLink } from "../lib/whatsapp";
import { IconArrowUpRight, IconClose, IconMenu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + href);
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-none px-5 py-4 transition-all duration-300 sm:px-8 ${
          scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo-mark.png" alt="" className="h-35 w-35 sm:h-44 sm:w-44" />
          <span className="font-mono-tight text-sm tracking-wide text-text">{personal.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              to={"/" + link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative text-sm text-text-muted transition-colors duration-300 hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-glow transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink(whatsapp.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm text-text transition-colors duration-300 hover:border-accent-glow"
          >
            {nav.cta}
            <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text md:hidden"
        >
          {open ? <IconClose className="h-4 w-4" /> : <IconMenu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-bg px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                to={"/" + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-2 py-3 text-base text-text-muted transition-colors hover:bg-card hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={waLink(whatsapp.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white"
          >
            {nav.cta}
            <IconArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </motion.header>
  );
}
