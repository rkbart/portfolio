import { featuredProjects, type FeaturedProject } from "@/data/featured-projects";
import { resume } from "@/data/resume";

export type { FeaturedProject, GitHubRepo } from "@/data/featured-projects";

type LiveRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  archived: boolean;
};

export type ProjectWithRepo = FeaturedProject & {
  repo: LiveRepo;
  source: "live" | "fallback";
};

export async function getFeaturedProjects(): Promise<ProjectWithRepo[]> {
  const live: Record<string, LiveRepo> = {};

  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(
      `https://api.github.com/users/${resume.githubUsername}/repos?per_page=100&sort=updated`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        cache: "force-cache",
      },
    );

    if (res.ok) {
      const data = (await res.json()) as LiveRepo[];
      for (const repo of data) live[repo.name] = repo;
    }
  } catch {
    // GitHub API unavailable — fall through to curated metadata.
  }

  return featuredProjects
    .map((project) => {
      const repo = live[project.name];
      return {
        ...project,
        repo: repo ?? project.fallbackRepo,
        source: (repo ? "live" : "fallback") as "live" | "fallback",
      };
    })
    .sort((a, b) => a.order - b.order);
}
