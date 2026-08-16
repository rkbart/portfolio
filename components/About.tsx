import Section from "@/components/Section";
import { resume } from "@/data/resume";

const quickFacts = [
  { label: "Location", value: resume.location },
  { label: "Email", value: resume.email },
  { label: "GitHub", value: `@${resume.githubUsername}` },
  { label: "Specialization", value: "Full-stack + AI-powered tooling" },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl leading-relaxed text-muted">
        I build developer-focused software that blends solid engineering with
        modern AI capabilities — from fintech verification platforms to
        self-hosted note-taking apps with semantic search. I care about
        scalable APIs, clean architecture, and products that feel effortless
        to use.
      </p>
      <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}