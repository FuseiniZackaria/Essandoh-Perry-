import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ProjectDetail } from "../content/site";
import { staggerItem } from "../lib/motion";
import { IconArrowRight } from "./Icons";

const dotColor: Record<ProjectDetail["type"], string> = {
  LAB: "bg-signal",
  CLIENT: "bg-accent-glow",
};

const typeLabel: Record<ProjectDetail["type"], string> = {
  LAB: "Lab / personal project",
  CLIENT: "Client / professional work",
};

export default function ProjectCard(project: ProjectDetail) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/20 p-8 transition-colors duration-300 hover:border-border-strong hover:bg-card/50 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.35)]"
      >
        {/* Case-file watermark rather than a small tag — decorative, grounded in the SOC "case reference" motif */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-1 -top-3 select-none text-6xl font-bold leading-none text-white/[0.045] transition-colors duration-300 group-hover:text-accent-glow/10"
        >
          {project.fileRef}
        </span>

        <div className="relative">
          <div className="mb-4 flex items-center gap-2 text-xs text-text-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor[project.type]}`} />
            {typeLabel[project.type]}
          </div>

          <h3 className="text-balance text-xl font-semibold leading-snug tracking-tight text-text">{project.title}</h3>
          <p className="mt-3 text-balance text-sm leading-relaxed text-text-muted">{project.summary}</p>
        </div>

        <div className="relative mt-7">
          <p className="mb-6 text-xs leading-relaxed text-text-muted">
            <span className="text-text-muted/70">Built with </span>
            {project.tags.join(", ")}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm text-text transition-colors duration-300 group-hover:text-accent-glow">
            Explore project
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

