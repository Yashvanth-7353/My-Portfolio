import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Section from "./components/layout/Section";
import { SKILLS } from "./constants";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      <Navbar />
      
      <Hero />
      
      {/* NEW: SKILLS BENTO GRID */}
      <Section id="skills">
        <h2 className="text-3xl font-display font-bold mb-12">TECHNICAL ARSENAL<span className="text-accent">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className={`bento-card ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-accent">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span key={item} className="px-3 py-1 text-sm border border-line rounded-full bg-bg-main">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Projects />

      <footer className="py-24 text-center text-text-muted text-sm font-display">
        DESIGNED & ENGINEERED BY YASHVANTH
      </footer>
    </div>
  );
}

export default App;