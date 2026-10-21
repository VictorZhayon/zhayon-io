import { experiences } from "@/constants/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-b border-border">
      <h2 className="section-label">01 // Experience</h2>

      <div className="divide-y divide-border/60">
        {experiences.map((exp) => {
          if (exp.roles && exp.roles.length > 0) {
            return (
              <div
                key={exp.company}
                className="py-4 first:pt-0 last:pb-0"
              >
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  {exp.company}
                </div>
                <div className="space-y-3 pl-3.5 border-l-2 border-border/80">
                  {exp.roles.map((role) => (
                    <div
                      key={role.title}
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
                    >
                      <h3 className="text-base font-medium text-foreground">
                        {role.title}
                      </h3>
                      <div className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-0.5 sm:pt-0">
                        {role.period}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div
              key={exp.company + (exp.title || "")}
              className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
            >
              <div>
                <h3 className="text-base font-medium text-foreground">
                  {exp.title}
                </h3>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {exp.company}
                </div>
              </div>
              <div className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-1 sm:pt-0">
                {exp.period}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
