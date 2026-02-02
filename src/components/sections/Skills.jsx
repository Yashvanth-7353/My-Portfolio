import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaDatabase, FaGitAlt, FaGoogle 
} from "react-icons/fa";
import { 
  SiTypescript, SiCplusplus, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiGooglecloud, SiFirebase, SiPostgresql, SiOpencv 
} from "react-icons/si";
import Section from "../layout/Section";
import { SKILLS } from "../../constants";

const iconMap = {
  "Python": <FaPython />,
  "JavaScript": <FaJs />,
  "TypeScript": <SiTypescript />,
  "C++": <SiCplusplus />,
  "SQL": <FaDatabase />,
  "Next.js": <SiNextdotjs />,
  "React.js": <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  "Node.js": <FaNodeJs />,
  "Google Cloud (GCP)": <SiGooglecloud />,
  "Firebase": <SiFirebase />,
  "PostgreSQL": <SiPostgresql />,
  "Google Gemini": <FaGoogle />,
  "Vision API": <SiOpencv />,
  "Git": <FaGitAlt />,
  "Docker": <FaDocker />,
};

// --- PRECISE COORDINATES (17 Points for 17 Icons) ---
// No random fillers. Every icon builds the letter.

const Y_SHAPE = [
  // The Stem (Vertical Center)
  { x: 50, y: 90 }, { x: 50, y: 80 }, { x: 50, y: 70 }, { x: 50, y: 60 }, { x: 50, y: 50 },
  // Left Arm (Diagonal Up-Left)
  { x: 42, y: 42 }, { x: 34, y: 34 }, { x: 26, y: 26 }, { x: 18, y: 18 },
  // Right Arm (Diagonal Up-Right)
  { x: 58, y: 42 }, { x: 66, y: 34 }, { x: 74, y: 26 }, { x: 82, y: 18 },
  // Reinforcements (Thickening the joint)
  { x: 45, y: 55 }, { x: 55, y: 55 }, { x: 50, y: 40 }, { x: 50, y: 30 }
];

const M_SHAPE = [
  // Left Column (Vertical)
  { x: 20, y: 90 }, { x: 20, y: 70 }, { x: 20, y: 50 }, { x: 20, y: 30 }, { x: 20, y: 10 },
  // Right Column (Vertical)
  { x: 80, y: 90 }, { x: 80, y: 70 }, { x: 80, y: 50 }, { x: 80, y: 30 }, { x: 80, y: 10 },
  // The "V" Middle
  { x: 35, y: 30 }, { x: 42, y: 45 }, { x: 50, y: 60 }, { x: 58, y: 45 }, { x: 65, y: 30 },
  // Reinforcements (Filling gaps)
  { x: 30, y: 20 }, { x: 70, y: 20 }
];

const Skills = () => {
  const allSkills = SKILLS.flatMap(category => category.items);
  const [layoutState, setLayoutState] = useState("scatter"); 

  useEffect(() => {
    // Sequence: Scatter -> Y (Hold 1s) -> M (Hold 1s) -> Loop
    const sequence = [
      { state: "y" },
      { state: "m" },
      { state: "scatter" }
    ];

    let currentIndex = 0;
    
    // Total Cycle = Transition Time (3s) + Hold Time (1s) = 4000ms
    const interval = setInterval(() => {
      setLayoutState(sequence[currentIndex].state);
      currentIndex = (currentIndex + 1) % sequence.length;
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="skills" className="overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          TECH STACK <span className="text-accent">.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          {SKILLS.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-accent mb-4 border-l-2 border-accent pl-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {category.items.map((item) => (
                  <span key={item} className="text-lg text-text-muted font-mono hover:text-text-main transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* POOL CONTAINER */}
        <div className="relative h-[450px] w-full bg-bg-surface/50 rounded-2xl border border-line overflow-hidden flex items-center justify-center p-8">
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />
          
          <div className="absolute top-4 right-4 text-xs font-mono text-text-muted opacity-30 uppercase">
             State: {layoutState === "scatter" ? "Entropy" : `Forming ${layoutState.toUpperCase()}`}
          </div>

          {allSkills.map((skill, i) => (
            <FloatingIcon 
              key={skill} 
              skill={skill} 
              index={i} 
              layoutState={layoutState}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const FloatingIcon = ({ skill, index, layoutState }) => {
  const Icon = iconMap[skill] || <FaDatabase />;
  
  // 1. Clamped Random (Keep strictly inside 10% - 90%)
  const randomX = Math.random() * 80 + 10; 
  const randomY = Math.random() * 80 + 10;
  
  // Modulo ensures we loop through points if skills > points, 
  // but since we matched them (17 skills, 17 points), it maps 1:1.
  const yPos = Y_SHAPE[index % Y_SHAPE.length];
  const mPos = M_SHAPE[index % M_SHAPE.length];

  let target = { left: `${randomX}%`, top: `${randomY}%` };
  
  if (layoutState === "y") {
    target = { left: `${yPos.x}%`, top: `${yPos.y}%` };
  } else if (layoutState === "m") {
    target = { left: `${mPos.x}%`, top: `${mPos.y}%` };
  }

  return (
    <motion.div
      className="absolute group cursor-pointer"
      animate={target}
      transition={{ 
        duration: 3, // 3s Morph + 1s Hold (controlled by interval) = 4s Total
        ease: "easeInOut",
        // Only float randomly when in scatter mode
        ...(layoutState === "scatter" ? {
           y: [0, -5, 0], 
           transition: { repeat: Infinity, duration: 4 + Math.random() * 2 } 
        } : {})
      }}
      whileHover={{ scale: 1.2, zIndex: 50 }}
    >
      <div className="p-3 bg-bg-main border border-line rounded-full text-2xl transition-all shadow-sm
                      text-gray-300 group-hover:text-accent group-hover:border-accent"> 
        {Icon}
      </div>

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-bg-main text-xs font-bold py-1 px-2 rounded whitespace-nowrap pointer-events-none z-50">
        {skill}
      </div>
    </motion.div>
  );
};

export default Skills;