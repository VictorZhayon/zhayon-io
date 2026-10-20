import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, personalData } from "@/constants/data";
import profileImg from "@/assets/profile.jpg";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 transition-colors duration-200">
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 group text-foreground font-serif text-lg tracking-tight hover:opacity-80 transition-opacity shrink-0"
        >
          <img
            src={profileImg}
            alt={personalData.name}
            className="w-7 h-7 rounded-full object-cover border border-border group-hover:scale-105 transition-transform shrink-0"
          />
          <span className="font-medium whitespace-nowrap">{personalData.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-5 text-xs font-sans tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <div className="pl-2 border-l border-border shrink-0">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-muted-foreground hover:text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-background px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
