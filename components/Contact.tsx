import { resume } from "@/data/resume";

const links = [
  { label: "Email", value: resume.email, href: `mailto:${resume.email}` },
  { label: "GitHub", value: resume.github, href: resume.github },
  { label: "LinkedIn", value: resume.linkedin, href: resume.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
I&apos;m always open to interesting projects and opportunities. Feel
          free to reach out — my inbox is always open.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resume.resumeUrl}
            download
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
          >
            Download Resume
          </a>
        </div>
        <p className="mt-12 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {resume.name}. Built with Next.js &
          Tailwind.
        </p>
      </div>
    </section>
  );
}