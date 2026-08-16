export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string | null;
  archived: boolean;
};

export type FeaturedProject = {
  name: string;
  title: string;
  blurb: string;
  order: number;
  fallbackRepo: GitHubRepo;
};

const repo = (partial: Partial<GitHubRepo>): GitHubRepo => ({
  name: partial.name ?? "",
  description: partial.description ?? null,
  language: partial.language ?? null,
  stargazers_count: partial.stargazers_count ?? 0,
  forks_count: partial.forks_count ?? 0,
  html_url: partial.html_url ?? "",
  homepage: partial.homepage ?? null,
  archived: partial.archived ?? false,
});

export const featuredProjects: FeaturedProject[] = [
  {
    name: "ntbk",
    title: "NTBK (Notebook)",
    blurb:
      "Full-stack self-hosted note-taking platform with Markdown-native editing, AI-powered chat, and semantic search. Built with a React/TypeScript workspace UI and a Ruby on Rails API backend with pgvector embeddings.",
    order: 1,
    fallbackRepo: repo({
      name: "ntbk",
      html_url: "https://github.com/rkbart/ntbk",
      language: "Ruby",
    }),
  },
  {
    name: "inkbound",
    title: "Inkbound: Living Enchanted Diary",
    blurb:
      "A dark-fantasy diary that talks back. Full-stack React 19 app with custom handwriting animations, a procedural Web Audio engine, and Google Gemini integration for persistent conversational memory.",
    order: 2,
    fallbackRepo: repo({
      name: "inkbound",
      html_url: "https://github.com/rkbart/inkbound",
      language: "JavaScript",
    }),
  },
  {
    name: "stock-trading-app",
    title: "Stock Trading App",
    blurb:
      "Full-stack Rails application for simulated stock trading with real-time market data via the Alpha Vantage API, Devise authentication, and Rails caching.",
    order: 3,
    fallbackRepo: repo({
      name: "stock-trading-app",
      html_url: "https://github.com/rkbart/stock-trading-app",
      language: "Ruby",
    }),
  },
  {
    name: "emergency_guide_app",
    title: "Emergency Guide App",
    blurb:
      "Rails-based emergency resource platform with AI-assisted responses (OpenRouter) and real-time disaster updates from the ReliefWeb API, plus search and favorites.",
    order: 4,
    fallbackRepo: repo({
      name: "emergency_guide_app",
      html_url: "https://github.com/rkbart/emergency_guide_app",
      language: "Ruby",
    }),
  },
  {
    name: "chat-app",
    title: "Chat App",
    blurb:
      "React-based messaging platform (Slack clone) with a REST API for real-time team communication, token-based auth, channels, and direct messages.",
    order: 5,
    fallbackRepo: repo({
      name: "chat-app",
      html_url: "https://github.com/rkbart/chat-app",
      language: "JavaScript",
    }),
  },
  {
    name: "sql-translator",
    title: "SQL Translator",
    blurb:
      "A tool that translates natural-language queries into SQL, combining LLM integration with a clean TypeScript interface.",
    order: 6,
    fallbackRepo: repo({
      name: "sql-translator",
      html_url: "https://github.com/rkbart/sql-translator",
      language: "TypeScript",
    }),
  },
];
