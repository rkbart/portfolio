import { getFeaturedProjects } from "@/lib/github";

export default async function Projects() {
  const projects = await getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 flex items-baseline gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Projects
          </h2>
          <span className="font-mono text-sm text-accent">#</span>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  {project.title}
                </h3>
                <a
                  href={project.repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-muted transition-colors group-hover:text-accent"
                >
                  repo ↗
                </a>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.blurb}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-xs text-muted">
                {project.repo.language ? (
                  <span>
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-accent" />
                    {project.repo.language}
                  </span>
                ) : null}
                <span className="font-mono">
                  ★ {project.repo.stargazers_count}
                </span>
                <span className="font-mono">
                  ⑂ {project.repo.forks_count}
                </span>
                {project.source === "fallback" ? (
                  <span className="ml-auto font-mono text-xs text-muted/60">
                    cached
                  </span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}