// src/constants/index.js

export const HERO_CONTENT = {
  greeting: "HELLO, I AM",
  name: "YASHVANTH M U",
  role: "Full Stack Engineer & Cloud Architect",
  description: "Engineering scalable, intelligent systems that bridge the gap between complex backend logic and intuitive frontend experiences. Focused on GCP, AI/ML Integration, and Next.js.",
  resumeLink: "#", // Add your PDF link here later
};

export const LINKS = {
  github: "https://github.com/Yashvanth-7353",
  linkedin: "https://linkedin.com/in/yashvanth-m-u",
  email: "mailto:yashavanth.mu870@gmail.com"
};

export const PROJECTS = [
  {
    title: "NutriTrack AI",
    category: "AI & Health Tech",
    description: "Architected a Next.js app using Google Gemini API to analyze ingredient lists for health risks and FSSAI compliance.",
    tech: ["Next.js", "Google Gemini", "ShadCN/UI", "Serverless"],
    link: "#"
  },
  {
    title: "Network Navigator",
    category: "IoT & Algorithms",
    description: "Engineered a network topology editor simulating routing for 50+ nodes with Dijkstra's algorithm and real-time metrics.",
    tech: ["ReactFlow", "IoT", "Algorithms", "React"],
    link: "#"
  },
  {
    title: "Alzheimer's Assistant",
    category: "Cloud & Vision AI",
    description: "Built a secure backend handling media uploads to GCP, integrating Google Vision API for 95% precision face recognition.",
    tech: ["Node.js", "GCP", "Vision API", "Express"],
    link: "#"
  },
  {
    title: "Predictive Maintenance",
    category: "ML & IoT",
    description: "Developed an IoT sensing module (ESP32) and trained a Random Forest classifier achieving 92% accuracy in fault detection.",
    tech: ["Python", "Scikit-learn", "IoT/ESP32", "Firebase"],
    link: "#"
  }
];

export const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend & Cloud", items: ["Node.js", "Google Cloud (GCP)", "Firebase", "PostgreSQL"] },
  { category: "AI & Tools", items: ["Google Gemini", "Vision API", "Git", "Docker"] }
];