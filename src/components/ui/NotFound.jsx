// src/components/ui/NotFound.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

// Floating particle system — subtle, performant
const Particle = ({ delay, duration, size, startX, startY }) => (
  <motion.div
    initial={{ opacity: 0, y: startY, x: startX }}
    animate={{
      opacity: [0, 0.4, 0.4, 0],
      y: [startY, startY - 80],
      x: [startX, startX + (Math.random() - 0.5) * 30],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 4 + 2,
      ease: "easeOut",
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: "rgba(204, 255, 0, 0.25)",
      filter: "blur(1px)",
      pointerEvents: "none",
    }}
  />
);

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 2,
  size: 2 + Math.random() * 3,
  startX: (Math.random() - 0.5) * 300,
  startY: 40 + Math.random() * 20,
}));

const NotFound = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse-follow glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  // Set dark mode
  useEffect(() => {
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");
    root.classList.add("dark");
    return () => {
      if (!hadDark) root.classList.remove("dark");
    };
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-accent selection:text-bg-main"
      style={{
        backgroundColor: "#0A0A0A",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Mouse-follow radial glow */}
      <motion.div
        style={{
          position: "absolute",
          left: springX,
          top: springY,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(204,255,0,0.04) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.7) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        {/* 404 Typography */}
        <div className="relative mb-6">
          {/* Floating particles behind 404 */}
          {particles.map((p) => (
            <Particle key={p.id} {...p} />
          ))}

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(100px, 25vw, 200px)",
              fontWeight: 800,
              lineHeight: 0.9,
              color: "transparent",
              backgroundImage:
                "linear-gradient(180deg, rgba(224,224,224,0.9) 0%, rgba(224,224,224,0.15) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              userSelect: "none",
              letterSpacing: "-0.04em",
              position: "relative",
            }}
          >
            404
          </motion.h1>

          {/* Subtle accent line under 404 */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "rgba(204,255,0,0.4)",
              margin: "0 auto",
              marginTop: "8px",
              borderRadius: "2px",
              transformOrigin: "center",
              boxShadow: "0 0 12px rgba(204,255,0,0.15)",
            }}
          />
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            color: "#888",
            lineHeight: 1.6,
            maxWidth: "380px",
            marginBottom: "8px",
          }}
        >
          This page doesn't exist or has been moved.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: "13px",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Let's get you back on track.
        </motion.p>

        {/* CTA — Magnetic hover button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <motion.a
            href="/"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "'Space Grotesk', sans-serif",
              color: isHovered ? "#0A0A0A" : "#E0E0E0",
              backgroundColor: isHovered
                ? "rgba(204,255,0,0.9)"
                : "transparent",
              border: "1px solid",
              borderColor: isHovered
                ? "rgba(204,255,0,0.9)"
                : "rgba(255,255,255,0.12)",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.3s, background-color 0.3s, border-color 0.3s",
              cursor: "pointer",
            }}
          >
            <span>Back to Home</span>
            <motion.svg
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          position: "absolute",
          bottom: "32px",
          fontSize: "11px",
          color: "#333",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        Yashvanth M U
      </motion.div>
    </section>
  );
};

export default NotFound;