import { motion } from "framer-motion";
import Section from "../layout/Section";
import { PROJECTS } from "../../constants";

const Projects = () => {
  return (
    <Section id="projects">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-3xl md:text-4xl font-display font-bold mb-16"
      >
        SELECTED WORKS <span className="text-accent">.</span>
      </motion.h2>

      <div className="space-y-20">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group border-t border-gray-800 pt-10 grid md:grid-cols-12 gap-8"
          >
            {/* 01 / Project ID */}
            <div className="md:col-span-2 text-muted font-mono text-xl">
              0{index + 1}
            </div>

            {/* 02 / Details */}
            <div className="md:col-span-10">
              <h3 className="text-4xl md:text-5xl font-display font-bold group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-2xl">
                {project.description}
              </p>
              
              <div className="flex gap-3 mt-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm border border-gray-800 rounded-full text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;