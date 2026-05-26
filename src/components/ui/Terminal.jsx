import { useState, useEffect, useRef } from "react";
import { LINKS } from "../../constants";

const Terminal = () => {
  const [lines, setLines] = useState([
    { text: "Linux portfolio-server 6.8.0-generic x86_64", type: "system" },
    { text: "Last login: " + new Date().toUTCString(), type: "system" },
    { text: "Type 'help' for commands. Try 'ls' to see files.", type: "comment" },
  ]);

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

  const handleTerminalClick = () => {
    const selection = window.getSelection();
    if (selection.toString().length === 0) {
      inputRef.current?.focus();
    }
  };

  const handleMouseUp = () => {
    const selection = window.getSelection().toString();
    if (selection.length > 0) {
      navigator.clipboard
        .writeText(selection)
        .then(() => {
          const originalTitle = "root@yashvanth: ~";
          setHeaderTitle("Copied to Clipboard! 📋");
          setTimeout(() => setHeaderTitle(originalTitle), 1500);
        })
        .catch((err) => console.error("Copy failed", err));
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !isProcessing) {
      e.preventDefault();

      const rawInput = inputValue.trim();
      const args = rawInput.split(" ");
      const command = args[0].toLowerCase();

      setLines((prev) => [
        ...prev,
        { text: `root@yashvanth:~$ ${rawInput}`, type: "command" },
      ]);
      setInputValue("");
      setIsProcessing(true);

      if (command === "./why_hire_me.sh") {
        await runSimulation();
        showHireMeResult();
      } else if (command === "ls" || command === "ll") {
        addOutput([
          "drwxr-xr-x  2 root root  4096 Feb 05 10:00 projects/",
          "-rwxr-xr-x  1 root root   512 Feb 05 10:00 why_hire_me.sh",
          "-rw-r--r--  1 root root   240 Feb 05 10:00 contact.txt",
          "-rw-r--r--  1 root root  1024 Feb 05 10:00 skills.json",
          "-rw-r--r--  1 root root   512 Feb 05 10:00 stack.json",
          "-rw-r--r--  1 root root    12 Feb 05 10:00 secret.txt",
        ]);
      } else if (command === "cat") {
        const file = args[1];
        if (!file) {
          addOutput(["Usage: cat [filename]"], "error");
        } else if (file === "contact.txt") {
          addOutput(
            [
              "─── CONTACT ────────────────────────────────",
              `  Email    : ${LINKS.email}`,
              `  Phone    : ${LINKS.phone}`,
              `  GitHub   : ${LINKS.github}`,
              `  LinkedIn : ${LINKS.linkedin}`,
              "────────────────────────────────────────────",
              "  I respond fast. Try me.",
            ],
            "success"
          );
        } else if (file === "skills.json") {
          addOutput(
            [
              "{",
              '  "languages" : ["C++", "Python", "JavaScript", "TypeScript", "SQL"],',
              '  "frontend"  : ["React.js", "HTML", "CSS", "Tailwind CSS"],',
              '  "backend"   : ["Node.js", "Express.js", "FastAPI"],',
              '  "databases" : ["PostgreSQL", "MongoDB", "FAISS"],',
              '  "cloud"     : ["AWS (EC2, ECR, S3)", "Docker", "Linux"],',
              '  "other"     : ["Socket.IO", "JWT", "REST APIs", "Postman"]',
              "}",
            ],
            "result"
          );
        } else if (file === "stack.json") {
          addOutput(
            [
              "{",
              '  "currently_building" : "CloudOps — self-hosted deployment platform",',
              '  "currently_learning" : "System design, distributed systems",',
              '  "currently_reading"  : "Designing Data-Intensive Applications",',
              '  "open_to"           : "SWE internships, new grad roles, startups"',
              "}",
            ],
            "result"
          );
        } else if (file === "secret.txt") {
          addOutput(
            ["🥚 Easter egg found. Honestly, just run the script."],
            "success"
          );
        } else if (file === "why_hire_me.sh") {
          addOutput(
            ["Binary file not readable. Execute it with ./why_hire_me.sh"],
            "error"
          );
        } else {
          addOutput([`cat: ${file}: No such file or directory`], "error");
        }
      } else if (command === "git") {
        const sub = args[1];
        if (sub === "log") {
          await gitLogAnimation();
        } else if (sub === "status") {
          addOutput(
            [
              "On branch main",
              "Your branch is ahead of 'average-candidate/main' by 6 commits.",
              "",
              "  Changes ready to ship:",
              "    new file: CloudOps (auto-provisions EC2 via AWS SDK)",
              "    new file: Gram Sahayak (deployed, live demo available)",
              "    modified: trueProject (FAISS semantic search added)",
              "",
              "nothing to commit, already building the next thing.",
            ],
            "result"
          );
        } else if (sub === "diff") {
          addOutput(
            [
              "diff --git a/avg_candidate b/yashvanth",
              "--- a/avg_candidate",
              "+++ b/yashvanth",
              "@@ skills @@",
              "-  knows Docker (pulled images from tutorials)",
              "+  builds Docker images, pushes to ECR, provisions EC2 via SDK",
              "@@ deployment @@",
              "-  runs on localhost",
              "+  deployed: Gram Sahayak live, ImpactBridge in production",
              "@@ ownership @@",
              "-  followed a guide",
              "+  made design decisions (50m GPS radius, 30s TTL cache)",
              "@@ honesty @@",
              "-  inflated metrics on resume",
              "+  knows exactly what each number means and why",
            ],
            "success"
          );
        } else {
          addOutput(
            ["hint: try  git log  |  git diff  |  git status"],
            "info"
          );
        }
      } else if (command === "ping") {
        const target = args[1] || "yashvanth";
        await pingAnimation(target);
      } else if (command === "ps") {
        addOutput(
          [
            "PID   USER       COMMAND",
            "001   yashvanth  building --project=CloudOps",
            "002   yashvanth  solving  --platform=leetcode (185+ done)",
            "003   yashvanth  learning --topic='system-design'",
            "004   yashvanth  open     --for='internships & new-grad roles'",
          ],
          "result"
        );
      } else if (command === "whoami") {
        addOutput([
          "yashvanth — Software engineer aspirient, RVCE ISE, 3rd year",
          "builds things end-to-end and actually deploys them",
        ]);
      } else if (command === "date") {
        addOutput([new Date().toString()]);
      } else if (command === "uptime") {
        addOutput([
          " 10:00:00 up 24 days, 7 min, 1 user, load average: 0.00, 0.01, 0.05",
        ]);
      } else if (command === "sudo") {
        addOutput(
          [
            "root@yashvanth is not in the sudoers file. This incident will be reported.",
          ],
          "error"
        );
      } else if (command === "clear") {
        setLines([
          {
            text: "Type 'help' for commands. Try 'ls' to see files.",
            type: "comment",
          },
        ]);
      } else if (command === "help") {
        addOutput(
          [
            "Available commands:",
            "",
            "  ls / ll              — list directory contents",
            "  cat [file]           — read a file",
            "  ./why_hire_me.sh     — run candidate audit",
            "  git log              — commit history as a story",
            "  git diff             — me vs average candidate",
            "  git status           — what's ready to ship",
            "  ping [target]        — check if I'm reachable",
            "  ps                   — what's currently running",
            "  whoami               — current user info",
            "  date / uptime        — system info",
            "  clear                — clear terminal",
          ],
          "info"
        );
      } else if (command === "") {
        // do nothing
      } else {
        addOutput([`bash: ${command}: command not found`], "error");
      }

      setIsProcessing(false);
    }
  };

  // ─── Animations ────────────────────────────────────────────────────────────

  const runSimulation = async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    addOutput(
      ["Initializing candidate audit v2.4...", "Loading profile data..."],
      "system"
    );
    await delay(500);
    const checks = [
      "Checking project depth..................... ✓",
      "Verifying production deployments........... ✓",
      "Scanning for copy-paste engineering........ ✗  (none found)",
      "Validating real ownership of claims........ ✓",
    ];
    for (const check of checks) {
      setLines((prev) => [...prev, { text: check, type: "process" }]);
      await delay(320);
    }
    addOutput(["[####################] 100% — Audit complete."], "success");
    await delay(300);
  };

  const gitLogAnimation = async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const commits = [
      { hash: "f1a09bc", msg: "feat(cloudops): HMAC-SHA256 webhook — not just a POST handler" },
      { hash: "a3f2c1b", msg: "feat(cloudops): auto-provision EC2 via AWS SDK, not SSH into a fixed box" },
      { hash: "9d1e4f2", msg: "fix(cache): 80% DB call drop — batch writes + 30s TTL read-through" },
      { hash: "7c3b8a1", msg: "feat(geo): Haversine check, 50m — because GPS lies on cheap phones" },
      { hash: "2f9d0e3", msg: "fix(resume): removed metric I couldn't defend, replaced with real one" },
      { hash: "8e2c5d1", msg: "chore: deployed to prod, not just localhost" },
      { hash: "4b7f3e0", msg: "fix: asked why before writing a single line of code" },
      { hash: "c9d2a18", msg: "feat: internship at live startup with real NGO users" },
      { hash: "3a1f8b2", msg: "init: wrote code that could survive a code review" },
    ];
    addOutput(
      ["git log --oneline --graph yashvanth/main", ""],
      "system"
    );
    await delay(300);
    for (const c of commits) {
      setLines((prev) => [
        ...prev,
        { text: `* ${c.hash}  ${c.msg}`, type: "result" },
      ]);
      await delay(250);
    }
    addOutput(
      ["", "─── 9 commits ahead of tutorial-follower/main ───"],
      "comment"
    );
  };

  const pingAnimation = async (target) => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    addOutput([`PING ${target} (yashvanth.pages.dev): 56 bytes`], "system");
    await delay(300);
    const pings = [
      "64 bytes from yashvanth: icmp_seq=0 ttl=64 time=1.2 ms  ← responds fast",
      "64 bytes from yashvanth: icmp_seq=1 ttl=64 time=0.9 ms  ← still here",
      "64 bytes from yashvanth: icmp_seq=2 ttl=64 time=1.1 ms  ← reliable",
    ];
    for (const p of pings) {
      setLines((prev) => [...prev, { text: p, type: "output" }]);
      await delay(400);
    }
    addOutput(
      [
        "",
        "--- ping stats ---",
        "3 packets transmitted, 3 received, 0% packet loss",
        "→ Run 'cat contact.txt' to open a connection.",
      ],
      "success"
    );
  };

  // ─── Why hire me result ─────────────────────────────────────────────────────

  const showHireMeResult = () => {
    addOutput(
      [
        "",
        "┌─ git log --why-hire --author='Yashvanth M U' ────────┐",
        "",
        "* f1a09bc  built HMAC webhook verification, not skipped it",
        "* a3f2c1b  auto-provisioned EC2 via AWS SDK from scratch",
        "* 9d1e4f2  reduced DB calls 80% by thinking before coding",
        "* 7c3b8a1  chose 50m GPS radius — and can explain why",
        "* 2f9d0e3  removed a fake metric. kept the real one.",
        "* 8e2c5d1  shipped to prod. not just pushed to github.",
        "",
        "└──────────────────────────────────────────────────────┘",
        "",
        "  Every commit above is a real thing I built or decided.",
        "  No inflated numbers. No tutorial-copied architecture.",
        "",
        "  Most candidates write code. I write code I can defend.",
        "",
        "  → Run 'git diff' to see how I compare.",
        "  → Run 'cat contact.txt' if you want to talk.",
        "",
      ],
      "result"
    );
  };

  // ─── Helper ────────────────────────────────────────────────────────────────

  const addOutput = (outputLines, type = "output") => {
    const newLines = outputLines.map((line) => ({ text: line, type }));
    setLines((prev) => [...prev, ...newLines]);
  };

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      onClick={handleTerminalClick}
      onMouseUp={handleMouseUp}
      className="w-full max-w-lg h-[400px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800 font-mono text-sm flex flex-col"
    >
      {/* Title bar */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div
          className={`text-xs font-bold transition-colors duration-300 ${
            headerTitle.includes("Copied") ? "text-green-400" : "text-gray-400"
          }`}
        >
          {headerTitle}
        </div>
        <div className="w-10" />
      </div>

      {/* Terminal body */}
      <div
        ref={terminalBodyRef}
        className="flex-1 p-4 overflow-y-auto custom-scrollbar selection:bg-green-500/30 selection:text-green-100"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={`mb-1 break-words whitespace-pre ${
              line.type === "command"
                ? "text-green-400 font-bold"
                : line.type === "system"
                ? "text-blue-400"
                : line.type === "process"
                ? "text-yellow-400"
                : line.type === "comment"
                ? "text-gray-500 italic"
                : line.type === "result"
                ? "text-gray-100"
                : line.type === "success"
                ? "text-green-400"
                : line.type === "error"
                ? "text-red-400"
                : line.type === "info"
                ? "text-cyan-400"
                : "text-gray-300"
            }`}
          >
            {line.text}
          </div>
        ))}

        {/* Input row */}
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