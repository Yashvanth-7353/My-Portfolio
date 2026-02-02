import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About"; // <--- IMPORT THIS
import Skills from "./components/sections/Skills"; // <--- IMPORT THIS
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact"; // <--- IMPORT THIS
import Section from "./components/layout/Section";
import { SKILLS, HERO_CONTENT, LINKS } from "./constants";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      <Navbar />
      
      {/* 1. Hero Section ID */}
      <section id="hero">
        <Hero />
      </section>
      
        <About />
      
      {/* 2. Skills Section */}
      
        <Skills />
      

      {/* 3. Projects Section */}
      <Projects />

      <Contact />

      <footer className="py-12 text-center text-text-muted text-sm font-display">
        DESIGNED & ENGINEERED BY {HERO_CONTENT.name}
      </footer>
    </div>
  );
}

export default App;