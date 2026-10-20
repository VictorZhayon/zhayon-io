import { skillCategories } from "@/constants/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 border-b border-border">
      <p className="section-label">05 // Skills & Toolkit</p>

      <div className="space-y-6">
        {skillCategories.map((group) => (
          <div key={group.name} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
            <span className="font-mono text-xs text-muted-foreground w-40 shrink-0 pt-1">
              {group.name}
            </span>
            <div className="flex flex-wrap gap-1.5 flex-1">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-card/60 hover:bg-card text-foreground/80 hover:text-foreground border border-border/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
