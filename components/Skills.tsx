import Section from "@/components/Section";
import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {resume.skills.map((group) => (
          <div
            key={group.label}
            className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-rule pb-6"
          >
            <h3 className="w-36 shrink-0 font-mono text-xs uppercase tracking-wider text-blue">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {group.items.map((item) => (
                <span key={item} className="text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}