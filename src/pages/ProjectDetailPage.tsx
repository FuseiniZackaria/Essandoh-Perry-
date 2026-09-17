import { Link, Navigate, useParams } from "react-router-dom";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { projects, whatsapp, type ProjectDetail } from "../content/site";
import { revealUp, staggerContainer, staggerItem, viewportOnce } from "../lib/motion";
import WhatsAppButton from "../components/WhatsAppButton";
import { IconArrowRight } from "../components/Icons";

const textColor: Record<ProjectDetail["type"], string> = {
  LAB: "text-signal",
  CLIENT: "text-accent-glow",
};

const typeLabel: Record<ProjectDetail["type"], string> = {
  LAB: "Lab / personal project",
  CLIENT: "Client / professional work",
};

interface BlockProps {
  label: string;
  children: ReactNode;
}

function Block({ label, children }: BlockProps) {
  return (
    <motion.div variants={revealUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="border-t border-border py-10">
      <h2 className="font-mono-tight mb-5 text-xs text-text-muted">{label}</h2>
      {children}
    </motion.div>
  );
}

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <Block label={label}>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-text-muted">
            <span className="text-text-muted/50">–</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Block>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Link
          to="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
        >
          <IconArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          All projects
        </Link>

        <motion.div variants={revealUp} initial="hidden" animate="show">
          <div className="mb-5 flex flex-wrap items-center gap-4 text-xs">
            <span className="text-text-muted">{project.fileRef}</span>
            <span className={`font-medium ${textColor[project.type]}`}>{typeLabel[project.type]}</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-text-muted">{project.overview}</p>

          <p className="mt-7 text-sm leading-relaxed text-text-muted">
            <span className="text-text-muted/70">Built with </span>
            {project.tags.join(", ")}
          </p>
        </motion.div>

        <Block label="Objective">
          <p className="max-w-2xl text-balance leading-relaxed text-text">{project.objective}</p>
        </Block>

        <ListBlock label="Environment" items={project.environment} />
        <ListBlock label="Methodology" items={project.methodology} />
        <ListBlock label="Key outcomes" items={project.outcomes} />
        <ListBlock label="Skills demonstrated" items={project.skills} />

        <Block label="Industry relevance">
          <p className="max-w-2xl text-balance leading-relaxed text-text">{project.relevance}</p>
        </Block>

        <Block label="Interview preparation">
          <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-8">
            {(
              [
                ["Beginner", project.interview.beginner],
                ["Intermediate", project.interview.intermediate],
                ["Advanced", project.interview.advanced],
                ["Practical scenarios", project.interview.scenarios],
              ] as const
            ).map(([tier, qs]) => (
              <motion.div variants={staggerItem} key={tier}>
                <h3 className="mb-3 text-sm font-medium text-text">{tier}</h3>
                <ul className="space-y-3">
                  {qs.map((q, i) => (
                    <li key={i} className="flex gap-3 border-l border-border pl-4 leading-relaxed text-text-muted">
                      {q}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Block>

        <ListBlock label="Documentation" items={project.documentation} />

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-4 flex flex-col items-start gap-6 border-t border-border pt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-balance text-lg text-text">Want to build something like this?</p>
            <p className="mt-1 text-sm text-text-muted">Let's discuss it on WhatsApp.</p>
          </div>
          <WhatsAppButton message={whatsapp.project} label="Talk on WhatsApp" variant="solid" />
        </motion.div>

        <div className="mt-16 border-t border-border pt-8">
          <Link to={`/projects/${next.slug}`} className="group flex items-center justify-between gap-4">
            <span>
              <span className="font-mono-tight block text-xs text-text-muted">Next project</span>
              <span className="mt-1 block text-lg text-text">{next.title}</span>
            </span>
            <IconArrowRight className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
