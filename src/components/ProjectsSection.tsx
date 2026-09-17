import { motion } from "framer-motion";
import { projects } from "../content/site";
import { revealUp, staggerContainer, viewportOnce } from "../lib/motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border bg-bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-5xl"
          >
            Built. Tested. Learned.
          </motion.h2>
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-4 text-balance leading-relaxed text-text-muted"
          >
            Practical labs and client work that demonstrate how I actually work — each one clearly marked as either a
            personal lab or professional engagement.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
