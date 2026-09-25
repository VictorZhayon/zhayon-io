import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences as fallbackExperiences } from "@/constants/data";
import { sanityClient } from "@/lib/sanity";

export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const [sanityExperiences, setSanityExperiences] = useState<any[]>([]);

  useEffect(() => {
    sanityClient.fetch('*[_type == "experience"] | order(orderIndex asc)').then((data) => {
      if (data && data.length > 0) setSanityExperiences(data);
    }).catch(console.error);
  }, []);

  const experiencesData = sanityExperiences.length > 0 ? sanityExperiences : fallbackExperiences;
  const current = experiencesData[active];

  if (!current) return null;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 px-4 md:px-0"
      >
        <h3 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">02. Career</h3>
        <h2 className="text-foreground text-4xl md:text-5xl font-heading font-bold">Experience</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-8 lg:gap-12 px-4 md:px-0"
      >
        <div
          role="tablist"
          aria-label="Companies"
          className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border/50 min-w-[180px] scrollbar-none"
        >
          {experiencesData.map((exp, i) => (
            <button
              key={exp.company}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`px-4 md:px-6 py-3 md:py-4 text-sm font-heading font-medium text-left whitespace-nowrap transition-all duration-300 md:-ml-[1px] md:border-l-2 -mb-[1px] md:mb-0 border-b-2 md:border-b-0 ${
                active === i
                  ? "text-primary border-primary bg-primary/5"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-card/50"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="flex-1 bg-card/30 backdrop-blur-md border border-border/50 p-6 md:p-8 rounded-3xl md:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-foreground text-xl md:text-2xl font-heading font-bold mb-2 leading-tight">
                {current.title}{" "}
                <span className="text-primary block sm:inline mt-1 sm:mt-0">
                  @{" "}
                  {current.url ? (
                    <a href={current.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {current.company}
                    </a>
                  ) : (
                    current.company
                  )}
                </span>
              </h4>
              <p className="font-mono text-muted-foreground text-sm mb-6 md:mb-8">
                {current.period}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {(current.tech || []).map((t: string) => (
                  <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-4">
                {(current.bullets || []).map((bullet: string, i: number) => (
                  <li key={i} className="flex gap-3 md:gap-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
