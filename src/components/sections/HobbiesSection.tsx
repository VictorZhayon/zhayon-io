import { hobbies } from "@/constants/data";
import { Headphones, Swords, Search, BookMarked, Gamepad2, Dumbbell } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Music": <Headphones size={15} className="text-muted-foreground" />,
  "Chess": <Swords size={15} className="text-muted-foreground" />,
  "Research": <Search size={15} className="text-muted-foreground" />,
  "Journaling": <BookMarked size={15} className="text-muted-foreground" />,
  "Gaming": <Gamepad2 size={15} className="text-muted-foreground" />,
  "Fitness": <Dumbbell size={15} className="text-muted-foreground" />,
};

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-12 border-b border-border">
      <h2 className="section-label">04 // Beyond Code</h2>

      <p className="text-foreground/80 text-[15px] sm:text-base leading-relaxed mb-6">
        When I step away from terminals and architecture diagrams, I keep my curiosity engaged through a mix of strategic thinking, music, research, and physical discipline.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="p-4 rounded-xl border border-border/40 bg-card/20 hover:bg-card/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1.5">
              {iconMap[hobby.title]}
              <h3 className="text-sm font-medium text-foreground">
                {hobby.title}
              </h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-6">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
