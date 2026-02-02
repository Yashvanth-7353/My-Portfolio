import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Hero />
      <Projects />
      {/* Add other sections here as we build them */}
    </div>
  );
}

export default App;