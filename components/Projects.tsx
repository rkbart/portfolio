import { getFeaturedProjects } from "@/lib/github";

export default async function Projects() {
  const projects = await getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            <span className="mr-3 text-red">✳</span>
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-sm border border-rule bg-paper-deep/50 p-6 shadow-[4px_4px_0_0_var(--rule)] transition-shadow hover:shadow-[4px_4px_0_0_var(--red)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-ink">
                  {project.title}
                </h3>
                <a
                  href={project.repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-muted transition-colors group-hover:text-blue"
                >
                  repo ↗
                </a>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.blurb}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-rule pt-4 text-xs text-muted">
                {project.repo.language ? (
                  <span>
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-blue" />
                    {project.repo.language}
                  </span>
                ) : null}
                <span className="font-mono">★ {project.repo.stargazers_count}</span>
                <span className="font-mono">⑂ {project.repo.forks_count}</span>
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