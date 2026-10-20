import { experiences } from "@/constants/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-b border-border">
      <p className="section-label">01 // Experience</p>

      <div className="divide-y divide-border/60">
        {experiences.map((exp) => (
          <div
            key={exp.company + exp.period}
            className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
          >
            <div>
              <div className="text-base font-medium text-foreground">
                {exp.title}
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {exp.company}
              </div>
            </div>
            <div className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-1 sm:pt-0">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
