import { articles } from "@/constants/data";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function WritingSection() {
  return (
    <section id="writing" className="py-12 border-b border-border">
      <p className="section-label">03 // Writing & Documentation</p>

      <p className="text-foreground/80 text-[15px] sm:text-base leading-relaxed mb-8">
        I believe clear writing is an engineering multiplier. When we document systems with precision, we eliminate ambiguity and make complex architectures approachable.
      </p>

      <div className="divide-y divide-border/60">
        {articles.slice(0, 3).map((article) => (
          <article key={article.title} className="py-6 first:pt-0 last:pb-0 group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-base font-medium text-foreground">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:underline underline-offset-4 decoration-muted-foreground group-hover:text-primary transition-colors"
                >
                  <span>{article.title}</span>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </h3>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground shrink-0">
                <span>{article.publisher}</span>
                {article.date && <span>· {article.date}</span>}
              </div>
            </div>

            <p className="text-sm text-foreground/75 leading-relaxed">
              {article.description}
            </p>
          </article>
        ))}
      </div>

      {/* Medium archive button */}
      <div className="mt-8 pt-4">
        <a
          href="https://medium.com/@victorzion1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <BookOpen size={14} />
          <span>Read more articles on Medium</span>
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
