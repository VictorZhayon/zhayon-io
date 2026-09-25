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
    <div className="flex flex-col gap-2 md:gap-3">
      <span className="font-heading font-bold text-foreground text-lg sm:text-xl md:text-2xl tracking-wide">
        Full-Stack AI Software Engineer <span className="text-primary/60 font-normal px-2">|</span> Technical Writer
      </span>
      <span className="text-muted-foreground text-base sm:text-lg leading-relaxed">
        Building digital experiences that combine stunning design with robust engineering.
      </span>
    </div>
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

        {/* Aesthetic "Hire Me" Badge */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full mb-8 overflow-hidden cursor-pointer"
        >
          {/* Spinning Gradient Border */}
          <span className="absolute inset-0 w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#38BDF8_100%)] animate-[spin_2.5s_linear_infinite]" />
          
          <div className="relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-background/90 backdrop-blur-xl text-xs md:text-sm font-heading font-bold text-primary shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] transition-shadow duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Hire Me!
            </span>
          </div>
        </motion.a>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6 flex items-center gap-3"
        >
          <span className="text-primary opacity-70">{"//"}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground font-medium tracking-wide">
            {greeting}
          </span>
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-2.5 h-6 bg-primary/80 ml-1 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
          />
        </motion.h2>
        
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mb-10 md:mb-12">
          {description}
        </motion.div>
        
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
