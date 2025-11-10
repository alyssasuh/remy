export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "#why-remy" },
    { label: "Contact", href: "mailto:contact@remy.example" },
    { label: "Accessibility", href: "#accessibility" },
    { label: "Privacy Policy", href: "#privacy" }
  ];

  return (
    <footer className="bg-card text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-6 mb-6" aria-label="Footer navigation">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-card rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-center text-sm text-muted-foreground">
          <p>Remy © {currentYear} | Designed with accessibility in mind</p>
        </div>
      </div>
    </footer>
  );
};
