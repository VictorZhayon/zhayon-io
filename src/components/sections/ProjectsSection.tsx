import { useEffect, useState } from "react";
import { featuredProjects } from "@/constants/data";
import { ArrowUpRight, Github } from "lucide-react";

interface GitHubStats {
  contributions: string;
  contributionsYear: string;
  repos: number;
  yearsActive: string;
  longestStreak: string;
  topLanguages: string;
}

export function ProjectsSection() {
  const [stats, setStats] = useState<GitHubStats>({
    contributions: "1,600+",
    contributionsYear: "1,050+",
    repos: 35,
    yearsActive: "5+ Years",
    longestStreak: "12 Days",
    topLanguages: "Python · TS · JS",
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/VictorZhayon");
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats((prev) => ({
            ...prev,
            repos: userData.public_repos || prev.repos,
          }));
        }

        const contribRes = await fetch("https://github-contributions-api.jogruber.de/v4/VictorZhayon");
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          const totalMap = contribData.total || {};
          const total = Object.values(totalMap).reduce(
            (acc: number, val: any) => acc + Number(val),
            0
          );
          const y2026 = totalMap["2026"] || 0;

          // Compute longest streak
          const days = contribData.contributions || [];
          let currentStreak = 0;
          let maxStreak = 0;
          for (const d of days) {
            if (d.count > 0) {
              currentStreak++;
              if (currentStreak > maxStreak) maxStreak = currentStreak;
            } else {
              currentStreak = 0;
            }
          }

          setStats((prev) => ({
            ...prev,
            contributions: total > 0 ? `${total.toLocaleString()}+` : prev.contributions,
            contributionsYear: y2026 > 0 ? `${y2026.toLocaleString()}+` : prev.contributionsYear,
            longestStreak: maxStreak > 0 ? `${maxStreak} Days` : prev.longestStreak,
          }));
        }
      } catch {
        // Fall back gracefully
      }
    }

    fetchStats();
  }, []);

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

      {/* GitHub Open Source & Activity Metrics Block */}
      <div className="mt-10 pt-6 border-t border-border/60">
        <div className="p-5 sm:p-6 rounded-xl border border-border/40 bg-card/25 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border/40">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-card/60 border border-border/50 flex items-center justify-center text-foreground shrink-0">
                <Github size={18} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  GitHub Activity & Open Source
                </div>
                <a
                  href="https://github.com/VictorZhayon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:underline underline-offset-4 inline-flex items-center gap-1 group mt-0.5"
                >
                  <span>github.com/VictorZhayon</span>
                  <ArrowUpRight size={13} className="text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Committer</span>
            </div>
          </div>

          {/* 6-metric grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                {stats.contributions}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                All-Time Contributions
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                {stats.contributionsYear}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                2026 Velocity
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                {stats.repos}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                Public Repositories
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                {stats.longestStreak}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                Longest Streak
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                {stats.yearsActive}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                Active on GitHub
              </div>
            </div>

            <div>
              <div className="font-serif text-xl sm:text-2xl font-normal text-foreground truncate">
                {stats.topLanguages}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                Primary Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
