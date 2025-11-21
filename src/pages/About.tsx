import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, readable, and efficient code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "Every challenge is an opportunity to innovate and find elegant solutions.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and achieving measurable results in every project.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Strong believer in teamwork, open-source contribution, and knowledge sharing.",
    },
  ];

  const techStack = {
    "Backend": ["Node.js", "Python", "API Development"],
    "Cloud & DevOps": ["AWS", "Docker", "CI/CD"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis"],
    "Tools": ["Git", "VS Code", "Linux"],
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate junior developer from Kenya, dedicated to crafting digital solutions
            that make a difference.
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 sm:p-12 mb-12 bg-card border-border animate-fade-in-up">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based in the beautiful Kirinyaga County, Kenya, I'm a junior software developer
              with an insatiable curiosity for technology and its potential to transform lives.
              My journey in software development is driven by a simple yet powerful belief:
              complex problems deserve elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a tech enthusiast and problem solver, I'm constantly learning and growing
              my skills in backend development, cloud technologies, and open-source contribution.
              I believe that the best code is not just functional, but also clean, maintainable,
              and thoughtfully crafted.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm actively seeking opportunities to collaborate on exciting projects, contribute
              to meaningful tech initiatives, and learn from experienced professionals in the field.
            </p>
          </div>
        </Card>

        {/* Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Drives Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <highlight.icon className="w-10 h-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <Card
                key={category}
                className="p-6 bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-center">Current Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold mb-2">Backend Development</h3>
              <p className="text-sm text-muted-foreground">
                Building scalable server-side applications
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">☁️</div>
              <h3 className="font-semibold mb-2">Cloud Technologies</h3>
              <p className="text-sm text-muted-foreground">
                Exploring cloud infrastructure and deployment
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold mb-2">Open-Source</h3>
              <p className="text-sm text-muted-foreground">
                Contributing to community-driven projects
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
