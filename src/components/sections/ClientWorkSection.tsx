import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { clients } from "@/constants/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ClientWorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="client-work" className="py-24 relative overflow-hidden">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">04. Client Work</h3>
          <h2 className="text-foreground text-4xl md:text-5xl font-heading font-bold">Selected Clients</h2>
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
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => window.open(client.live, "_blank", "noopener,noreferrer")}
              className={`group relative flex-shrink-0 w-[280px] sm:w-[400px] md:w-[450px] min-h-[400px] bg-card/60 backdrop-blur-xl rounded-3xl p-4 md:p-6 border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 flex flex-col snap-center cursor-pointer`}
            >
              {/* Dynamic Gradient Sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Website Preview Image (Microlink API) */}
                <div className="w-full h-48 md:h-56 mb-6 rounded-2xl overflow-hidden relative border border-border/30 group-hover:border-primary/30 transition-colors shrink-0 bg-background/50">
                  <img 
                    src={`https://api.microlink.io?url=${encodeURIComponent(client.live)}&screenshot=true&meta=false&embed=screenshot.url`} 
                    alt={`${client.title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Floating Links on Image */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={client.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/80 p-2.5 rounded-full backdrop-blur-md shadow-lg border border-border/50 hover:scale-110 active:scale-95">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-foreground text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {client.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-3">
                    {client.description}
                  </p>
                  <p className="font-mono text-xs font-semibold text-primary/80 mt-4 uppercase tracking-wider">Client Project</p>
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
    </section>
  );
}
