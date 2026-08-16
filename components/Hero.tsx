import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32">
        <p className="mb-4 font-mono text-sm text-accent">
          Hello, my name is
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          {resume.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-muted sm:text-2xl">
          {resume.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {resume.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={resume.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
          >
            GitHub Profile
          </a>
          <a
            href={resume.resumeUrl}
            download
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 font-mono text-xs text-muted">
          {resume.location} · {resume.phone} · {resume.email}
        </p>
      </div>
    </section>
  );
}