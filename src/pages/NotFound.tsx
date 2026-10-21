import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { personalData } from "@/constants/data";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Page Not Found · Victor Zion";
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-6 sm:p-12 antialiased selection:bg-foreground/15 selection:text-foreground">
      {/* Header bar */}
      <header className="max-w-content w-full mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight font-medium hover:opacity-80 transition-opacity"
        >
          {personalData.name}
        </Link>
        <span className="font-mono text-xs text-muted-foreground">
          404 // Dispatch
        </span>
      </header>

      {/* Main 404 block */}
      <main className="max-w-content w-full mx-auto py-16 sm:py-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-card/40 text-xs font-mono text-muted-foreground mb-6">
          <Compass size={13} className="text-muted-foreground" />
          <span>Coordinates Not Found</span>
        </div>

        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-light tracking-tight text-foreground mb-4">
          404
        </h1>

        <p className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-6">
          The requested page or route does not exist
        </p>

        <p className="text-foreground/80 text-[15px] sm:text-base max-w-md leading-relaxed mb-8">
          The path <code className="font-mono text-xs px-2 py-0.5 rounded bg-card border border-border/60 text-foreground">{location.pathname}</code> could not be located in this directory. It may have been relocated or archived.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-lg bg-foreground text-background text-xs font-medium hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Return to Portfolio</span>
        </Link>
      </main>

      {/* Footer watermark */}
      <footer className="max-w-content w-full mx-auto pt-8 border-t border-border/40 text-xs font-mono text-muted-foreground flex items-center justify-between">
        <span>© {new Date().getFullYear()} {personalData.name}</span>
        <span>Crafted with intent</span>
      </footer>
    </div>
  );
};

export default NotFound;
