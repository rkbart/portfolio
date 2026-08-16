import Section from "@/components/Section";
import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-border pl-6">
        {resume.experience.map((job) => (
          <li key={`${job.role}-${job.company}`} className="relative">
            <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-foreground">{job.role}</h3>
              <p className="font-mono text-xs text-muted">{job.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-accent">{job.company}</p>
            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-muted"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}