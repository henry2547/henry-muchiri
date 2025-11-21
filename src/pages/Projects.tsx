import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Stalker",
      description: "A platform to access publicly available profile information from various social media platforms. Prioritizes user privacy and ethical data practices by only retrieving openly accessible information.",
      technologies: ["Web Scraping", "Privacy-First", "API Integration"],
      category: "Web Tools",
      link: "https://stalker-sable.vercel.app/",
      github: "https://github.com/henry2547",
    },
    {
      title: "Save As - Website Source Downloader",
      description: "Powerful tool that retrieves complete website source code including HTML, CSS, JavaScript, images, and assets. Downloads everything into a convenient ZIP file while preserving the original file hierarchy.",
      technologies: ["JavaScript", "Web Scraping", "File Processing"],
      category: "Web Tools",
      link: "https://save-as.vercel.app/",
      github: "https://github.com/henry2547",
    },
    {
      title: "KGU Kenya - Golf Management Platform",
      description: "Comprehensive golf management system connecting golfers, tournament administrators, and financial managers. Simplifies tournament registrations, enhances skill development, and fosters community engagement.",
      technologies: ["PHP", "MySQL", "Web Development"],
      category: "Full-Stack",
      link: "https://github.com/henry2547/kgu",
      github: "https://github.com/henry2547/kgu",
    },
    {
      title: "M-Pesa Payment Gateway Integration",
      description: "Complete, secure PHP and JavaScript solution for processing M-Pesa payments in web applications. Users can make seamless payments by simply entering their phone number.",
      technologies: ["PHP", "JavaScript", "M-Pesa API", "Payment Integration"],
      category: "Backend",
      link: "https://github.com/henry2547/mpesa-payment",
      github: "https://github.com/henry2547/mpesa-payment",
    },
    {
      title: "Data Cleaning Tool",
      description: "Python tool that cleans Excel files by removing rows where pairs of values sum to zero. Processes all sheets in a workbook while maintaining data integrity.",
      technologies: ["Python", "Excel", "Data Processing", "Pandas"],
      category: "Data Tools",
      link: "https://github.com/henry2547/DataCleaning",
      github: "https://github.com/henry2547/DataCleaning",
    },
    {
      title: "Bank Console - Java Banking System",
      description: "Secure console-based banking application built with Java and MySQL. Provides fast, secure account management through a text-based interface, ideal for low-resource environments.",
      technologies: ["Java", "MySQL", "Console Application"],
      category: "Backend",
      link: "https://github.com/henry2547/BankManagementSystem",
      github: "https://github.com/henry2547/BankManagementSystem",
    },
    {
      title: "Khalif Spices Limited - E-Commerce Platform",
      description: "Specialized e-commerce platform for authentic spices. Provides a seamless digital marketplace for spice enthusiasts, chefs, and home cooks to explore and purchase premium quality spices.",
      technologies: ["E-Commerce", "Web Development", "PHP"],
      category: "Full-Stack",
      link: "https://github.com/henry2547/khalif",
      github: "https://github.com/henry2547/khalif",
    },
  ];

  const categories = ["All", "Full-Stack", "Backend", "Web Tools", "Data Tools"];

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
