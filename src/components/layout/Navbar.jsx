import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LINKS } from "../../constants";

const Navbar = () => {
  const [isDark,MJ] = useState(true); // Default to Dark

  useEffect(() => {
    // Apply the class to the HTML tag
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <div className="flex items-center gap-6 px-6 py-3 bg-bg-surface/80 backdrop-blur-md border border-line rounded-full shadow-lg">
        <a href={LINKS.github} target="_blank" className="text-sm font-medium hover:text-accent transition-colors">GH</a>
        <a href={LINKS.linkedin} target="_blank" className="text-sm font-medium hover:text-accent transition-colors">LI</a>
        
        {/* THEME TOGGLE SWITCH */}
        <button 
          onClick={() => MJ(!isDark)}
          className="relative w-14 h-7 bg-line rounded-full flex items-center px-1 transition-colors hover:border-accent border border-transparent"
        >
          <motion.div 
            layout 
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className={`w-5 h-5 rounded-full ${isDark ? 'bg-accent' : 'bg-text-main'}`}
            style={{ marginLeft: isDark ? 'auto' : '0' }}
          />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;