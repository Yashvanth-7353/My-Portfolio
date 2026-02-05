// src/constants/index.js
// src/constants/index.js

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
// ... Keep your existing HERO_CONTENT, PROJECTS, SKILLS, etc. below ...
// If you lost the previous data, I can provide the full file again.

export const HERO_CONTENT = {
  greeting: "HELLO, I AM",
  name: "YASHVANTH M U",
  role: "Full Stack Engineer.",
  description: "Results-oriented Developer specialized in Full-Stack Web Development and AI integration. Dedicated to engineering robust, scalable systems that solve real-world problems.",
  resumeLink: "public/Resume.pdf",
};

export const LINKS = {
  github: "https://github.com/Yashvanth-7353",
  linkedin: "https://linkedin.com/in/yashvanth-m-u",
  email: "yashavanth.mu870@gmail.com",
  phone: "+91 7353027029",
  resume: "public/Resume.pdf" // Ensure your file is named resume.pdf in public folder
};
// ... keep existing HERO_CONTENT, LINKS, etc. ...

export const ABOUT_CONTENT = {
  title: "Background",
  subtitle: "From Logic to Systems",
  bio: "I am a results-oriented developer from RV College of Engineering with a track record of transforming concepts into deployed products. My expertise lies in combining creative problem-solving with Artificial Intelligence to deliver user-centric applications. Whether it's architecting 100% type-safe backends or training high-dimensional vector search engines, I treat every project as an engineering expedition.",
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
    desc: "Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Cloud Computing."
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

export const PROJECTS = [
  {
    title: "trueProject",
    category: "AI & EdTech",
    description: "Architected a project lifecycle system using FastAPI with 100% type safety. Integrated Google Gemini as an automated 'LLM Judge' to reduce faculty review time by 60% and engineered a sub-millisecond plagiarism engine using FAISS.",
    tech: ["FastAPI", "React.js", "PostgreSQL", "Google Gemini", "FAISS"],
    repo: "https://github.com/Yashvanth-7353/trueProject", 
    demo: "https://trueprojects.vercel.app/" 
  },
  {
    title: "Gram Sahayak",
    category: "GovTech & Geospatial",
    description: "Developed a high-throughput digital governance platform handling 1000+ concurrent requests. Features real-time geospatial mapping (Leaflet.js) and AI-driven grievance routing using OpenRouter API.",
    tech: ["FastAPI", "MongoDB (Async)", "React.js", "AWS S3", "Leaflet.js"],
    repo: "https://github.com/Yashvanth-7353/Gram-Sahayak",
    demo: "https://gramsahayak.vercel.app/"
  },
  {
    title: "Network Navigator",
    category: "Algorithms & Viz",
    description: "Engineered an interactive topology editor for 50+ nodes using React Flow. Implemented live Dijkstra's algorithm visualization and a real-time analytics dashboard for monitoring latency and throughput.",
    tech: ["Next.js", "TypeScript", "React Flow", "Shadcn/UI"],
    repo: "https://github.com/Yashvanth-7353/Network_Navigator",
    demo: null 
  },
  {
    title: "NutriTrack AI",
    category: "AI & Health Tech",
    description: "Architected a Next.js app using Google Gemini API to analyze ingredient lists for health risks and FSSAI compliance. Optimized UI performance by 30% using Serverless functions.",
    tech: ["Next.js", "Google Gemini", "Tailwind CSS", "Serverless"],
    repo: "https://github.com/Yashvanth-7353/NutriTrack-AI", 
    demo: null // SET TO NULL TO HIDE DEMO BUTTON
  },
  {
    title: "Alzheimer's Assistant",
    category: "Cloud & Vision AI",
    description: "Built a secure backend handling media uploads to GCP. Integrated Google Vision API for 95% precision face recognition to help patients recall memories.",
    tech: ["Node.js", "Google Cloud", "Vision API", "Express"],
    repo: "https://github.com/Yashvanth-7353/AlzAid",
    demo: null // Example: No live link
  },
  {
    title: "Predictive Maintenance",
    category: "ML & IoT",
    description: "Developed an IoT sensing module (ESP32) and trained a Random Forest classifier achieving 92% accuracy in detecting machinery faults.",
    tech: ["Python", "Scikit-learn", "IoT/ESP32", "Firebase"],
    repo: "https://github.com/Yashvanth-7353/Predictive_Maintenance",
    demo: null  // Example: No live link
  }
];

export const SKILLS = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Tailwind CSS", "React Flow", "Shadcn/UI"] },
  { category: "Backend & Cloud", items: ["FastAPI", "Node.js", "AWS (S3/EC2)", "MongoDB", "PostgreSQL"] },
  { category: "AI & Tools", items: ["Google Gemini", "Docker", "Git/GitHub", "Linux", "Postman"] }
];