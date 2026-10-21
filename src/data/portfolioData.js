/**
 * Pratik Shewale — Portfolio Single Source of Truth
 * All profile data, social links, education details, and achievements are centralized here.
 */

export const ABOUT_DATA = {
  biography: [
    "I'm a Computer Engineering student at VJTI Mumbai who enjoys building practical software at the intersection of full-stack development, AI, and data-driven problem solving.",
    "Through projects like MedBlocks, VidNotes AI, and FinAI-ASSET, I've explored healthcare technology, retrieval-augmented generation, and financial decision support. I enjoy solving algorithmic problems, learning new technologies, and collaborating with teams to turn ideas into useful applications.",
  ],
  terminalStatus: "STATUS: LEARNING // BUILDING // IMPROVING",
  cards: [
    {
      id: "card-academic",
      label: "ACADEMIC STATUS",
      items: [
        "B.Tech Computer Engineering",
        "Veermata Jijabai Technological Institute, Mumbai",
        "2024–2028",
      ],
    },
    {
      id: "card-interests",
      label: "TECHNICAL INTERESTS",
      items: [
        "Full-Stack Development",
        "Artificial Intelligence & Machine Learning",
        "Software Engineering",
        "FinTech and Data-Driven Applications",
      ],
    },
    {
      id: "card-status",
      label: "PROFILE STATUS",
      items: [
        "Computer Engineering Student",
        "Focused on building practical software and learning modern technologies",
        "Interested in collaborative engineering opportunities",
      ],
    },
  ],
};

export const SKILLS_DATA = [
  {
    id: "sk-01",
    index: "01",
    category: "PROGRAMMING LANGUAGES",
    icon: "code",
    color: "#00e5ff",
    items: ["C++", "Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "sk-02",
    index: "02",
    category: "FRAMEWORKS & LIBRARIES",
    icon: "layers",
    color: "#149cea",
    items: ["React", "FastAPI", "PyTorch", "NumPy", "Pandas"],
  },
  {
    id: "sk-03",
    index: "03",
    category: "TOOLS & DATABASES",
    icon: "wrench",
    color: "#00e5ff",
    items: ["Git", "GitHub", "VS Code", "Linux", "ChromaDB", "SQLite"],
  },
  {
    id: "sk-04",
    index: "04",
    category: "AI & INTELLIGENT SYSTEMS",
    icon: "brain",
    color: "#149cea",
    items: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Integration",
      "Predictive Modeling",
    ],
  },
  {
    id: "sk-05",
    index: "05",
    category: "BLOCKCHAIN",
    icon: "link",
    color: "#00e5ff",
    items: ["Solidity", "Web3.py", "Blockchain Development"],
  },
];

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
    level: "Higher Secondary Certificate (HSC)",
    qualification: "Higher Secondary Certificate (HSC)",
    institution: "Ramraj Global Junior College",
    period: "2022–2024",
    score: "91.00%",
    scoreLabel: "91.00% HSC",
    status: "completed",
    badge: null,
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    id: "edu-02",
    index: "02",
    level: "B.Tech in Computer Engineering",
    qualification: "Bachelor of Technology — Computer Engineering",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    period: "2024–2028",
    score: "7.83/10 CGPA",
    scoreLabel: "7.83/10 CGPA",
    status: "current",
    badge: "CURRENTLY PURSUING",
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
