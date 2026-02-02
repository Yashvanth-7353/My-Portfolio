import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
  const [lines, setLines] = useState([
    { text: "Linux portfolio-server 5.15.0-generic x86_64", type: "system" },
    { text: "Last login: " + new Date().toDateString(), type: "system" },
    { text: "Type 'help' or press ENTER to run candidate analysis.", type: "comment" },
  ]);
  const [inputValue, setInputValue] = useState("./why_hire_me.sh");
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null); // CHANGED: Ref for the container, not the bottom

  // CHANGED: Logic to scroll ONLY the terminal container
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, isProcessing]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !isProcessing) {
      e.preventDefault(); // Prevent page refresh/jumping
      
      const command = inputValue.trim();
      
      // Add command to history
      setLines((prev) => [...prev, { text: `root@yashvanth:~$ ${command}`, type: "command" }]);
      setInputValue("");
      setIsProcessing(true);

      // Process Logic
      if (command === "./why_hire_me.sh" || command === "") {
        await simulateProcessing();
        addOutput([
          "--------------------------------------------------",
          "  SCANNING CANDIDATE PROFILE... [COMPLETED]",
          "--------------------------------------------------",
          " > NAME:      Yashvanth M U",
          " > ROLE:      Full Stack Engineer",
          " > STACK:     React, Next.js, GCP, Python",
          "",
          " [RESULT]: HIGHLY RECOMMENDED",
          "",
          " * Project 'NutriTrack AI' demonstrates full-stack mastery.",
          " * Top 5 Finalist @ Hackfest proves rapid prototyping skills.",
          " * 92% Accuracy in IoT ML models shows data science capability.",
          "",
          "Ready to deploy? Contact via the link below."
        ]);
      } else if (command === "clear") {
        setLines([]);
      } else if (command === "help") {
        addOutput([
          "Available commands:", 
          "  ./why_hire_me.sh  - Run analysis", 
          "  clear             - Clear screen"
        ]);
      } else {
        addOutput([`bash: ${command}: command not found`]);
      }

      setIsProcessing(false);
    }
  };

  const simulateProcessing = async () => {
    const steps = [
      "sudo apt-get install skills...",
      "Reading package lists... Done",
      "Building dependency tree... Done",
      "Fetching GitHub repositories...",
      "Compiling achievements..."
    ];

    for (const step of steps) {
      setLines((prev) => [...prev, { text: step, type: "system" }]);
      await new Promise(r => setTimeout(r, 300));
    }
  };

  const addOutput = (outputLines) => {
    const newLines = outputLines.map(line => ({ text: line, type: "output" }));
    setLines((prev) => [...prev, ...newLines]);
  };

  return (
    <div 
      onClick={handleTerminalClick}
      className="w-full max-w-lg h-[400px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm flex flex-col"
    >
      {/* LINUX HEADER */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" /> {/* Close */}
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /> {/* Minimize */}
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" /> {/* Maximize */}
        </div>
        <div className="text-gray-400 text-xs font-bold">root@yashvanth: ~</div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* TERMINAL BODY */}
      <div 
        ref={terminalBodyRef} // CHANGED: Attach ref here
        className="flex-1 p-4 overflow-y-auto custom-scrollbar text-gray-300"
      >
        {lines.map((line, i) => (
          <div 
            key={i} 
            className={`mb-1 break-words ${
              line.type === "command" ? "text-green-400 font-bold" : 
              line.type === "system" ? "text-blue-400" :
              line.type === "comment" ? "text-gray-500 italic" : 
              "text-gray-200"
            }`}
          >
            {line.text}
          </div>
        ))}

        {/* INPUT LINE */}
        <div className="flex items-center text-green-400 font-bold">
          <span className="mr-2">root@yashvanth:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 font-normal"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;