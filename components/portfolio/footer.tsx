export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Om Gohel. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <span className="text-primary">Next.js</span> &{" "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
