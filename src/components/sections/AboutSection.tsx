import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const marqueeTech = [
  "Python", "FastAPI", "LangChain", "RAG", "React / Vite", "Supabase", "GCP", 
  "AWS", "Mintlify", "Claude", "Gemini", "OpenAI", "LLM integration", "Ollama", 
  "Docs-as-Code", "Dart/Flutter", "QA / Data Annotation", "Next.js", 
  "PWA development", "SEO/AEO", "System Design/Architecture", "CI/CD"
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 px-4 md:px-0"
      >
        <h3 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">01. Discover</h3>
        <h2 className="text-foreground text-4xl md:text-5xl font-heading font-bold">About Me</h2>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_400px] gap-12 items-start px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-sans"
        >
          <p>
            Hello! I'm <span className="text-foreground font-semibold">Victor</span>, a software engineer and technical writer based in Nigeria. I enjoy building things that live on the internet — from intelligent backend systems to well-crafted technical articles that make complex ideas accessible.
          </p>
          <p>
            My journey into tech started with a curiosity about how machines learn and make decisions. That curiosity led me down the path of AI/ML engineering, where I've had the privilege of working on recommendation systems, NLP pipelines, RAG systems, and scalable API architectures.
          </p>
          <p>
            Today, I split my time between writing production code, publishing technical content for developer communities, and mentoring early-career techies through the often-confusing landscape of tech careers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group mx-auto md:mx-0 w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src={profileImg}
                alt="Victor Zion"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 md:mt-24 relative flex overflow-x-hidden border-y border-border/50 py-6 bg-card/20 backdrop-blur-sm"
      >
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {[...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span key={i} className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 px-4">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
