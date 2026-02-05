import { useState, useEffect, useRef } from "react";
import { LINKS } from "../../constants"; // Import links for dynamic contact info

const Terminal = () => {
  const [lines, setLines] = useState([
    { text: "Linux portfolio-server 6.8.0-generic x86_64", type: "system" },
    { text: "Last login: " + new Date().toUTCString(), type: "system" },
    { text: "Type 'help' for commands. Try 'ls' to see files.", type: "comment" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  // Auto-scroll
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
      e.preventDefault();
      
      const rawInput = inputValue.trim();
      const args = rawInput.split(" ");
      const command = args[0].toLowerCase();
      
      setLines((prev) => [...prev, { text: `root@yashvanth:~$ ${rawInput}`, type: "command" }]);
      setInputValue("");
      setIsProcessing(true);

      // --- COMMAND HANDLER ---
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
          addOutput(["🥚 You found the Guy! Just Hire"], "success");
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
      // CHANGED: Clear command now keeps the help hint
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

  // --- SIMULATION LOGIC ---
  const runSimulation = async () => {
    const delay = (ms) => new Promise(r => setTimeout(r, ms));
    addOutput(["Initializing analytical engine v2.4...", "Loading candidate profile context..."], "system");
    await delay(600);
    const skills = [
      "Verifying module: 'Full_Stack_Architecture'...",
      "Checking dependencies: 'Next.js', 'FastAPI', 'PostgreSQL'...",
      "Analyzing GitHub contributions...",
      "Validating Cloud Credentials (GCP & AWS)...",
    ];
    for (const skill of skills) {
      setLines(prev => [...prev, { text: skill, type: "process" }]);
      await delay(300);
    }
    addOutput(["[####################] 100% Analysis Complete"], "success");
    await delay(300);
  };

  const showHireMeResult = () => {
    addOutput([
      "",
      "----------------------------------------------------------",
      "  CANDIDATE SUITABILITY AUDIT REPORT: [PASSED] ✔",
      "----------------------------------------------------------",
      "  [USER]: Yashvanth M U",
      "  [ROLE]: Full Stack Engineer / AI Specialist",
      "",
      "  > METRICS:",
      "    ✔ Efficiency:    High (Serverless & AsyncIO)",
      "    ✔ Accuracy:      92% on ML Models",
      "    ✔ Soft Skills:   Rapid Prototyping (Hackfest Top 5)",
      "",
      "  CONCLUSION: IMMEDIATE ASSET TO ENGINEERING TEAM.",
      "----------------------------------------------------------",
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
      className="w-full max-w-lg h-[400px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm flex flex-col"
    >
      {/* LINUX HEADER */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-gray-400 text-xs font-bold">root@yashvanth: ~</div>
        <div className="w-10"></div>
      </div>

      {/* TERMINAL BODY */}
      <div 
        ref={terminalBodyRef}
        className="flex-1 p-4 overflow-y-auto custom-scrollbar"
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
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;