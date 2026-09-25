export const headlines = [
  "I speak fluently in code and in prose.",
  "I build what works. I write what lasts.",
  "Half engineer, half writer. Fully useful.",
];

export const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Client Work", href: "#client-work", num: "04" },
  { label: "Writing", href: "#writing", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

export const socialLinks = [
  { href: "https://www.github.com/VictorZhayon", label: "GitHub" },
  { href: "https://www.linkedin.com/in/victor-zion-1b85a440a", label: "LinkedIn" },
  { href: "https://www.x.com/zhayon_io", label: "X" },
  { href: "https://medium.com/@victorzion1", label: "Medium" },
];

export const technologies = [
  "Python",
  "JavaScript",
  "FastAPI",
  "LangGraph / RAG",
  "Mintlify / MDX",
  "Supabase",
  "Google Gemini API",
  "Dart",
];

export const experiences = [
  {
    company: "Gem Nexus",
    url: "https://www.gemnexushq.com",
    title: "Chief Technology Officer",
    period: "Dec 2025 — Present",
    tech: ["Python", "JavaScript", "AWS", "PostgreSQL"],
    bullets: [
      "Technology Strategy & Vision — Defining and driving the technical direction of Gem Nexus, including decisions around the tools, platforms, and infrastructure that power your training programs and digital products.",
      "Product Development & Oversight — Leading the build and iteration of tech products, ensuring they align with Gem Nexus's mission. This includes overseeing development cycles, quality, and the roadmap for tools used in training and career advisory.",
      "Tech Leadership & Ecosystem Growth — Directing the internal engineering team while championing Gem Nexus's core philosophy: empowering emerging talent and builders to stay relevant in a fast-changing digital world through continuous learning, mentorship, and collaborative buildathons.",
    ],
  },
  {
    company: "Hackmamba",
    url: "https://hackmamba.io",
    title: "Technical Writer",
    period: "Oct 2025 — Present",
    tech: ["Mintlify", "Markdown", "SEO", "Git"],
    bullets: [
      "Migrated existing documentation sites (nTop, CoinBase, FrankieOne, etc.) to Mintlify, improving content discoverability and user engagement.",
      "Collaborate with other documentation migration teammates to translate complex features into clear, actionable documentation.",
      "Contributed to a 40% increase in organic traffic through SEO-optimized technical content.",
    ],
  },
  {
    company: "Morlabs Protocol",
    title: "AI Engineer and Lead Technical Researcher",
    period: "Aug 2025 — Aug 2026",
    tech: ["Python", "Solana", "Web3", "FastAPI"],
    bullets: [
      "Led technical research and AI integration for a comprehensive directory of Solana SDKs and APIs, streamlining developer onboarding into the Web3 ecosystem.",
      "Authored extensive, high-quality technical documentation detailing system architectures, workflows, and SDK implementations.",
      "Collaborated with cross-functional teams to build AI-driven search and discovery tools, significantly improving how developers find and integrate Solana protocols.",
    ],
  },
  {
    company: "Demz Aminytics",
    title: "LLM Engineer",
    period: "Jan 2025 — Apr 2025",
    tech: ["OpenAI", "Python", "AWS", "Whisper"],
    bullets: [
      "Built and deployed an AI-powered Markdown documentation generator using OpenAI's o3-mini, resulting in a 50% reduction in documentation time for internal projects.",
      "Developed an AI-powered Screen Recorder that automatically generates video summaries, action points, and highlights, using faster-whisper and OpenAI's o3-mini, improving team productivity by 30%.",
      "Collaborated with the backend team to deploy AI solutions on AWS, ensuring scalability and reliability of the applications.",
    ],
  },
  {
    company: "Wedigraf Technologies",
    title: "Flutter Developer - Intern",
    period: "Jan 2022 — Jun 2022",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    bullets: [
      "Co-led a team of 5 in developing a cross-platform mobile application using Flutter",
      "Learnt Flutter and Dart from scratch, and successfully implemented key features such as user authentication, real-time chat, and push notifications.",
      "Implemented a responsive UI that adapts to various screen sizes, resulting in a 20% increase in user engagement.",
    ],
  },
];

export const featuredProject = {
  title: "techDNA",
  description:
    "A career discovery web app that helps people find their natural fit in tech. Users complete a 10-question digital literacy assessment followed by a 40-question personality and aptitude quiz.",
  tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel AI SDK", "Google Gemini", "Paystack"],
  github: "https://github.com/VictorZhayon/tech_dna-pathfinder",
  live: "https://www.techdna.app",
};

export const projects = [
  {
    title: "Volta",
    description:
      "Volta is a dark-themed poetry generation web app that streams AI-written poems token-by-token with live revision, analysis, and sharing tools.",
    tech: ["FastAPI", "Python 3.12", "Vanilla JS", "Google Gemini (OpenAI-compatible API)", "Server-Sent Events", "SQLite", "slowapi", "Vercel"],
    github: "https://github.com/VictorZhayon/peom_ai_agent",
    live: "https://volta-dun.vercel.app",
  },
  {
    title: "Redocly",
    description:
      "This is the Redocly documentation site — a Mintlify-hosted developer docs page for Redoc, an open-source tool that generates clean, three-panel web documentation from OpenAPI/Swagger description files.",
    tech: ["Markdown React", "Mintlify", "Markdown", "JSON"],
    github: "https://github.com/VictorZhayon/migration-docs",
    live: "https://demo-3d453564.mintlify.app/",
  },
  {
    title: "Anthropic Messages API Documentation",
    description:
      "A developer documentation site covering how to integrate Claude into applications via the Anthropic Messages API, including a tutorial, API reference, and AI coding tool guides. Created during the Creators' Growth program.",
    tech: ["Mintlify", "MDX", "JSON"],
    github: "https://github.com/VictorZhayon/victor-creator-growth",
    live: "https://creatorsgrowth.mintlify.app/home",
  },
  {
    title: "Sage",
    description:
      "Sage AI Assistant is a mystical document question-answering app powered by Gemini AI. Present your manuscripts (PDF, TXT, DOCX) and seek wisdom from their pages! Built to better understand how RAG systems work.",
    tech: ["Python", "Streamlit", "Google Gemini API", "FAISS"],
    github: "https://github.com/VictorZhayon/Sage",
    live: "https://sage-ai-docs.streamlit.app/",
  },
];

export const clients = [
  {
    title: "EsterOfWeb3",
    description: "Personal portfolio website for EsterOfWeb3, a Web3 professional.",
    live: "https://esterofweb3.vercel.app",
  },
  {
    title: "Praise Oton",
    description: "Personal portfolio website for Praise Oton, a Data Engineer.",
    live: "https://victorzhayon.github.io/praise-oton/",
  },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years in Tech" },
  { value: 4, suffix: "+", label: "Years Professional" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies Used" },
];
