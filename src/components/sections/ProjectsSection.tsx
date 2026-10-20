import { featuredProjects, clientProjects } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-b border-border">
      <p className="section-label">02 // Selected Projects</p>

      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group p-5 rounded-xl border border-border/50 bg-card/20 hover:bg-card/50 hover:border-border transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-base sm:text-lg font-medium text-foreground">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline underline-offset-4 decoration-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight size={15} className="text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h3>
              {project.category && (
                <span className="font-mono text-xs text-muted-foreground">
                  {project.category}
                </span>
              )}
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-card/60 text-muted-foreground border border-border/40"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Live Link */}
            {project.live && (
              <div className="flex items-center gap-4 text-xs font-medium pt-2 border-t border-border/30">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground hover:underline underline-offset-4"
                >
                  <span>Visit Application</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Client Works Sub-block */}
      <div className="mt-10 pt-8 border-t border-border/50">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
          Client Platforms & Portfolios
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {clientProjects.map((client) => (
            <a
              key={client.title}
              href={client.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border/40 bg-card/10 hover:bg-card/40 hover:border-border transition-all block group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {client.title}
                </span>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {client.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
