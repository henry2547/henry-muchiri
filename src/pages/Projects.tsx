import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Backend API",
      description: "RESTful API for a full-featured e-commerce platform with authentication, payment processing, and order management.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Stripe"],
      category: "Backend",
      link: "#",
      github: "https://github.com/henry2547",
    },
    {
      title: "Cloud Deployment Automation",
      description: "CI/CD pipeline setup for automated deployment to AWS using Docker containers and GitHub Actions.",
      technologies: ["AWS", "Docker", "GitHub Actions", "Terraform"],
      category: "DevOps",
      link: "#",
      github: "https://github.com/henry2547",
    },
    {
      title: "Task Management API",
      description: "A robust task management system with role-based access control and real-time updates.",
      technologies: ["Python", "FastAPI", "MongoDB", "WebSocket"],
      category: "Backend",
      link: "#",
      github: "https://github.com/henry2547",
    },
    {
      title: "Open-Source Contribution",
      description: "Active contributor to various open-source projects, focusing on backend improvements and bug fixes.",
      technologies: ["Various", "Open-Source", "Community"],
      category: "Open-Source",
      link: "https://github.com/henry2547/henry_njue",
      github: "https://github.com/henry2547/henry_njue",
    },
  ];

  const categories = ["All", "Backend", "DevOps", "Open-Source"];

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
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
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
