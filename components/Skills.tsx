import Section from "@/components/Section";
import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              {group.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                >
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