// src/constants/index.js

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "HELLO, I AM",
  name: "YASHVANTH M U",
  role: "Full Stack Engineer.",
  description:
    "Software Engineering student at RVCE building full-stack systems with React, FastAPI, and Node.js. Experienced in cloud infrastructure (AWS EC2/ECR), Docker-based deployments, geospatial systems, and semantic search with FAISS.",
  resumeLink: "/Resume.pdf",
};

export const LINKS = {
  github: "https://github.com/Yashvanth-7353",
  linkedin: "https://www.linkedin.com/in/yashvanth-m-u-720598282/",
  email: "yashavanth.mu870@gmail.com",
  phone: "+91 7353027029",
  resume: "/Resume.pdf",
};

export const ABOUT_CONTENT = {
  title: "Background",
  subtitle: "From Logic to Systems",
  bio: "I got into coding because I wanted to build things that work, not just things that look like they work. Most of my projects started from a real problem — fake GPS reports, untracked complaints, deployment that only runs on my laptop. I pick up what I need to solve it, and I stay until it's actually done.",
  stats: [
    { label: "CGPA", value: "8.63" },
    { label: "Projects", value: "10+" },
    { label: "LeetCode", value: "185+" },
  ],
};

export const EDUCATION = [
  {
    school: "RV College of Engineering",
    degree: "B.E. in Information Science & Engineering",
    year: "2023 – Present",
    grade: "CGPA: 8.63",
    desc: "Core Courses: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Cloud Computing.",
  },
  {
    school: "Vidyanidhi PU College",
    degree: "Class 12 (PCMB)",
    year: "2021 – 2023",
    grade: "93%",
    desc: "Built analytical thinking in Physics and Mathematics, laying the foundation for engineering logic.",
  },
  {
    school: "Ravindra Bharathi Vidya Mandira",
    degree: "Class 10 (Secondary)",
    year: "2021",
    grade: "94.56%",
    desc: "Established a strong foundation in core sciences, emphasising logical thinking and problem-solving.",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "ImpactBridge",
    duration: "March 2026 – Present",
    context: "Early-stage startup serving 10+ NGO clients across events, donations, and volunteer management.",
    description: [
      "Rebuilt the React frontend from scratch across 4 NGO dashboard modules (Events, Donations, Shop, Volunteers), replacing the simple and static UI with a reusable component architecture.",
      "Implemented a read-through cache (30s TTL) and batched-write pipeline for analytics, cutting database call volume by 80% (~20 req/min to ~4 req/min).",
      "Built Node.js/Express REST APIs across all four modules with full CRUD workflows and structured request validation.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "CloudOps",
    category: "Cloud & DevOps",
    description:
      "A self-service deployment platform that clones GitHub repos, builds Docker images from user-supplied Dockerfiles, pushes to AWS ECR, and auto-provisions EC2 instances via the AWS SDK. Features real-time build log streaming via Socket.IO and a GitHub webhook handler with HMAC-SHA256 signature verification for automated redeployments.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Docker", "AWS EC2", "AWS ECR", "Socket.IO", "MongoDB"],
    repo: "https://github.com/Yashvanth-7353/CloudOps",
    demo: null,
  },
  {
    title: "Gram Sahayak",
    category: "GovTech & Geospatial",
    description:
      "A full-stack civic infrastructure reporting platform with JWT-based RBAC for citizens, contractors, and government officials. Features a Haversine-based geospatial verification layer enforcing a 50-metre proximity check to block GPS-spoofed filings, LLM-based sentiment classification on grievances, and a 14-day auto-escalation workflow with dashboard urgency flagging.",
    tech: ["FastAPI", "React", "MongoDB", "JWT", "Leaflet.js", "AWS S3", "OpenRouter LLMs"],
    repo: "https://github.com/Yashvanth-7353/Gram-Sahayak",
    demo: "https://gramsahayak.vercel.app/",
  },
  {
    title: "trueProject",
    category: "AI & EdTech",
    description:
      "A multi-tenant academic project management portal with JWT-based RBAC for Students, Faculty, and Administrators. Includes a semantic search layer using Sentence Transformers and FAISS over project titles and abstracts, and LLM-generated evaluation summaries to automate the initial faculty review step.",
    tech: ["FastAPI", "React", "PostgreSQL", "FAISS", "Sentence Transformers", "OpenRouter LLMs"],
    repo: "https://github.com/Yashvanth-7353/trueProject",
    demo: "https://trueprojects.vercel.app/",
  },
  {
    title: "Network Navigator",
    category: "Algorithms & Visualisation",
    description:
      "An interactive network topology editor for 50+ nodes built with React Flow. Includes live Dijkstra's algorithm visualisation and a real-time analytics dashboard for monitoring latency and throughput.",
    tech: ["Next.js", "TypeScript", "React Flow", "Shadcn/UI"],
    repo: "https://github.com/Yashvanth-7353/Network_Navigator",
    demo: null,
  },
  {
    title: "NutriTrack AI",
    category: "AI & Health Tech",
    description:
      "A Next.js app that uses the Google Gemini API to analyse ingredient lists for health risks and FSSAI compliance, with serverless functions handling API routing.",
    tech: ["Next.js", "Google Gemini", "Tailwind CSS", "Serverless"],
    repo: "https://github.com/Yashvanth-7353/NutriTrack-AI",
    demo: null,
  },
  {
    title: "Alzheimer's Assistant",
    category: "Cloud & Vision AI",
    description:
      "A secure backend handling media uploads to GCP, integrated with Google Vision API for face recognition to help patients recall memories.",
    tech: ["Node.js", "Google Cloud", "Vision API", "Express"],
    repo: "https://github.com/Yashvanth-7353/AlzAid",
    demo: null,
  },
  {
    title: "Predictive Maintenance",
    category: "ML & IoT",
    description:
      "An IoT sensing module (ESP32) paired with a Random Forest classifier achieving 92% accuracy in detecting machinery faults from sensor readings.",
    tech: ["Python", "Scikit-learn", "IoT / ESP32", "Firebase"],
    repo: "https://github.com/Yashvanth-7353/Predictive_Maintenance",
    demo: null,
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Databases",
    items: [ "MongoDB", "FAISS", "Firebase" ],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS (EC2, ECR, S3)", "Docker", "Git / GitHub", "Linux"],
  },
  {
    category: "Other",
    items: ["Socket.IO", "REST APIs", "JWT", "Postman"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "LeetCode",
    detail: "185+ problems solved — arrays, graphs, and dynamic programming.",
    link: null,
  },
  {
    title: "National Finalist — Hackfest (NMAMIT)",
    detail: "Top 5 of 60+ teams in a 36-hour national hackathon.",
    link: null,
  },
  {
    title: "Big Data Computing (NPTEL)",
    detail: "Elite + Gold Medal — Top 5% nationally, score 91%.",
    link: "https://drive.google.com/file/d/1d0cKAqE7zkieRHmE5-kXmULMMW4y7D0Q/view?usp=sharing",
  },
  {
    title: "Data Science for Engineers (NPTEL)",
    detail: "Elite + Silver Medal, score 81%.",
    link: "https://drive.google.com/file/d/1By3e-H-xWVR6XCFF8gtVTF3j49h3a-zE/view?usp=sharing",
  },
  {
    title: "GCP Cloud Arcade",
    detail: "Completed Google Cloud Skills Boost.",
    link: "https://www.skills.google/public_profiles/7b323609-edb4-4af7-8add-cd67526436bb",
  },
];