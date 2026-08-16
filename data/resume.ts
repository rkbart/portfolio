export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const resume = {
  name: "Ryan Kristopher Bartolome",
  location: "Philippines",
  email: "rk_bart@yahoo.com",
  github: "https://github.com/rkbart",
  githubUsername: "rkbart",
  linkedin: "https://www.linkedin.com/in/ryan-kristopher-bartolome",
  title: "Full-Stack Software Engineer",
  resumeUrl: "/resume.pdf",
  summary:
    "Full-stack Software Engineer with production experience building Ruby on Rails and React applications, from fintech systems to AI-powered developer tools. Experienced in designing scalable REST APIs, integrating LLMs, implementing Retrieval-Augmented Generation (RAG), semantic search with pgvector, and deploying cloud-native applications. Passionate about building developer-focused software that combines traditional software engineering with modern AI capabilities.",
  skills: [
    {
      label: "Backend",
      items: [
        "Ruby on Rails",
        "PostgreSQL",
        "GraphQL",
        "REST APIs",
        "Firebase",
      ],
    },
    {
      label: "Frontend",
      items: ["ReactJS", "TypeScript", "JavaScript"],
    },
    {
      label: "Other Tools",
      items: [
        "RAG",
        "Ollama",
        "pgvector",
        "AI/LLM Integration",
        "Google Gemini AI",
        "Claude Code",
        "OpenAI Codex",
        "CI/CD",
        "Datadog",
        "Redis",
        "Git",
        "RSpec",
        "Postman",
        "Metabase",
        "TablePlus",
        "Docker",
        "GitHub Actions",
        "Kubernetes",
        "Azure",
        "Linear",
        "RabbitMQ",
        "Agile",
        "Linux",
        "SQLite",
      ],
    },
  ],
  experience: [
    {
      role: "Junior Software Engineer",
      company: "First Circle Growth Finance Corp.",
      period: "September 2025 - February 2026",
      bullets: [
        "Developed and deployed new features for an internal business verification and credit assessment platform supporting loan approval workflows.",
        "Debugged and resolved production issues affecting automated credit checks and document validation processes.",
        "Translated business and operations requirements into scalable backend solutions using Ruby on Rails and GraphQL.",
        "Worked with GraphQL APIs and TypeScript-based frontend components to enhance system functionality.",
        "Monitored application performance using Datadog and assisted in cloud deployments via Azure, Kubernetes, and Cloud66.",
        "Collaborated cross-functionally with credit and operations teams to improve platform efficiency.",
        "Contributed to sprint planning and cycle-based delivery in an Agile environment using Linear for task estimation and tracking.",
        "Collaborated with senior engineers across international teams to deliver production-ready features and align on technical best practices.",
      ],
    },
    {
      role: "Business Owner",
      company: "T42 Cafe Taguig",
      period: "July 2018 - June 2024",
      bullets: [
        "Managed full P&L operations, inventory systems, and marketing strategies for a profitable retail business.",
        "Led cost control initiatives and operational improvements to ensure long-term sustainability.",
      ],
    },
    {
      role: "Store Supervisor",
      company: "Cantinetta Espresso Concept, Inc. (Illy Cafe)",
      period: "November 2011 - August 2017",
      bullets: [
        "Supervised daily operations, staff performance, inventory management, and manpower scheduling.",
        "Led budget planning, financial reporting, and profit optimization initiatives, while executing local store marketing strategies to drive revenue growth.",
      ],
    },
  ],
  education: [
    {
      school: "Avion School",
      degree: "Full Stack Web Development",
      period: "2025",
    },
    {
      school: "Informatics Computer Institute",
      degree: "Multimedia and Internet",
      period: "2005 - 2007",
    },
    {
      school: "University of Santo Tomas",
      degree: "AB Literature",
      period: "2001 - 2004",
    },
  ],
};
