/**
 * Pratik Shewale — Portfolio Single Source of Truth
 * All profile data, social links, education details, and achievements are centralized here.
 */

export const PERSONAL_INFO = {
  name: "Pratik Shewale",
  title: "Software Engineer & AI/ML Developer",
  tagline: "Computer Engineering student at VJTI building impactful full-stack applications, intelligent AI/ML models, and scalable software solutions.",
  currentRole: "Undergraduate Computer Engineering Student",
  institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  period: "2024–2028",
  cgpa: "7.78/10", // Editable - verify before publication
  location: "Mumbai, Maharashtra, India",
  status: "Available for internships & collaborations",
  email: "pratikshewale21@gmail.com",
  resumeUrl: null, // Not provided yet; kept unset intentionally
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pratik-shewale-829194338",
    icon: "linkedin",
    label: "Professional Profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/PratikShewale21",
    icon: "github",
    label: "Open Source Code",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/_pratikshewale/",
    icon: "code",
    label: "DSA & Problem Solving",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pat.trickkk_?srtk=MXRkbWFoMnd0Zm51NQ==",
    icon: "instagram",
    label: "Personal Profile",
  },
  {
    name: "Email",
    url: "mailto:pratikshewale21@gmail.com",
    icon: "mail",
    label: "Direct Email",
  },
];

export const PROFESSIONAL_INTERESTS = [
  "Software Engineering",
  "Full-Stack Development",
  "Artificial Intelligence & Machine Learning",
  "Fintech",
  "Data Structures & Algorithms",
];

export const EDUCATION_DATA = [
  {
    id: "edu-01",
    index: "01",
    level: "Schooling (Class X ICSE)",
    institution: "VPMS Orion ICSE School, Mumbai",
    period: "2012–2022",
    score: "Class X ICSE",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    id: "edu-02",
    index: "02",
    level: "Higher Secondary Education (Class XII HSC)",
    institution: "Alpha Jr. College of Science and Commerce, Mumbai",
    period: "2022–2024",
    score: "Class XII HSC | MHT-CET 99.90%ile (Rank 247)",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    id: "edu-03",
    index: "03",
    level: "Undergraduate B.Tech",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    degree: "B.Tech in Computer Engineering",
    period: "2024–2028",
    score: "7.78 CGPA",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
];

export const ACADEMIC_METRICS = [
  {
    label: "MHT-CET Rank",
    value: "247",
    subtext: "99.90 Percentile",
  },
  {
    label: "LeetCode Solved",
    value: "300+",
    subtext: "DSA Problems",
  },
  {
    label: "Undergrad CGPA",
    value: "7.78",
    subtext: "VJTI B.Tech (2024-2028)",
  },
  {
    label: "BNY Spectrum",
    value: "Selected",
    subtext: "Joint Cert Program 2026",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Solved 300+ Problems on LeetCode",
    description: "Consistent problem-solving in Data Structures and Algorithms with a focus on graph algorithms, dynamic programming, and system design fundamentals.",
    category: "Coding",
  },
  {
    title: "MHT-CET Rank 247 (99.90 Percentile)",
    description: "Achieved top state rank among hundreds of thousands of candidates, securing admission into VJTI Computer Engineering.",
    category: "Academic",
  },
  {
    title: "BNY Spectrum Joint Certification Program (2026)",
    description: "Selected for the prestigious joint industry certification program with BNY Mellon.",
    category: "Corporate",
  },
  {
    title: "Best Second Year Prize at On-Chain Odyssey",
    description: "Awarded top honors for blockchain and decentralized solution development in competitive hackathon track.",
    category: "Hackathon",
  },
  {
    title: "State-Level Elocution Competitions",
    description: "Won 2nd prize twice in state-level public speaking and elocution competitions, highlighting communication and leadership skills.",
    category: "Public Speaking",
  },
];

export const LEADERSHIP_ROLES = [
  {
    role: "Public Relations Head",
    organization: "Community of Coders (CoC), VJTI",
    period: "Beginning April 2026",
    description: "Leading outreach, brand visibility, and student developer community initiatives for the primary coding body at VJTI.",
  },
  {
    role: "Training & Placement Representative (TPO Rep)",
    organization: "VJTI Mumbai",
    period: "Beginning April 2026",
    description: "Coordinating corporate placement, internship pipelines, and official communication for a cohort of 92 students.",
  },
  {
    role: "Department Coordinator",
    organization: "Enthusia & Rangwardhan, VJTI",
    period: "2024–Present",
    description: "Coordinated logistics, departmental engagement, and technical/cultural festival operations.",
  },
  {
    role: "Under-16 Cricket Team Captain / Lead",
    organization: "National Cricket Academy (NCA)",
    period: "Youth Athletics",
    description: "Led the junior cricket squad at the national level, fostering team cohesion, tactical decision-making, and discipline under pressure.",
  },
];

export const PROJECTS = [
  {
    id: "prj-01",
    code: "PRJ-01",
    title: "MedBlocks",
    subtitle: "HEALTHCARE AI + BLOCKCHAIN",
    category: "Healthcare / Decentralized AI",
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "PyTorch",
      "scikit-learn",
      "BioBERT",
      "Solidity",
      "Web3.py",
      "IPFS/Pinata",
    ],
    description:
      "A secure, privacy-preserving medical record and decision system featuring SVM-based diabetes prediction, BioBERT medical-report summarization, and automated medication adherence analysis over decentralized storage.",
    url: null,
    repoUrl: null,
    image: null,
  },
  {
    id: "prj-02",
    code: "PRJ-02",
    title: "VidNotes AI",
    subtitle: "VIDEO LEARNING ASSISTANT",
    category: "AI / EdTech",
    techStack: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Whisper",
      "Groq LLM",
      "sentence-transformers",
      "ChromaDB",
      "yt-dlp",
    ],
    description:
      "An intelligent video knowledge extraction tool that transcribes YouTube videos using Whisper, generates concise hierarchical study notes, and powers conversational context-aware Q&A using retrieval-augmented generation (RAG).",
    url: null,
    repoUrl: null,
    image: null,
  },
  {
    id: "prj-03",
    code: "PRJ-03",
    title: "FinAI-ASSET",
    subtitle: "FINANCIAL DECISION PLATFORM",
    category: "Fintech / AI Analytics",
    techStack: [
      "React",
      "Node.js",
      "Python",
      "MongoDB",
      "Machine Learning",
      "LLM Integration",
    ],
    description:
      "A comprehensive financial decision-support platform featuring real-time affordability scoring, Total Cost of Ownership (TCO) breakdown, ROI estimation, and Monte Carlo scenario simulation for long-term risk assessment.",
    url: null,
    repoUrl: null,
    image: null,
  },
];
