import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/constants/data";
import {
  Search,
  ArrowRight,
  Github,
  Linkedin,
  BookOpen,
  Twitter,
  Calendar,
  FileText,
  X,
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Connect";
  label: string;
  description?: string;
  icon: React.ReactNode;
  perform: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  const safeOpen = (url: string) => {
    onClose();
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = url;
    }
  };

  const items: CommandItem[] = [
    // Navigation
    ...navLinks.map((link) => ({
      id: `nav-${link.label}`,
      category: "Navigation" as const,
      label: `Jump to ${link.label}`,
      icon: <ArrowRight size={15} className="text-muted-foreground" />,
      perform: () => {
        onClose();
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = link.href;
        }
      },
    })),
    // Connect
    {
      id: "link-book",
      category: "Connect",
      label: "Book a 30-min Call (Cal.com)",
      description: "cal.com/victor-zion/30min",
      icon: <Calendar size={15} className="text-muted-foreground" />,
      perform: () => {
        safeOpen("https://cal.com/victor-zion/30min");
      },
    },
    {
      id: "link-github",
      category: "Connect",
      label: "GitHub Profile",
      description: "github.com/VictorZhayon",
      icon: <Github size={15} className="text-muted-foreground" />,
      perform: () => {
        safeOpen("https://github.com/VictorZhayon");
      },
    },
    {
      id: "link-linkedin",
      category: "Connect",
      label: "LinkedIn Profile",
      description: "linkedin.com/in/victor-zion",
      icon: <Linkedin size={15} className="text-muted-foreground" />,
      perform: () => {
        safeOpen("https://www.linkedin.com/in/victor-zion-1b85a440a");
      },
    },
    {
      id: "link-medium",
      category: "Connect",
      label: "Medium Articles",
      description: "medium.com/@victorzion1",
      icon: <BookOpen size={15} className="text-muted-foreground" />,
      perform: () => {
        safeOpen("https://medium.com/@victorzion1");
      },
    },
    {
      id: "link-llms",
      category: "Connect",
      label: "View llms.txt (AI Manifest)",
      description: "zhayon.io/llms.txt",
      icon: <FileText size={15} className="text-muted-foreground" />,
      perform: () => {
        safeOpen("/llms.txt");
      },
    },
    {
      id: "link-x",
      category: "Connect",
      label: "X (Twitter)",
      description: "@zhayon_io",
      icon: <Twitter size={15} className="text-muted-foreground" />,
      perform: () => {
        safeOpen("https://www.x.com/zhayon_io");
      },
    },
  ];

  const filteredItems = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.label.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  });

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].perform();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-border bg-background shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-card/20">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a section or destination..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X size={14} />
            </button>
          )}
          <span className="hidden sm:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded border border-border bg-card text-muted-foreground">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border/30">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-muted-foreground">
              No matching results.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => item.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-card/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? "text-background" : "text-muted-foreground"}>
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div
                          className={`font-mono text-[10px] ${
                            isSelected ? "text-background/80" : "text-muted-foreground"
                          }`}
                        >
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-background/20 text-background"
                        : "bg-card text-muted-foreground border border-border/50"
                    }`}
                  >
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t border-border/40 bg-card/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>Navigate with ↑ ↓ · Enter to select</span>
          <span className="hidden sm:inline">Esc to close</span>
        </div>
      </div>
    </div>
  );
}
