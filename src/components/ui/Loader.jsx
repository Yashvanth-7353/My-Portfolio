// src/components/ui/Loader.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "npx create-yashvanth-portfolio@latest";
  const [phase, setPhase] = useState("typing"); // 'typing' | 'installing' | 'starting'

  useEffect(() => {
    // 1. Typing Effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setPhase("installing"), 400); // Pause before install
      }
    }, 50); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // 2. Progression Sequence
    if (phase === "installing") {
      setTimeout(() => setPhase("starting"), 1500); // Progress bar duration
    } else if (phase === "starting") {
      setTimeout(() => {
        onComplete(); // Tells App.jsx to trigger the exit animation
      }, 1000); // Show success message for 1 second before opening doors
    }
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent pointer-events-none font-mono">
      
      {/* --- THE VAULT DOORS --- */}
      {/* Top Half */}
      <motion.div
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#050505] border-b border-[#111]"
      />
      {/* Bottom Half */}
      <motion.div
        exit={{ y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] border-t border-[#111]"
      />

      {/* --- THE CONTENT --- */}
      {/* Content fades out just before the doors open */}
      <motion.div
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center"
      >
        
        {/* Phase 1: Typing Command */}
        <div className="text-gray-300 text-lg md:text-2xl font-bold mb-8 h-8 flex items-center justify-center w-full">
          <span className="text-accent mr-3">❯</span>
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-6 bg-accent ml-1 inline-block"
          />
        </div>

        {/* Phase 2: Installing Progress Bar */}
        {phase === "installing" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase">
              Downloading dependencies (React, Node, AWS)...
            </p>
            <div className="w-64 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-accent shadow-[0_0_10px_#CCFF00]"
              />
            </div>
          </motion.div>
        )}

        {/* Phase 3: Server Started Message */}
        {phase === "starting" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mt-4"
          >
            <p className="text-accent font-bold text-sm md:text-base">
              ✔ Local server started at http://localhost:3000
            </p>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
};

export default Loader;