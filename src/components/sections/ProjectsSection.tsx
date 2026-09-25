import { motion } from "framer-motion";
<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { featuredProject as fallbackFeatured, projects as fallbackProjects } from "@/constants/data";
import { sanityClient } from "@/lib/sanity";
=======
import { ExternalLink, Github, Folder, Globe } from "lucide-react";
import { featuredProject, projects } from "@/constants/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
>>>>>>> 148a4425e5d9ed02302e3b96dd61e306fb48b709

const PreviewContent = ({ liveUrl, icon: Icon }: { liveUrl?: string; icon: React.ElementType }) => {
  if (liveUrl) {
    return (
      <iframe
        src={liveUrl}
        className="w-[400%] h-[400%] scale-[0.25] origin-top-left border-0 bg-background pointer-events-none"
        tabIndex={-1}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-background">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1">404</h3>
      <p className="text-xs text-muted-foreground font-mono">
        // Deployment not found
      </p>
    </div>
  );
};

export function ProjectsSection() {
<<<<<<< HEAD
  const [sanityProjects, setSanityProjects] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sanityClient.fetch('*[_type == "project"]').then((data) => {
      if (data && data.length > 0) setSanityProjects(data);
    }).catch(console.error);
  }, []);

  let allProjects = [];
  if (sanityProjects.length > 0) {
    allProjects = sanityProjects;
  } else {
    allProjects = [fallbackFeatured, ...fallbackProjects];
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">Selected Works</h3>
          <h2 className="text-foreground text-4xl md:text-5xl font-heading font-bold">Featured Projects</h2>
        </motion.div>

        {/* Carousel Controls */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 hidden sm:flex"
        >
          <button onClick={() => scroll('left')} className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg hover:scale-105 active:scale-95">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg hover:scale-105 active:scale-95">
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full"
      >
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 px-4 md:px-6 lg:px-8 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => project.live && window.open(project.live, "_blank", "noopener,noreferrer")}
              className={`group relative flex-shrink-0 w-[280px] sm:w-[400px] md:w-[450px] min-h-[450px] bg-card/60 backdrop-blur-xl rounded-3xl p-4 md:p-6 border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 flex flex-col snap-center ${project.live ? "cursor-pointer" : ""}`}
            >
              {/* Dynamic Gradient Sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Website Preview Image (Microlink API) */}
                {project.live ? (
                  <div className="w-full h-48 md:h-56 mb-6 rounded-2xl overflow-hidden relative border border-border/30 group-hover:border-primary/30 transition-colors shrink-0 bg-background/50">
                    <img 
                      src={`https://api.microlink.io?url=${encodeURIComponent(project.live)}&screenshot=true&meta=false&embed=screenshot.url`} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Floating Links on Image */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {!project.comingSoon && project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/80 p-2.5 rounded-full backdrop-blur-md shadow-lg border border-border/50 hover:scale-110 active:scale-95">
=======
  return (
    <section id="projects" className="py-24 relative">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="03."
      >
        Projects
      </motion.h3>

      <TooltipProvider delayDuration={200}>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Featured project spanning 2 columns */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                variants={cardVariants}
                onClick={() => window.open(featuredProject.live, "_blank", "noopener,noreferrer")}
                className="sm:col-span-2 bg-card rounded-lg p-6 sm:p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col cursor-pointer"
              >
                <p className="font-mono text-primary text-xs mb-2">Featured Project</p>
                <h4 className="text-foreground text-xl font-semibold mb-3">
                  {featuredProject.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featuredProject.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={16} className="w-[360px] h-[225px] p-0 overflow-hidden rounded-xl border-border bg-card shadow-2xl hidden sm:block">
              <PreviewContent liveUrl={featuredProject.live} icon={Folder} />
            </TooltipContent>
          </Tooltip>

          {projects.map((project) => (
            <Tooltip key={project.title}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  onClick={() => project.live && window.open(project.live, "_blank", "noopener,noreferrer")}
                  className={`bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col ${project.live ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <Folder className="text-primary" size={36} strokeWidth={1} />
                    <div className="flex items-center gap-3">
                      {project.comingSoon && (
                        <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                          Coming Soon
                        </span>
                      )}
                      {!project.comingSoon && project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
>>>>>>> 148a4425e5d9ed02302e3b96dd61e306fb48b709
                          <Github size={18} />
                        </a>
                      )}
                      {!project.comingSoon && project.live && (
<<<<<<< HEAD
                        <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/80 p-2.5 rounded-full backdrop-blur-md shadow-lg border border-border/50 hover:scale-110 active:scale-95">
                          <ArrowUpRight size={18} />
=======
                        <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink size={18} />
>>>>>>> 148a4425e5d9ed02302e3b96dd61e306fb48b709
                        </a>
                      )}
                    </div>
                  </div>
<<<<<<< HEAD
                ) : (
                  <div className="w-full h-48 md:h-56 mb-6 rounded-2xl bg-primary/5 border border-border/50 flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <span className="font-mono text-sm opacity-50">No Preview Available</span>
                    
                    {/* Floating Links on fallback */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {!project.comingSoon && project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/80 p-2.5 rounded-full backdrop-blur-md shadow-lg border border-border/50 hover:scale-110 active:scale-95">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.tech || []).slice(0, 3).map((t: string) => (
                    <span key={t} className="font-mono text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                  {(project.tech || []).length > 3 && (
                    <span className="font-mono text-xs text-muted-foreground px-2 py-1.5">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="mt-auto">
                  {project.comingSoon && (
                    <span className="inline-block font-mono text-xs font-semibold tracking-wider uppercase text-secondary bg-secondary/10 border border-secondary/30 px-3 py-1.5 rounded-full mb-4">
                      Coming Soon
                    </span>
                  )}
                  <h4 className="text-foreground text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Mobile hint */}
      <div className="flex justify-center sm:hidden text-muted-foreground font-mono text-xs mt-2">
        <span className="animate-pulse">Swipe to explore →</span>
      </div>
=======
                  <h4 className="text-foreground font-semibold mb-2 hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-auto pb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={16} className="w-[360px] h-[225px] p-0 overflow-hidden rounded-xl border-border bg-card shadow-2xl hidden sm:block">
                <PreviewContent liveUrl={project.live} icon={Folder} />
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </TooltipProvider>
>>>>>>> 148a4425e5d9ed02302e3b96dd61e306fb48b709
    </section>
  );
}

