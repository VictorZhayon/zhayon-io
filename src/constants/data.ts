export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  category?: string;
}

export interface Experience {
  company: string;
  title: string;
  period: string;
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
  location: "Nigeria",
  headline: "I build what works. I write what lasts.",
  secondaryHeadline: "Half engineer, half writer. Fully useful.",
  bioParagraphs: [
    "I'm a software engineer and technical writer with 4+ years of professional experience building scalable backend architectures, intelligent AI workflows, and developer documentation.",
    "My focus lives at the intersection of AI engineering, distributed backend systems, and developer education. I specialize in designing and deploying LLM applications, RAG pipelines, and Docs-as-Code ecosystems that translate complex architectures into intuitive experiences.",
    "Currently, I serve as a Technical Writer at Devable driving developer marketing and content strategy, an AI Engineering Tutor at Innovation Labs (iLabs), and as Chief Technology Officer at Gem Nexus guiding technical vision and product roadmaps."
  ],
  resumes: [
    { label: "Backend & AI CV", href: "/Victor_Zion_Backend_AI.pdf" },
    { label: "Technical Writing CV", href: "/Victor_Zion_Technical_Writing.pdf" }
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
    role: "Technical Writer",
    title: "Technical Writer",
    company: "Devable",
    period: "Oct 2026 — Present"
  },
  {
    role: "AI Engineering Tutor",
    title: "AI Engineering Tutor",
    company: "Innovation Labs (iLabs)",
    period: "Sept 2026 — Present"
  },
  {
    role: "Chief Technology Officer",
    title: "Chief Technology Officer",
    company: "Gem Nexus",
    period: "Dec 2025 — Present"
  },
  {
    role: "Technical Writer",
    title: "Technical Writer",
    company: "Hackmamba",
    period: "Oct 2025 — Present"
  },
  {
    role: "AI Engineer & Lead Technical Researcher",
    title: "AI Engineer & Lead Technical Researcher",
    company: "Morlabs Protocol",
    period: "Aug 2025 — Aug 2026"
  },
  {
    role: "LLM Engineer",
    title: "LLM Engineer",
    company: "Demz Aminytics",
    period: "Jan 2025 — Apr 2025"
  },
  {
    role: "Flutter Developer (Intern)",
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

export const clientProjects = [
  {
    title: "EsterOfWeb3",
    role: "Portfolio Platform",
    description: "Custom personal portfolio platform designed and developed for EsterOfWeb3, a Web3 professional.",
    live: "https://esterofweb3.vercel.app"
  },
  {
    title: "Praise Oton",
    role: "Portfolio Platform",
    description: "Clean portfolio website built for Praise Oton, a Data Engineer.",
    live: "https://victorzhayon.github.io/praise-oton/"
  }
];

export const articles: Article[] = [
  {
    title: "Building Real-Time Token-Streaming Applications with FastAPI & Server-Sent Events",
    publisher: "Medium",
    url: "https://medium.com/@victorzion1",
    date: "2025",
    description: "A deep dive into building low-latency, event-driven streaming backends using FastAPI, SSE, and LLM APIs."
  },
  {
    title: "Docs-as-Code: Migrating Enterprise API Documentation to Mintlify",
    publisher: "Hackmamba & Medium",
    url: "https://medium.com/@victorzion1",
    date: "2025",
    description: "Architectural patterns for modernizing legacy developer portals into high-performance, MDX-driven documentation."
  },
  {
    title: "Demystifying RAG: From Raw Documents to Semantic Vector Search",
    publisher: "Medium",
    url: "https://medium.com/@victorzion1",
    date: "2024",
    description: "How chunking strategies, embeddings, and vector databases work together to eliminate LLM hallucinations."
  },
  {
    title: "Why Great Software Engineers Must Write Well",
    publisher: "Medium",
    url: "https://medium.com/@victorzion1",
    date: "2024",
    description: "Technical writing isn't an extracurricular—it's how engineers clarify system design and multiply their leverage."
  }
];

export const hobbies = [
  {
    title: "Listening to music",
    description: "Exploring diverse, ambient, and eclectic genres that stimulate creative focus and thinking."
  },
  {
    title: "Chess",
    description: "Studying classical openings, positional play, and tactical endgames to sharpen strategic decision-making."
  },
  {
    title: "Technical & AI research",
    description: "Reading papers, tracking developments in open-weights models, and experimenting with emerging developer tooling."
  },
  {
    title: "Journaling",
    description: "Writing daily reflections on engineering craft, personal philosophy, and intentional living."
  },
  {
    title: "Gaming",
    description: "Unwinding through story-driven, immersive titles that showcase brilliant interactive design."
  }
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Dart", "SQL", "HTML/CSS"]
  },
  {
    name: "AI & Machine Learning",
    skills: ["AI-Assisted Engineering", "LLM Engineering", "LangGraph", "RAG Systems", "OpenAI API", "Google Gemini API", "Prompt Engineering"]
  },
  {
    name: "Backend & Systems",
    skills: ["FastAPI", "Node.js", "Express.js", "Supabase", "PostgreSQL", "SQLite", "RESTful APIs", "System Design"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Docker", "Linux", "CI/CD", "Git & GitHub"]
  },
  {
    name: "Docs, Growth & Mentorship",
    skills: ["Teaching & Mentorship", "Mintlify", "MDX", "Docs-as-Code", "Technical Writing", "SEO / AEO", "Developer Marketing", "Reddit Distribution"]
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
    label: "X (Twitter)",
    handle: "@zhayon_io",
    href: "https://www.x.com/zhayon_io",
    icon: "x"
  },
  {
    label: "Medium",
    handle: "medium.com/@victorzion1",
    href: "https://medium.com/@victorzion1",
    icon: "medium"
  },
  {
    label: "Email",
    handle: "victorzion1@gmail.com",
    href: "mailto:victorzion1@gmail.com",
    icon: "email"
  }
];
