import { motion } from "framer-motion";
import { HERO_CONTENT } from "../../constants";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto relative">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.span variants={textVariants} className="text-accent font-display font-medium tracking-wider text-sm md:text-base">
          {HERO_CONTENT.greeting}
        </motion.span>
        
        <motion.h1 variants={textVariants} className="text-6xl md:text-9xl font-display font-extrabold mt-4 leading-[0.9]">
          {HERO_CONTENT.name}
        </motion.h1>
        
        <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-display font-bold text-gray-500 mt-2">
          {HERO_CONTENT.role}
        </motion.h2>

        <motion.p variants={textVariants} className="mt-8 text-lg text-gray-400 max-w-xl font-light leading-relaxed">
          {HERO_CONTENT.description}
        </motion.p>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;