import Section from "@/components/Section";
import { resume } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {resume.experience.map((job) => (
          <li key={`${job.role}-${job.company}`} className="relative pl-6">
            <span
              className="absolute -left-0 top-2 h-8 w-0.5 bg-red/70"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-medium text-ink">
                {job.role}
              </h3>
              <p className="font-mono text-xs text-muted">{job.period}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-blue">{job.company}</p>
            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="max-w-2xl text-sm leading-relaxed text-muted"
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