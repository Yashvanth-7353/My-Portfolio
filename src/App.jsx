import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About"; // <--- IMPORT THIS
import Skills from "./components/sections/Skills"; // <--- IMPORT THIS
import Projects from "./components/sections/Projects";
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
      <section id="about">
        <About />
      </section>
      {/* 2. Skills Section */}
      <Section id="skills">
        <Skills />
      </Section>

      {/* 3. Projects Section */}
      <Projects />

      {/* 4. Contact Section (New) */}
      <Section id="contact" className="py-32">
        <div className="bento-card text-center py-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            LET'S WORK <br /> <span className="text-accent">TOGETHER</span>
          </h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href={LINKS.email}
            className="inline-block px-8 py-4 bg-text-main text-bg-main font-bold rounded-full hover:bg-accent hover:text-bg-main transition-colors"
          >
            Say Hello
          </a>
        </div>
      </Section>

      <footer className="py-12 text-center text-text-muted text-sm font-display">
        DESIGNED & ENGINEERED BY {HERO_CONTENT.name}
      </footer>
    </div>
  );
}

export default App;