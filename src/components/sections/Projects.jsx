import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Section from "../layout/Section";
import { PROJECTS } from "../../constants";

const Projects = () => {
  return (
    <Section id="projects" className="overflow-visible">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          MY PROJECTS <span className="text-accent">.</span>
        </h2>
        <p className="text-text-muted mt-4 text-lg">
          Engineering solutions for real-world problems.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

    </Section>
  );
};

const ProjectCard = ({ project, index }) => {
  // Check if a valid demo link exists (not null, undefined, or empty)
  const hasDemo = project.demo && project.demo !== "#" && project.demo !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-8 rounded-2xl border border-line bg-bg-surface hover:border-accent/50 transition-colors duration-300 h-full"
    >
      {/* HOVER GLOW EFFECT */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div>
        {/* Category Tag */}
        <div className="flex justify-between items-start mb-6">
          <span className="text-xs font-mono font-bold text-accent px-3 py-1 rounded-full border border-accent/20 bg-accent/5 uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-4xl text-line group-hover:text-text-muted transition-colors font-display font-bold opacity-50">
            0{index + 1}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8 border-t border-line pt-6">
          {project.tech.map((t) => (
            <span key={t} className="text-sm font-mono text-text-muted bg-bg-main px-2 py-1 rounded border border-line">
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 relative z-10">
          <a 
            href={project.repo} 
            target="_blank" 
            rel="noopener noreferrer"
            // If no demo, this button expands (flex-1) to fill the row
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-line bg-bg-main text-text-main font-bold hover:bg-text-main hover:text-bg-main transition-all group/btn"
          >
            <FaGithub className="text-lg" />
            <span>Code</span>
          </a>
          
          {/* ONLY RENDER IF DEMO LINK EXISTS */}
          {hasDemo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-accent text-bg-main font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;