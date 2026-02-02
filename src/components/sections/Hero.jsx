import { motion } from "framer-motion";
import { HERO_CONTENT } from "../../constants";
import Terminal from "../ui/Terminal";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <div className="order-2 md:order-1 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{yb: 0.1 }}
            className="text-accent font-display font-medium tracking-wider text-sm md:text-base uppercase"
          >
            {HERO_CONTENT.greeting}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-display font-extrabold mt-4 mb-4 leading-tight"
          >
            {HERO_CONTENT.name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-display font-bold text-text-muted mb-8"
          >
            {HERO_CONTENT.role}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-text-muted leading-relaxed max-w-lg mb-10"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-text-main text-bg-main font-bold rounded-full hover:bg-accent hover:text-bg-main transition-colors">
              View Work
            </a>
            <a href="#contact" className="px-8 py-4 border border-line text-text-main font-bold rounded-full hover:border-accent hover:text-accent transition-colors">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: TERMINAL --- */}
        {/* Added 'md:translate-x-12' to move it right */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative md:translate-x-12">
          
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-accent/10 blur-[120px] rounded-full w-[300px] h-[300px] mx-auto my-auto z-0" />

          {/* The Terminal Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 w-full"
          >
            <Terminal />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;