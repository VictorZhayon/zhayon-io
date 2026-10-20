import { useState } from "react";
import { socialLinks, personalData } from "@/constants/data";
import { ArrowUpRight, Github, Linkedin, Twitter, BookOpen, Mail, Copy, Check } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  x: <Twitter size={16} />,
  medium: <BookOpen size={16} />,
  email: <Mail size={16} />,
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 border-b border-border">
      <p className="section-label">06 // On The Internet</p>

      {/* Narrative Invitation */}
      <div className="mb-8">
        <p className="text-foreground/80 text-[15px] sm:text-base leading-relaxed mb-4">
          I'm always open to discussing new technical leadership opportunities, distributed architectures, AI integrations, or documentation projects.
        </p>
        <div className="inline-flex items-center gap-3 p-3 px-4 rounded-xl border border-border bg-card/30">
          <span className="font-mono text-xs sm:text-sm text-foreground">
            {personalData.email}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Link Rows (Jerome Style) */}
      <div className="divide-y divide-border/60">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-3.5 flex items-center justify-between text-sm transition-colors hover:text-foreground"
          >
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {iconMap[link.icon]}
              </span>
              <div>
                <span className="font-medium text-foreground">{link.label}</span>
                <span className="text-muted-foreground text-xs ml-2 hidden sm:inline font-mono">
                  {link.handle}
                </span>
              </div>
            </div>
            <ArrowUpRight
              size={15}
              className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
