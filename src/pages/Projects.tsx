import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

const CACHE_KEY = "gh-repos-henry2547";
const CACHE_TTL = 1000 * 60 * 60 * 6; // 6 hours

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  // Try cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { ts, data } = JSON.parse(cached);
      if (Date.now() - ts < CACHE_TTL && Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch {}

  const all: GitHubRepo[] = [];
  let page = 1;
  while (true) {
    const res = await fetch(
      `https://api.github.com/users/henry2547/repos?type=public&sort=updated&per_page=100&page=${page}`
    );
    if (!res.ok) {
      // On rate-limit, fall back to stale cache if we have it
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { data } = JSON.parse(cached);
          if (Array.isArray(data) && data.length > 0) return data;
        } catch {}
      }
      throw new Error("Failed to fetch repositories");
    }
    const batch: GitHubRepo[] = await res.json();
    all.push(...batch);
    if (batch.length < 100) break;
    page++;
  }

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: all }));
  } catch {}
  return all;
};

const categorizeTech = (language: string | null, topics: string[]): string => {
  const topicsLower = topics.map(t => t.toLowerCase());
  
  if (topicsLower.includes("fullstack") || topicsLower.includes("full-stack")) return "Full-Stack";
  if (language === "Python" && topicsLower.some(t => t.includes("data"))) return "Data Tools";
  if (topicsLower.includes("web-scraping") || topicsLower.includes("scraping")) return "Web Tools";
  if (language === "PHP" || language === "Java" || topicsLower.includes("backend")) return "Backend";
  if (topicsLower.includes("frontend") || language === "JavaScript" || language === "TypeScript") return "Frontend";
  
  return "Other";
};

const FEATURED_PROJECTS = [
  {
    title: "Kenya Golf Union Management System",
    description:
      "Comprehensive platform for managing golf tournaments, events, memberships, and administrative operations.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    category: "Full-Stack",
    link: "https://github.com/henry2547/kgu",
    github: "https://github.com/henry2547/kgu",
    stars: 0,
  },
  {
    title: "Stalker Website",
    description:
      "Web application providing anonymous social media profile viewing through external API integrations.",
    technologies: ["Next.js", "JavaScript", "APIs"],
    category: "Frontend",
    link: "https://stalker-sable.vercel.app/",
    github: "https://github.com/henry2547",
    stars: 0,
  },
  {
    title: "Bank Management System",
    description:
      "Console-based banking application simulating core banking operations and account management workflows.",
    technologies: ["Java", "MySQL"],
    category: "Backend",
    link: "https://github.com/henry2547/BankManagementSystem",
    github: "https://github.com/henry2547/BankManagementSystem",
    stars: 0,
  },
  {
    title: "Khalif Spices E-Commerce",
    description:
      "Online platform for product management, order processing, and customer interactions with multi-user roles.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    category: "Full-Stack",
    link: "https://github.com/henry2547/khalif",
    github: "https://github.com/henry2547/khalif",
    stars: 0,
  },
  {
    title: "Invoice Automation Tool (KenGen Module)",
    description:
      "Financial automation solution streamlining invoice processing and reducing manual administrative tasks.",
    technologies: ["PHP", "MySQL"],
    category: "Backend",
    link: "https://github.com/henry2547",
    github: "https://github.com/henry2547",
    stars: 0,
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: repos, isLoading, error } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGitHubRepos,
    retry: 1,
    staleTime: 1000 * 60 * 30, // 30 min
    gcTime: 1000 * 60 * 60,
  });

  const liveProjects = repos?.map(repo => ({
    title: repo.name.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    description: repo.description || "No description available",
    technologies: repo.topics.length > 0 ? repo.topics : [repo.language || "Code"],
    category: categorizeTech(repo.language, repo.topics),
    link: repo.homepage || repo.html_url,
    github: repo.html_url,
    stars: repo.stargazers_count,
  })) || [];

  // Fall back to featured list when API errors or returns nothing
  const projects = error || liveProjects.length === 0 ? FEATURED_PROJECTS : liveProjects;
  const usingFallback = !!error || (!isLoading && liveProjects.length === 0);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work, from backend systems to cloud deployments and open-source contributions.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-20 w-full mb-6" />
                <div className="flex gap-2 mb-6">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-10 w-full" />
              </Card>
            ))}
          </div>
        )}

        {/* Fallback notice */}
        {!isLoading && usingFallback && (
          <Card className="p-4 mb-8 bg-primary/5 border-primary/20 text-center text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4 inline mr-2 text-primary" />
            Showing featured projects. Live GitHub feed is temporarily unavailable (rate limited) — try again later.
          </Card>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/50 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 flex-1" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
            ))}
          </div>
        )}

        {/* CTA */}
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Want to Collaborate?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always interested in working on exciting projects and learning from experienced developers.
            Let's build something amazing together!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="mailto:henrynjue255@gmail.com">Start a Conversation</a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
