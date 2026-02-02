// src/constants/index.js
// src/constants/index.js

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// ... Keep your existing HERO_CONTENT, PROJECTS, SKILLS, etc. below ...
// If you lost the previous data, I can provide the full file again.

export const HERO_CONTENT = {
  greeting: "HELLO, I AM",
  name: "YASHVANTH M U",
  role: "Full Stack Engineer.",
  description: "Aspiring Software Engineer proficient in full-stack web development, Cloud Computing (GCP), and AI/ML integration. Passionate about engineering scalable, intelligent systems that solve real-world problems.",
  resumeLink: "#",
};

export const LINKS = {
  github: "https://github.com/Yashvanth-7353",
  linkedin: "https://linkedin.com/in/yashvanth-m-u",
  email: "mailto:yashavanth.mu870@gmail.com"
};
// ... keep existing HERO_CONTENT, LINKS, etc. ...

export const ABOUT_CONTENT = {
  title: "Background",
  subtitle: "From Logic to Systems",
  bio: "My journey started with a curiosity for how things work, which quickly evolved into a passion for engineering scalable software. I don't just write code; I design systems. Whether it's optimizing backend logic for a Smart Village dashboard or training AI models for healthcare, I treat every project as a problem-solving expedition.",
  stats: [
    { label: "CGPA", value: "8.51" },
    { label: "Projects", value: "10+" },
    { label: "Failure Loops", value: "100+" }
 // Estimate
  ]
};

export const EDUCATION = [
  {
    school: "RV College of Engineering",
    degree: "B.E. in Information Science",
    year: "2023 - Present",
    grade: "CGPA: 8.51",
    desc: "Focus on Data Structures, Algorithms, Cloud Computing (GCP), and Operating Systems."
  },
  {
    school: "Vidyanidhi PU College",
    degree: "Class 12 (PCMB)",
    year: "2021 - 2023",
    grade: "93%",
    desc: "Built analytical thinking in Physics and Mathematics, laying the foundation for engineering logic."
  },
  {
    school: "Ravindra Bharathi Vidya Mandira",
    degree: "Class 10 (Secondary)",
    year: "2021",
    grade: "94.56%",
    desc: "Established a strong foundation in core sciences, emphasizing logical thinking, accuracy, and problem-solving."
  }
];

// ... keep existing PROJECTS, SKILLS, NAV_LINKS ...

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