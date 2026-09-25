import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

export function WritingSection() {
  const [articles, setArticles] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@victorzion1')
      .then(res => res.json())
      .then(data => {
        if (data && data.items && data.items.length > 0) {
          setArticles(data.items);
        }
      })
      .catch(err => console.error("Failed to fetch Medium articles:", err));
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const extractImage = (item: any) => {
    if (item.thumbnail && item.thumbnail.includes("http")) return item.thumbnail;
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = item.content?.match(imgRegex);
    return match ? match[1] : null;
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  if (articles.length === 0) return null;

  return (
    <section id="writing" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primary font-mono text-sm mb-2 uppercase tracking-widest">05. Writing</h3>
          <h2 className="text-foreground text-4xl md:text-5xl font-heading font-bold">Featured Articles</h2>
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
          {articles.map((article, index) => {
            const imgSrc = extractImage(article);
            
            return (
              <motion.div
                key={article.guid || index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => window.open(article.link, "_blank", "noopener,noreferrer")}
                className={`group relative flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] min-h-[450px] bg-card/60 backdrop-blur-xl rounded-3xl p-4 md:p-6 border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 flex flex-col snap-center cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-colors duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Article Thumbnail */}
                  <div className="w-full h-48 md:h-56 mb-6 rounded-2xl overflow-hidden relative border border-border/30 group-hover:border-primary/30 transition-colors shrink-0 bg-background/50">
                    {imgSrc ? (
                      <img 
                        src={imgSrc} 
                        alt={article.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <BookOpen size={48} className="text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Floating External Link */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={article.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors bg-background/80 p-2.5 rounded-full backdrop-blur-md shadow-lg border border-border/50 hover:scale-110 active:scale-95">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Categories/Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(article.categories || []).slice(0, 3).map((category: string) => (
                      <span key={category} className="font-mono text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 uppercase tracking-wider">
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-foreground text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base line-clamp-2 mb-4">
                      {stripHtml(article.description)}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground font-mono">
                      <span>{new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                        Read on Medium <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
