// src/components/sections/Experience.jsx
import { motion } from "framer-motion";
import { EXPERIENCE } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-main mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full"></div>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="group relative"
          >
            {/* Interactive Card */}
            <div className="bg-[#1e1e1e] border border-line rounded-xl p-6 md:p-8 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/5">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-text-muted font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                
                {/* Duration Badge */}
                <div className="mt-4 md:mt-0 text-sm font-mono text-accent bg-accent/10 px-4 py-2 rounded-full inline-block w-max border border-accent/20">
                  {exp.duration}
                </div>
              </div>
              
              {/* Bullet Points */}
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start text-text-muted"
                  >
                    <span className="text-accent mr-3 mt-1.5 text-sm">▹</span>
                    <span className="leading-relaxed">{desc}</span>
                  </motion.li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;