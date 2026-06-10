// src/components/ui/Loader.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";

/* ─────────────────────────────────────────────
 *  SVG path segments for the "YM" monogram.
 *  Each line of the letterforms is drawn
 *  individually with staggered timing,
 *  like an architect's compass tracing a mark.
 * ───────────────────────────────────────────── */
const STROKES = [
  // ── Y ──
  { d: "M30,5 L70,40", delay: 0.35, dur: 0.32 },   // left arm
  { d: "M110,5 L70,40", delay: 0.47, dur: 0.32 },   // right arm
  { d: "M70,40 L70,75", delay: 0.58, dur: 0.26 },   // stem
  // ── M ──
  { d: "M155,75 L155,5", delay: 0.72, dur: 0.30 },   // left pillar
  { d: "M155,5 L200,48", delay: 0.84, dur: 0.26 },   // left inner diagonal
  { d: "M200,48 L245,5", delay: 0.94, dur: 0.26 },   // right inner diagonal
  { d: "M245,5 L245,75", delay: 1.04, dur: 0.30 },   // right pillar
];

const SUBTITLE = "SOFTWARE ENGINEER";
const EASE = [0.22, 1, 0.36, 1];

/* ─── Geometric corner bracket ─── */
const Bracket = ({ x, y, delay }) => {
  const isLeft = x === "left";
  const isTop = y === "top";

  return (
    <div style={{ position: "absolute", [y]: "13%", [x]: "9%" }}>
      {/* horizontal arm */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.35, delay, ease: EASE }}
        style={{
          position: "absolute",
          [y]: 0,
          [x]: 0,
          width: 28,
          height: 1,
          backgroundColor: "rgba(255,255,255,0.05)",
          transformOrigin: isLeft ? "left" : "right",
        }}
      />
      {/* vertical arm */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.35, delay: delay + 0.07, ease: EASE }}
        style={{
          position: "absolute",
          [y]: 0,
          [x]: 0,
          width: 1,
          height: 28,
          backgroundColor: "rgba(255,255,255,0.05)",
          transformOrigin: isTop ? "top" : "bottom",
        }}
      />
    </div>
  );
};

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* ── Viewfinder brackets ── */}
      <Bracket x="left" y="top" delay={0.1} />
      <Bracket x="right" y="top" delay={0.16} />
      <Bracket x="left" y="bottom" delay={0.22} />
      <Bracket x="right" y="bottom" delay={0.28} />

      {/* ── Ambient radial glow ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(204,255,0,0.05) 0%, rgba(204,255,0,0.01) 45%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Cross-hair guide lines ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        style={{
          position: "absolute",
          width: "min(320px, 80vw)",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent 100%)",
          transformOrigin: "center",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
        style={{
          position: "absolute",
          width: "1px",
          height: "min(200px, 50vw)",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent 100%)",
          transformOrigin: "center",
          pointerEvents: "none",
        }}
      />

      {/* ── SVG monogram — line-draw animation ── */}
      <svg
        viewBox="0 0 280 80"
        style={{
          width: "min(260px, 62vw)",
          height: "auto",
          overflow: "visible",
        }}
      >
        <defs>
          <filter id="strokeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {STROKES.map((s, i) => (
          <g key={i}>
            {/* Accent glow trail — draws behind main stroke */}
            <motion.path
              d={s.d}
              stroke="rgba(204,255,0,0.22)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0.18] }}
              transition={{
                pathLength: { duration: s.dur, delay: s.delay, ease: EASE },
                opacity: { duration: s.dur + 0.5, delay: s.delay },
              }}
              filter="url(#strokeGlow)"
            />
            {/* Main white stroke */}
            <motion.path
              d={s.d}
              stroke="#E0E0E0"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: s.dur, delay: s.delay, ease: EASE }}
            />
          </g>
        ))}

        {/* ── Accent dot separator · ── */}
        <motion.circle
          cx="132"
          cy="52"
          r="2.5"
          fill="#CCFF00"
          initial={{ opacity: 0, r: 0 }}
          animate={{ opacity: 1, r: 2.5 }}
          transition={{ duration: 0.25, delay: 1.2, ease: EASE }}
        />
        {/* Dot ripple pulse */}
        <motion.circle
          cx="132"
          cy="52"
          r="2.5"
          fill="none"
          stroke="rgba(204,255,0,0.35)"
          strokeWidth="1"
          initial={{ opacity: 0, r: 2.5 }}
          animate={{ opacity: [0, 0.5, 0], r: [2.5, 10, 14] }}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
        />
      </svg>

      {/* ── Accent divider line ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.3, ease: EASE }}
        style={{
          width: 48,
          height: 1,
          marginTop: 22,
          transformOrigin: "center",
          backgroundColor: "rgba(204,255,0,0.28)",
          boxShadow: "0 0 10px rgba(204,255,0,0.08)",
        }}
      />

      {/* ── Staggered subtitle ── */}
      <div
        style={{
          marginTop: 14,
          display: "flex",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(9px, 2vw, 11px)",
          fontWeight: 400,
          letterSpacing: "0.28em",
          color: "#4a4a4a",
          userSelect: "none",
        }}
      >
        {SUBTITLE.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.12,
              delay: 1.4 + i * 0.025,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* ── Bottom progress trace ── */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.3, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 1,
          backgroundColor: "rgba(204,255,0,0.2)",
          boxShadow: "0 0 8px rgba(204,255,0,0.08)",
        }}
      />
    </motion.div>
  );
};

export default Loader;