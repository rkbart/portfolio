import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto flex max-w-4xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32">
        <p className="mb-6 font-mono text-sm tracking-wide text-blue">
          Portfolio — Full-Stack Engineer, Philippines
        </p>
        <h1 className="font-display text-5xl font-medium leading-tight tracking-tight text-ink sm:text-7xl">
          {resume.name}
        </h1>
        <svg
          viewBox="0 0 420 12"
          fill="none"
          aria-hidden="true"
          className="mt-2 h-3 w-64 text-red sm:w-80"
        >
          <path
            d="M0 6 Q 17.5 0 35 6 T 70 6 T 105 6 T 140 6 T 175 6 T 210 6 T 245 6 T 280 6 T 315 6 T 350 6 T 385 6 T 420 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-5 text-xl font-medium text-ink sm:text-2xl">
          {resume.title}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          {resume.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={resume.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-blue-deep"
          >
            GitHub Profile
          </a>
          <a
            href={resume.resumeUrl}
            download
            className="rounded-full border border-rule px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue"
          >
            Download Resume
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-sm font-medium text-blue transition-colors hover:text-blue-deep"
          >
            LinkedIn →
          </a>
        </div>
        <p className="mt-10 font-mono text-xs text-muted">
          {resume.location} · {resume.email}
        </p>
      </div>
    </section>
  );
}