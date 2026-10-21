import { personalData } from "@/constants/data";
import profileImg from "@/assets/profile.jpg";
import { Mail, Calendar, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="about" className="pt-12 sm:pt-16 pb-12 border-b border-border">
      {/* Profile Photo */}
      <div className="mb-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-border shadow-sm">
          <img
            src={profileImg}
            alt={personalData.name}
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            loading="eager"
          />
        </div>
      </div>

      {/* Name & Title */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.08] mb-3">
        {personalData.name}
      </h1>

      <p className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-6">
        {personalData.subTitle}
      </p>

      {/* One-Liner Hook */}
      <div className="mb-6 pl-4 border-l-2 border-border/80">
        <p className="font-serif italic text-lg sm:text-xl text-foreground/90 font-light leading-snug">
          "{personalData.headline}"
        </p>
      </div>

      {/* Narrative Story (Utee style) */}
      <div className="space-y-4 text-foreground/80 text-[15px] sm:text-base leading-relaxed font-sans mb-8">
        {personalData.bioParagraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Quick Action Links - Email, Book a Call, GitHub, LinkedIn */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={`mailto:${personalData.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity"
        >
          <Mail size={14} />
          <span>Say Hello</span>
        </a>

        <a
          href={personalData.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-card/40 hover:bg-card text-foreground text-xs font-medium transition-colors"
        >
          <Calendar size={13} className="text-muted-foreground" />
          <span>Book a Call</span>
          <ArrowUpRight size={13} className="text-muted-foreground" />
        </a>

        <a
          href="https://github.com/VictorZhayon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-card/40 hover:bg-card text-foreground text-xs font-medium transition-colors"
        >
          <span>GitHub</span>
          <ArrowUpRight size={13} className="text-muted-foreground" />
        </a>

        <a
          href="https://www.linkedin.com/in/victor-zion-1b85a440a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border bg-card/40 hover:bg-card text-foreground text-xs font-medium transition-colors"
        >
          <span>LinkedIn</span>
          <ArrowUpRight size={13} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
