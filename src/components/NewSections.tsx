import { motion } from "framer-motion";
import { communities, consultation, events, faqs, sectors, whatsapp } from "../content/site";
import { revealUp, staggerContainer, staggerItem, viewportOnce } from "../lib/motion";
import { waLink } from "../lib/whatsapp";
import OpenChatButton from "./OpenChatButton";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 max-w-2xl">
      <p className="font-mono-tight mb-4 text-xs text-accent-glow">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-5xl">{title}</h2>
      <p className="mt-5 leading-relaxed text-text-muted">{intro}</p>
    </motion.div>
  );
}

export function SectorsSection() {
  return (
    <section id="sectors" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="AI in your field" title={sectors.heading} intro={sectors.intro} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.items.map((item, index) => (
            <motion.article key={item.title} variants={staggerItem} initial="hidden" whileInView="show" viewport={viewportOnce} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono-tight text-xs text-accent-glow">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-medium text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultationSection() {
  return (
    <section id="consultation" className="border-b border-border bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Consultation" title={consultation.heading} intro={consultation.intro} />
          <ol className="space-y-4">
            {consultation.steps.map((step, index) => (
              <li key={step} className="flex gap-4 text-text-muted"><span className="font-mono-tight text-accent-glow">0{index + 1}</span><span>{step}</span></li>
            ))}
          </ol>
        </div>
        <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
          <p className="text-lg leading-relaxed text-text">{consultation.flexibility}</p>
          <div className="mt-7 flex flex-col items-start gap-4">
            <OpenChatButton label={consultation.primary} variant="solid" />
            <a className="text-sm text-text-muted underline decoration-border-strong underline-offset-4 hover:text-text" href={`mailto:${consultation.email}`}>
              Or email {consultation.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunitiesSection() {
  return (
    <section id="communities" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Community" title="Learn and grow together" intro="Connect with people learning and applying technology. Ask Elsie about current community options and how to request access." />
        {communities.length ? (
          <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-5 md:grid-cols-2">
            {communities.map((community) => (
              <article key={community.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-medium text-text">{community.name}</h3><span className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">{community.access}</span></div>
                <p className="mt-4 leading-relaxed text-text-muted">{community.description}</p>
                {community.price && <p className="mt-3 text-sm text-text-muted">{community.price}</p>}
                <a className="mt-6 inline-flex min-h-11 items-center rounded-full border border-border-strong px-5 py-3 text-sm text-text hover:border-accent-glow" href={waLink(whatsapp.community)} target="_blank" rel="noopener noreferrer">Request to Join</a>
              </article>
            ))}
          </motion.div>
        ) : <p className="rounded-2xl border border-border bg-card p-6 text-text-muted">Community details will be shared here when they are available. Message Perry to ask about current opportunities.</p>}
      </div>
    </section>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="border-b border-border bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Webinars & seminars" title="Keep learning, wherever you are" intro="Explore upcoming webinars and seminars on practical technology, AI and cybersecurity." />
        {events.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {events.map((event) => (
              <article key={`${event.title}-${event.date}`} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl font-medium text-text">{event.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{event.date} · {event.time} · {event.format}</p>
                <p className="mt-4 leading-relaxed text-text-muted">{event.description}</p>
                {event.price && <p className="mt-3 text-sm text-text-muted">{event.price}</p>}
                <a className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-accent-glow" href={waLink(whatsapp.webinar)} target="_blank" rel="noopener noreferrer">Register</a>
              </article>
            ))}
          </div>
        ) : <p className="rounded-2xl border border-border p-6 text-text-muted">New dates are coming soon. Message me and I'll let you know when the next session opens.</p>}
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="A few helpful answers" intro="Not sure where to start? Here are a few common questions." />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-text marker:hidden focus-visible:outline-accent-glow">{item.question}<span className="float-right text-accent-glow transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
              <p className="mt-4 max-w-3xl leading-relaxed text-text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
