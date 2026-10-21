export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  category?: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  title?: string;
  period?: string;
  roles?: ExperienceRole[];
  tech?: string[];
}

export interface Article {
  title: string;
  publisher: string;
  url: string;
  date?: string;
  description: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: string;
}

export const personalData = {
  name: "Victor Zion",
  alternateName: "Zhayon",
  title: "Software Engineer & Technical Writer",
  subTitle: "Technical Writer @ Devable · CTO @ Gem Nexus",
  email: "victorzion1@gmail.com",
  bookingUrl: "https://cal.com/victor-zion/30min",
  location: "Nigeria",
  bioParagraphs: [
    "I'm a software engineer and technical writer with 4+ years of professional experience building scalable backend architectures, intelligent AI workflows, and developer documentation.",
    "My focus lives at the intersection of AI engineering, distributed backend systems, and developer education. I specialize in designing and deploying LLM applications, RAG pipelines, and Docs-as-Code ecosystems that translate complex architectures into intuitive experiences.",
    "Beyond code and documentation, I'm deeply interested in artificial intelligence, technical research, music, and continuous personal development—exploring ideas that shape both my craft and how I think."
  ]
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const experiences: Experience[] = [
  {
    title: "Technical Writer",
    company: "Devable",
    period: "Oct 2026 — Present"
  },
  {
    title: "Founding Full-Stack Engineer",
    company: "Ibok AI",
    period: "Sept 2026 — Present"
  },
  {
    company: "Innovation Labs (iLabs)",
    roles: [
      {
        title: "Ambassador",
        period: "Oct 2026 — Present"
      },
      {
        title: "AI Engineering Tutor",
        period: "Sept 2026 — Present"
      }
    ]
  },
  {
    title: "Chief Technology Officer",
    company: "Gem Nexus",
    period: "Dec 2025 — Present"
  },
  {
    title: "Technical Writer",
    company: "Hackmamba",
    period: "Oct 2025 — Present"
  },
  {
    title: "AI Engineer & Lead Technical Researcher",
    company: "Morlabs Protocol",
    period: "Apr 2025 — Aug 2026"
  },
  {
    title: "LLM Engineer",
    company: "Demz Aminytics",
    period: "Jan 2025 — Apr 2025"
  },
  {
    title: "Full-Stack & Mobile Developer (Intern)",
    company: "Selina M.",
    period: "Oct 2022 — Jan 2023"
  },
  {
    title: "Flutter Developer (Intern)",
    company: "Wedigraf Technologies",
    period: "Jan 2022 — Jun 2022"
  }
];

export const featuredProjects: Project[] = [
  {
    title: "techDNA",
    category: "Full-Stack AI Application",
    description: "A career discovery web platform that helps people discover their natural fit in technology. Combines a 10-question digital literacy assessment with a 40-question psychometric personality and aptitude engine.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel AI SDK", "Google Gemini", "Paystack"],
    github: "https://github.com/VictorZhayon/tech_dna-pathfinder",
    live: "https://www.techdna.app"
  },
  {
    title: "Volta",
    category: "AI & Real-Time Streaming",
    description: "A dark-themed poetry generation engine that streams AI-crafted verse token-by-token with real-time semantic analysis, stanza revision, and shareable canvases.",
    tech: ["FastAPI", "Python 3.12", "Vanilla JS", "Google Gemini API", "Server-Sent Events", "SQLite"],
    github: "https://github.com/VictorZhayon/peom_ai_agent",
    live: "https://volta-dun.vercel.app"
  },
  {
    title: "Fathers",
    category: "Contemplative Web Platform",
    description: "A quiet, reflective digital collection of words and wisdom from the Fathers of the Early Church. Features random quotation discovery, favorites curation, ambient theme switching, and native social sharing.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Cormorant Garamond", "Web Share API"],
    live: "https://early-fathers.ai.studio/"
  },
  {
    title: "Redocly Developer Documentation",
    category: "Docs-as-Code",
    description: "Mintlify-hosted developer documentation portal for Redoc, generating clean, structured three-panel API documentation from OpenAPI/Swagger specifications.",
    tech: ["Mintlify", "Markdown React", "MDX", "JSON"],
    github: "https://github.com/VictorZhayon/migration-docs",
    live: "https://demo-3d453564.mintlify.app/"
  },
  {
    title: "Anthropic Messages API Docs",
    category: "Developer Documentation",
    description: "A comprehensive developer documentation guide covering how to integrate Claude into production applications via the Anthropic Messages API, including tutorials and AI coding tools.",
    tech: ["Mintlify", "MDX", "JSON", "Claude API"],
    github: "https://github.com/VictorZhayon/victor-creator-growth",
    live: "https://creatorsgrowth.mintlify.app/home"
  },
  {
    title: "Sage AI Assistant",
    category: "RAG & Vector Search",
    description: "A document question-answering assistant powered by Gemini AI and FAISS vector embeddings, allowing users to query manuscripts (PDF, TXT, DOCX) through semantic search.",
    tech: ["Python", "Streamlit", "Google Gemini API", "FAISS"],
    github: "https://github.com/VictorZhayon/Sage",
    live: "https://sage-ai-docs.streamlit.app/"
  }
];

