const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          rkbart<span className="text-red">.</span>
        </a>
        <ul className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-rule px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}