import { useState, useEffect, useRef } from "react";
import { LINKS } from "../../constants"; 

const Terminal = () => {
  const [lines, setLines] = useState([
    { text: "Linux portfolio-server 6.8.0-generic x86_64", type: "system" },
    { text: "Last login: " + new Date().toUTCString(), type: "system" },
    { text: "Type 'help' for commands. Try 'ls' to see files.", type: "comment" },
  ]);

  // CHANGED: Pre-fill the command so it is loaded by default
  const [inputValue, setInputValue] = useState("./why_hire_me.sh");
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("root@yashvanth: ~");
  
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, isProcessing]);

  // Click & Copy Logic
  const handleTerminalClick = () => {
    const selection = window.getSelection();
    if (selection.toString().length === 0) {
      inputRef.current?.focus();
    }
  };

  const handleMouseUp = () => {
    const selection = window.getSelection().toString();
    if (selection.length > 0) {
      navigator.clipboard.writeText(selection).then(() => {
        const originalTitle = "root@yashvanth: ~";
        setHeaderTitle("Copied to Clipboard! 📋");
        setTimeout(() => setHeaderTitle(originalTitle), 1500);
      }).catch(err => console.error("Copy failed", err));
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !isProcessing) {
      e.preventDefault();
      
      const rawInput = inputValue.trim();
      const args = rawInput.split(" ");
      const command = args[0].toLowerCase();
      
      setLines((prev) => [...prev, { text: `root@yashvanth:~$ ${rawInput}`, type: "command" }]);
      setInputValue("");
      setIsProcessing(true);

      if (command === "./why_hire_me.sh") {
        await runSimulation();
        showHireMeResult();
      } 
      else if (command === "ls" || command === "ll") {
        addOutput([
          "drwxr-xr-x  2 root root  4096 Feb 05 10:00 projects/",
          "-rwxr-xr-x  1 root root   512 Feb 05 10:00 why_hire_me.sh",
          "-rw-r--r--  1 root root   240 Feb 05 10:00 contact.txt",
          "-rw-r--r--  1 root root  1024 Feb 05 10:00 skills.json",
          "-rw-r--r--  1 root root    12 Feb 05 10:00 secret.txt"
        ]);
      }
      else if (command === "cat") {
        const file = args[1];
        if (!file) {
          addOutput(["Usage: cat [filename]"], "error");
        } else if (file === "contact.txt") {
          addOutput([
            "--- CONTACT DETAILS ---",
            `Email: ${LINKS.email}`,
            `Phone: ${LINKS.phone}`,
            `GitHub: ${LINKS.github}`,
            "-----------------------"
          ], "success");
        } else if (file === "skills.json") {
          addOutput([
            "{",
            '  "frontend": ["React", "Next.js", "Tailwind"],',
            '  "backend": ["Node.js", "FastAPI", "PostgreSQL"],',
            '  "cloud": ["GCP", "AWS", "Docker"],',
            '  "ai": ["Gemini API", "OpenCV", "TensorFlow"]',
            "}"
          ], "result");
        } else if (file === "secret.txt") {
          addOutput(["🥚 You found the easter egg! Just hire me."], "success");
        } else if (file === "why_hire_me.sh") {
          addOutput(["Binary file not readable. Execute it with ./why_hire_me.sh"], "error");
        } else {
          addOutput([`cat: ${file}: No such file or directory`], "error");
        }
      }
      else if (command === "whoami") {
        addOutput(["visitor@portfolio-client-v1"]);
      }
      else if (command === "date") {
        addOutput([new Date().toString()]);
      }
      else if (command === "uptime") {
        addOutput([" 10:00:00 up 24 days, 7 min, 1 user, load average: 0.00, 0.01, 0.05"]);
      }
      else if (command === "sudo") {
        addOutput(["root@yashvanth is not in the sudoers file. This incident will be reported."], "error");
      }
      else if (command === "clear") {
        setLines([
           { text: "Type 'help' for commands. Try 'ls' to see files.", type: "comment" }
        ]);
      } 
      else if (command === "help") {
        addOutput([
          "Available commands:", 
          "  ls                - List directory contents",
          "  cat [file]        - Read a file",
          "  ./why_hire_me.sh  - Run audit script",
          "  whoami            - Current user info",
          "  clear             - Clear screen"
        ], "info");
      } 
      else if (command === "") {
        // Do nothing
      }
      else {
        addOutput([`bash: ${command}: command not found`], "error");
      }

      setIsProcessing(false);
    }
  };

  const runSimulation = async () => {
    const delay = (ms) => new Promise(r => setTimeout(r, ms));
    addOutput(["Initializing uniqueness check v2.4...", "Decrypting professional DNA..."], "system");
    await delay(600);
    const skills = [
      "Analyzing Problem Solving Patterns...",
      "Verifying 'Results-Oriented' Architecture...",
      "Checking Hackathon Performance (Top 5 Detected)...",
      "Compiling Full-Stack + AI Integration Capabilities...",
    ];
    for (const skill of skills) {
      setLines(prev => [...prev, { text: skill, type: "process" }]);
      await delay(300);
    }
    addOutput(["[####################] 100% Identity Verified"], "success");
    await delay(300);
  };

  // --- NEW: UNIQUE & CONFIDENT ANSWER ---
  const showHireMeResult = () => {
    addOutput([
      "",
      "-------------------------------------------------------",
      "  > CANDIDATE VALUE PROPOSITION: [MATCH FOUND] 🟢",
      "-------------------------------------------------------",
      "",
      "  Most candidates write code. I engineer PRODUCTS.",
      "",
      "  > THE UNIQUE DIFFERENCE:",
      "    1. I Build Systems, Not Just Features.",
      "       From 100% type-safe backends to AI",
      "       integration, I own the full lifecycle.",
      "",
      "    2. I thrive where Logic meets Creativity.",
      "       CGPA 8.51 + National Hackathon Finalist means",
      "       I have the discipline to study and the grit to ship.",
      "",
      "  > CAPABILITY MATRIX:",
      "    ✔ Backend:  High-Throughput",
      "    ✔ AI/ML:    Manual Vector Search & LLM integration",
      "    ✔ Mindset:  'It works on my machine' is not enough.",
      "",
      "  -------------------------------------------------------",
      "  STATUS: READY TO DEPLOY. LET'S BUILD SOMETHING GREAT.",
      "  -------------------------------------------------------",
      ""
    ], "result");
  };

  const addOutput = (outputLines, type = "output") => {
    const newLines = outputLines.map(line => ({ text: line, type: type }));
    setLines((prev) => [...prev, ...newLines]);
  };

  return (
    <div 
      onClick={handleTerminalClick}
      onMouseUp={handleMouseUp}
      className="w-full max-w-lg h-[400px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm flex flex-col"
    >
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className={`text-xs font-bold transition-colors duration-300 ${headerTitle.includes("Copied") ? "text-green-400" : "text-gray-400"}`}>
          {headerTitle}
        </div>
        <div className="w-10"></div>
      </div>

      <div 
        ref={terminalBodyRef}
        className="flex-1 p-4 overflow-y-auto custom-scrollbar selection:bg-green-500/30 selection:text-green-100"
      >
        {lines.map((line, i) => (
          <div 
            key={i} 
            className={`mb-1 break-words ${
              line.type === "command" ? "text-green-400 font-bold" : 
              line.type === "system" ? "text-blue-400" :
              line.type === "process" ? "text-yellow-400 dim" : 
              line.type === "comment" ? "text-gray-500 italic" : 
              line.type === "result" ? "text-gray-100 font-semibold" : 
              line.type === "success" ? "text-green-400" :
              line.type === "error" ? "text-red-400" :
              line.type === "info" ? "text-cyan-400" :
              "text-gray-300"
            }`}
          >
            {line.text}
          </div>
        ))}

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
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;