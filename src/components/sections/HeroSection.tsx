import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, ArrowRight } from "lucide-react";
import { headlines as fallbackHeadlines } from "@/constants/data";
import { sanityClient } from "@/lib/sanity";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch('*[_type == "hero"][0]').then((data) => {
      if (data) setHeroData(data);
    }).catch(console.error);
  }, []);

  const headlinesList = heroData?.headlines || fallbackHeadlines;
  const greeting = heroData?.greeting || "Hi, I'm Victor.";
  const description = heroData?.description || (
    <>
      AI Engineer · Backend Engineer · Technical Writer · Tech Career Advisor
      <br className="hidden md:block"/>
      <span className="inline md:block mt-2 md:mt-0">Building digital experiences that combine stunning design with robust engineering.</span>
    </>
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlinesList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [headlinesList.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div className="absolute top-1/4 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[90px] md:blur-[128px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[90px] md:blur-[128px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="sr-only">{greeting} — {headlinesList.join(", ")}</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-border text-primary text-xs md:text-sm font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="ml-1 md:ml-2">Available for new opportunities</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-muted-foreground text-base md:text-lg mb-4">
          {greeting}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-foreground text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6 md:mb-8 min-h-[3.3em] sm:min-h-[2.2em] relative"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 text-gradient"
            >
              {headlinesList[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mb-10 md:mb-12 leading-relaxed">
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-heading font-semibold text-base md:text-lg hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_-10px_rgba(56,189,248,0.5)] md:hover:shadow-[0_0_60px_-15px_rgba(56,189,248,0.7)] hover:-translate-y-1"
          >
            See my work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a
            href="/Victor_Zion_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-card/50 backdrop-blur-md border border-border text-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-heading font-medium text-base md:text-lg hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
