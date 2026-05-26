import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [logs, setLogs] = useState([]);
  const [isRecoverable, setIsRecoverable] = useState(false);

  const errorSequence = [
    { text: "❯ ERROR 404: Target route resolution failed.", delay: 300 },
    { text: "❯ Scanning active Docker containers...", delay: 1200 },
    { text: "❯ Container 'yashvanth-portfolio-ui' state: ORPHANED.", delay: 2000 },
    { text: "❯ Querying AWS EC2 instance state...", delay: 2800 },
    { text: "❯ WARNING: Subnet gateway unreachable. Packet lost.", delay: 3800 },
    { text: "❯ System halted. Manual recovery required.", delay: 4800 },
  ];

  useEffect(() => {
    let timeoutIds = [];
    
    errorSequence.forEach((log, index) => {
      const id = setTimeout(() => {
        setLogs((prev) => [...prev, log.text]);
        if (index === errorSequence.length - 1) {
          setTimeout(() => setIsRecoverable(true), 800);
        }
      }, log.delay);
      timeoutIds.push(id);
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  // Jitter effect for the Glitch Text
  const glitchAnimation = {
    hidden: { opacity: 0.8, x: 0 },
    visible: {
      opacity: [0.8, 1, 0.8, 1, 0.5, 1],
      x: [0, -4, 4, -2, 2, 0],
      transition: { duration: 0.4, repeat: Infinity, repeatType: "mirror", repeatDelay: 3 }
    }
  };

  return (
    <section className="min-h-screen bg-bg-main flex flex-col items-center justify-center px-6 relative overflow-hidden font-mono selection:bg-accent selection:text-bg-main">
      
      {/* Background Noise & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-0 opacity-80 pointer-events-none" />
      <div className="grain-overlay" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        
        {/* --- MASSIVE GLITCH 404 --- */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* Cyan layer */}
          <motion.h1 
            variants={glitchAnimation}
            initial="hidden"
            animate="visible"
            className="text-[120px] md:text-[200px] font-display font-extrabold text-cyan-500 absolute ml-1 mt-1 mix-blend-screen opacity-70"
          >
            404
          </motion.h1>
          {/* Red layer */}
          <motion.h1 
            variants={glitchAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-[120px] md:text-[200px] font-display font-extrabold text-red-500 absolute -ml-1 -mt-1 mix-blend-screen opacity-70"
          >
            404
          </motion.h1>
          {/* Main White/Text layer */}
          <h1 className="text-[120px] md:text-[200px] font-display font-extrabold text-text-main relative z-10">
            404
          </h1>
        </div>

        {/* --- THE DIAGNOSTIC TERMINAL --- */}
        <div className="w-full bg-[#111111] border border-line rounded-lg overflow-hidden shadow-2xl shadow-accent/5">
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center border-b border-line">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto text-text-muted text-xs uppercase tracking-widest font-bold">
              kernel-panic.log
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-64 md:h-72 overflow-y-auto flex flex-col justify-start">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-2 text-sm md:text-base ${
                  log.includes("FATAL") || log.includes("ERROR") || log.includes("WARNING")
                    ? "text-red-400" 
                    : "text-text-muted"
                }`}
              >
                {log}
              </motion.div>
            ))}
            
            {/* Blinking Cursor */}
            {!isRecoverable && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-accent mt-2"
              />
            )}

            {/* Recovery Action */}
            {isRecoverable && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 border-t border-line/50 pt-6 flex flex-col items-center text-center"
              >
                <p className="text-accent mb-4 text-sm font-bold tracking-wider uppercase">
                  System Awaiting Input
                </p>
                <a 
                  href="/" 
                  className="group relative px-8 py-3 bg-transparent border border-accent text-accent font-bold uppercase tracking-wider overflow-hidden hover:text-bg-main transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    Initiate Recovery Protocol <span className="text-lg">↵</span>
                  </span>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;