import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa"; // Make sure you have this icon imported
import Section from "../layout/Section";
import { ABOUT_CONTENT, EDUCATION, LINKS } from "../../constants"; // <--- ADDED LINKS HERE

const About = () => {
  return (
    <Section id="about" className="relative">
      {/* SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          ABOUT ME <span className="text-accent">.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* --- LEFT COLUMN: BIO & STATS --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Bio Box */}
          <div className="bento-card relative !pt-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-50" />
            
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Who I Am
            </h3>
            <p className="text-text-muted leading-relaxed text-lg">
              {ABOUT_CONTENT.bio}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {ABOUT_CONTENT.stats.map((stat, i) => (
              <div key={i} className="bento-card text-center py-6">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* RESUME BUTTON */}
          <div className="flex justify-center md:justify-start">
            <a 
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-text-main text-bg-main font-bold rounded-full hover:bg-accent hover:text-bg-main transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-1"
            >
              <FaFileAlt className="text-lg group-hover:rotate-12 transition-transform" />
              <span>MY RESUME</span>
            </a>
          </div>

        </motion.div>

        {/* --- RIGHT COLUMN: EDUCATION TIMELINE --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l border-line border-dashed space-y-12"
        >
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-bg-surface border-2 border-line group-hover:border-accent group-hover:scale-125 transition-all duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h4 className="text-xl font-bold font-display group-hover:text-accent transition-colors">
                  {edu.school}
                </h4>
                <span className="text-sm font-mono text-text-muted bg-bg-surface px-2 py-1 rounded border border-line">
                  {edu.year}
                </span>
              </div>
              
              <div className="text-lg font-medium text-text-main mb-2">
                {edu.degree}
              </div>
              
              <div className="text-accent text-sm font-bold mb-2">
                {edu.grade}
              </div>
              
              <p className="text-text-muted text-sm leading-relaxed max-w-md">
                {edu.desc}
              </p>
            </div>
          ))}
        </motion.div>
      
      </div>
    </Section>
  );
};

export default About;