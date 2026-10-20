import { experiences } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-b border-border">
      <p className="section-label">01 // Experience</p>

      <div className="divide-y divide-border/60">
        {experiences.map((exp) => (
          <div key={exp.company + exp.period} className="py-6 first:pt-0 last:pb-0">
            {/* Header row: Role, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <div className="text-base font-medium text-foreground">
                <span>{exp.title}</span>
                <span className="text-muted-foreground mx-1.5">·</span>
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-foreground hover:underline underline-offset-4 decoration-muted-foreground transition-all"
                  >
                    <span>{exp.company}</span>
                    <ArrowUpRight size={13} className="text-muted-foreground" />
                  </a>
                ) : (
                  <span className="text-foreground">{exp.company}</span>
                )}
              </div>
              <span className="font-mono text-xs text-muted-foreground shrink-0">
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 my-3 text-sm text-foreground/75 leading-relaxed">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <span className="text-muted-foreground mt-1.5 text-xs select-none">―</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-card/60 text-muted-foreground border border-border/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
