export function FooterSection() {
  return (
    <footer className="py-8 text-center border-t border-border/30 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <p className="font-mono text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Victor Zion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
