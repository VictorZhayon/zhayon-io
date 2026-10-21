import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";
import { navLinks, personalData } from "@/constants/data";
import profileImg from "@/assets/profile.jpg";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("#about");

  // Track scroll progress & active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Reading progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // 2. Active section detection (Scrollspy)
      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/40 transition-colors duration-200">
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between relative">
          {/* Brand - Smooth scrolls to top */}
          <a
            href="#about"
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 group text-foreground font-serif text-lg tracking-tight hover:opacity-80 transition-opacity shrink-0 cursor-pointer"
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-150 whitespace-nowrap relative py-1 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground rounded-full animate-in fade-in" />
                  )}
                </a>
              );
            })}

            <div className="pl-2 border-l border-border/60 shrink-0">
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-1 transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Hairline Reading Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-foreground/60 transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
