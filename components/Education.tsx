import Section from "@/components/Section";
import { resume } from "@/data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="divide-y divide-rule border-y border-rule">
        {resume.education.map((item) => (
          <li
            key={item.school}
            className="flex flex-wrap items-baseline justify-between gap-2 py-5"
          >
            <div>
              <h3 className="font-display text-lg font-medium text-ink">
                {item.school}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{item.degree}</p>
            </div>
            <p className="font-mono text-xs text-muted">{item.period}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}