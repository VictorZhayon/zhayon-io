import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { featuredProject as fallbackFeatured, projects as fallbackProjects } from "@/constants/data";
import { sanityClient } from "@/lib/sanity";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProjectsSection() {
  const [sanityProjects, setSanityProjects] = useState<any[]>([]);

  useEffect(() => {
    sanityClient.fetch('*[_type == "project"]').then((data) => {
      if (data && data.length > 0) setSanityProjects(data);
    }).catch(console.error);
  }, []);

  let allProjects = [];
  if (sanityProjects.length > 0) {
    const featured = sanityProjects.find(p => p.featured) || sanityProjects[0];
    const others = sanityProjects.filter(p => p !== featured);
    allProjects = [featured, ...others].slice(0, 5);
  } else {
    allProjects = [fallbackFeatured, ...fallbackProjects].slice(0, 5);
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 px-4 md:px-0"
      >
        <h3 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">Selected Works</h3>
        <h2 className="text-foreground text-4xl md:text-5xl font-heading font-bold">Featured Projects</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px] px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {allProjects.map((project, index) => {
          let gridClass = "md:col-span-1 md:row-span-1";
          if (index === 0) gridClass = "md:col-span-2 md:row-span-2";
          else if (index === 4) gridClass = "md:col-span-2 md:row-span-1";

          return (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onClick={() => project.live && window.open(project.live, "_blank", "noopener,noreferrer")}
              className={`group relative bg-card/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 flex flex-col ${project.live ? "cursor-pointer" : ""} ${gridClass}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className="flex flex-wrap gap-2">
                    {(project.tech || []).slice(0, index === 0 ? 4 : 2).map((t: string) => (
                      <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {t}
                      </span>
                    ))}
                    {(project.tech || []).length > (index === 0 ? 4 : 2) && (
                      <span className="font-mono text-xs text-muted-foreground px-2 py-1">+{project.tech.length - (index === 0 ? 4 : 2)}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 md:gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                    {!project.comingSoon && project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/50 p-2 rounded-full backdrop-blur-md">
                        <Github size={18} />
                      </a>
                    )}
                    {!project.comingSoon && project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/50 p-2 rounded-full backdrop-blur-md">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  {project.comingSoon && (
                    <span className="inline-block font-mono text-xs text-secondary border border-secondary px-2 py-1 rounded-full mb-3">
                      Coming Soon
                    </span>
                  )}
                  <h4 className={`text-foreground font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-muted-foreground leading-relaxed ${index === 0 ? 'text-base md:text-lg md:line-clamp-3' : 'text-sm md:line-clamp-2'}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
