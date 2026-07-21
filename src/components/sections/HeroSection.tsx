import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Sparkles } from "lucide-react";
import { headlines } from "@/constants/data";
import { CVPreviewModal } from "@/components/CVPreviewModal";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center py-20">
        <h1 className="sr-only">Victor Zion — Software Engineer | Technical Writer</h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-primary text-sm mb-5">
          Hi, I'm Victor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 min-h-[4.4em] sm:min-h-[4.4em] lg:min-h-[2.3em] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {headlines[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12">
          AI Engineer · Backend Engineer · Technical Writer · Tech Career Advisor
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200">
            <Download size={15} />
            Download My CV
          </button>
          
          <a
            href="https://zhayon-io-v2.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary text-primary px-7 py-4 rounded font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Sparkles size={15} className="animate-pulse" />
            Check out v2 (Dev Theme)
          </a>
        </motion.div>
      </section>

      <CVPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
