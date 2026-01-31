function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-foreground/70 text-sm">
            © {currentYear} Vishesh. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm">
            Crafted with React and Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