export const articles: Article[] = [
  {
    title: "Stop Writing “Fix Stuff”: A Better Way to Commit",
    publisher: "Medium",
    url: "https://medium.com/@victorzion1/stop-writing-fix-stuff-a-better-way-to-commit-36a2651aa2db",
    date: "Aug 2026",
    description: "Why disciplined git commit messages matter, how to write them effectively, and how clean commit hygiene prevents chaos in engineering teams."
  },
  {
    title: "AI Engineering vs ML Engineering: Not the Same Job",
    publisher: "Medium",
    url: "https://medium.com/@victorzion1/ai-engineering-vs-ml-engineering-not-the-same-job-22a1c7e92619",
    date: "Jul 2026",
    description: "Deconstructing the distinct differences in day-to-day workflows, tooling, and expectations between AI application engineers and machine learning researchers."
  },
  {
    title: "Idempotency: The Backend Concept That Saves You at 3 AM",
    publisher: "Medium",
    url: "https://medium.com/@victorzion1/idempotency-the-backend-concept-that-saves-you-at-3-am-66e01b00e99d",
    date: "Jul 2026",
    description: "A practical guide to designing idempotent APIs and background workers that safely prevent duplicate transactions, double writes, and midnight outages."
  }
];

export const hobbies = [
  {
    title: "Music",
    description: "Exploring diverse genres spanning from Gospel, Jazz, Classical, Neoclassical, etc that stimulate creative focus and thinking."
  },
  {
    title: "Chess",
    description: "Studying classical openings, positional play, and tactical endgames to sharpen strategic decision-making."
  },
  {
    title: "Research",
    description: "Reading papers, tracking developments in AI, Tech, Finance, Philosophy, etc."
  },
  {
    title: "Journaling",
    description: "Writing daily reflections on personal philosophy, and intentional living."
  },
  {
    title: "Gaming",
    description: "Unwinding through story-driven, immersive titles that showcase brilliant interactive design."
  },
  {
    title: "Fitness",
    description: "Mostly calisthenics and keeping fit in ways backed up by science."
  }
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Dart", "HTML/CSS"]
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "LLM Engineering",
      "RAG Systems",
      "LangGraph / AI Agents",
      "Context, Harness & Loop Engineering",
      "OpenAI & Gemini APIs",
      "Anthropic API",
      "AI-Assisted Engineering",
      "Prompt Engineering"
    ]
  },
  {
    name: "Backend & Systems",
    skills: [
      "FastAPI",
      "Node.js & Express",
      "Django & Flask",
      "PostgreSQL",
      "Redis",
      "SQLite",
      "Supabase",
      "Firebase",
      "System Design & REST APIs"
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "Docker",
      "Linux",
      "Git & GitHub",
      "CI/CD",
      "AWS",
      "Google Cloud"
    ]
  },
  {
    name: "Docs, Growth & Strategy",
    skills: [
      "Technical Writing",
      "Docs-as-Code (Mintlify & MDX)",
      "Teaching & Mentorship",
      "SEO / AEO / GEO",
      "Developer Marketing",
      "Content Strategy",
      "Reddit Distribution",
      "QA Testing"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "github.com/VictorZhayon",
    href: "https://github.com/VictorZhayon",
    icon: "github"
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/victor-zion",
    href: "https://www.linkedin.com/in/victor-zion-1b85a440a",
    icon: "linkedin"
  },
  {
    label: "Cal.com",
    handle: "cal.com/victor-zion/30min",
    href: "https://cal.com/victor-zion/30min",
    icon: "calendar"
  },
  {
    label: "Medium",
    handle: "medium.com/@victorzion1",
    href: "https://medium.com/@victorzion1",
    icon: "medium"
  },
  {
    label: "X (Twitter)",
    handle: "@zhayon_io",
    href: "https://www.x.com/zhayon_io",
    icon: "x"
  },
  {
    label: "Email",
    handle: "victorzion1@gmail.com",
    href: "mailto:victorzion1@gmail.com",
    icon: "email"
  }
];
