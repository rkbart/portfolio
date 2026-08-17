import { resume } from "@/data/resume";

const links = [
  { label: "Email", value: resume.email, href: `mailto:${resume.email}` },
  { label: "GitHub", value: resume.github, href: resume.github },
  { label: "LinkedIn", value: resume.linkedin, href: resume.linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-rule py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-4 font-mono text-sm text-blue">✳ In closing</p>
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          I&apos;m always open to interesting projects and opportunities. Feel
          free to reach out — my inbox is always open.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="rounded-full border border-rule px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resume.resumeUrl}
            download
            className="rounded-full bg-blue px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-blue-deep"
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