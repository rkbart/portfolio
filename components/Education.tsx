import Section from "@/components/Section";
import { resume } from "@/data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        {resume.education.map((item) => (
          <li
            key={item.school}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-surface p-4"
          >
            <div>
              <h3 className="font-semibold text-foreground">{item.school}</h3>
              <p className="text-sm text-muted">{item.degree}</p>
            </div>
            <p className="font-mono text-xs text-muted">{item.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}