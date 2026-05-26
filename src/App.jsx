// src/App.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Loader from "./components/ui/Loader";
import { HERO_CONTENT } from "./constants";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* mode="wait" ensures the loader finishes exiting BEFORE the app enters */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen"
          >
            <div className="grain-overlay" />
            <Navbar />
            
            <section id="hero">
              <Hero />
            </section>
            
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />

            <footer className="py-12 text-center text-text-muted text-sm font-display">
              DESIGNED & ENGINEERED BY {HERO_CONTENT.name}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;