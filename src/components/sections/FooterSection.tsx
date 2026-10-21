import { personalData } from "@/constants/data";

export function FooterSection() {
  return (
    <footer className="pt-12 pb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <div>
          <span>© {new Date().getFullYear()} {personalData.name}.</span>
          <span className="ml-2 text-muted-foreground/60">Crafted with intent.</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-foreground transition-colors"
          >
            {personalData.email}
          </a>
          <span>·</span>
          <a
            href="https://github.com/VictorZhayon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/victor-zion-1b85a440a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            title="LLM-readable site manifest"
          >
            llms.txt
          </a>
        </div>
      </div>

      {/* Editorial Typographic Watermark (Jerome Style) */}
      <div className="w-full overflow-hidden border-t border-border/30 mt-10 select-none" aria-hidden="true">
        <div className="font-serif italic font-light text-[clamp(3.5rem,13vw,7.5rem)] text-foreground/[0.04] dark:text-foreground/[0.06] tracking-tighter leading-none py-6 whitespace-nowrap text-center">
          {personalData.name}
        </div>
      </div>
    </footer>
  );
}
