import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { LINKS, NAV_LINKS } from "../../constants";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Theme Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6"
      >
        <div className="flex items-center justify-between w-full max-w-5xl bg-bg-surface/80 backdrop-blur-md border border-line rounded-full px-6 py-3 shadow-xl">
          
          {/* 1. LOGO / HOME */}
          <Link 
            to="hero" 
            smooth={true} 
            className="font-display font-bold text-lg cursor-pointer hover:text-accent transition-colors"
          >
            YM.
          </Link>

          {/* 2. DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.id}
                to={link.id}
                smooth={true}
                offset={-100}
                className="text-sm font-medium text-text-muted hover:text-text-main cursor-pointer transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. ACTIONS (Toggle + Socials + Mobile Menu) */}
          <div className="flex items-center gap-4">
            
            {/* Social Icons (Desktop only to save space on mobile) */}
            <div className="hidden md:flex gap-4 border-r border-line pr-4">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="relative w-12 h-6 bg-line rounded-full flex items-center px-1 transition-colors hover:border-accent border border-transparent"
              aria-label="Toggle Theme"
            >
              <motion.div 
                layout 
                className={`w-4 h-4 rounded-full ${isDark ? 'bg-accent' : 'bg-text-main'}`}
                style={{ marginLeft: isDark ? 'auto' : '0' }}
              />
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl text-text-main"
              onClick={() => setIsOpen(true)}
            >
              <HiMenuAlt4 />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 4. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-bg-main flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-3xl text-text-muted hover:text-accent transition-colors"
            >
              <HiX />
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  offset={-50}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold text-text-main hover:text-accent cursor-pointer transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Socials */}
            <div className="flex gap-8 mt-16 text-2xl text-text-muted">
              <a href={LINKS.github}><FaGithub /></a>
              <a href={LINKS.linkedin}><FaLinkedin /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;