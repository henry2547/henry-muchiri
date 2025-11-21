import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Lightbulb, Target, Users, FileText, Gamepad2, Film, Dumbbell } from "lucide-react";

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
    "Backend": ["Laravel", "PHP", "API Development"],
    "Frontend": ["HTML", "CSS", "JavaScript"],
    "Mobile": ["Kotlin", "Java", "Android Development"],
    "Databases": ["MySQL", "PostgreSQL"],
    "Currently Learning": ["React.js", "Next.js", "TypeScript"],
    "Tools & DevOps": ["Git", "Docker", "GitHub Actions"],
  };

  const interests = [
    {
      icon: Film,
      title: "Movies",
      description: "Sci-fi, thrillers, and thought-provoking documentaries",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy, RPGs, and competitive multiplayer games",
    },
    {
      icon: Dumbbell,
      title: "Fitness",
      description: "Basketball, hiking, and staying active",
    },
  ];

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
              👋 Hello! I'm a passionate and detail-oriented Junior Software Engineer with a strong 
              foundation in Computer Science and Mathematics, based in Kirinyaga County, Kenya. 
              I'm dedicated to crafting elegant, scalable, and high-performance solutions. My journey 
              in technology is driven by curiosity, problem-solving, and a relentless pursuit of knowledge.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in full-stack development with expertise in backend technologies like Laravel 
              and PHP, mobile development using Kotlin and Java, and I'm currently expanding my skills 
              in modern JavaScript frameworks like React.js and Next.js. I believe in writing clean, 
              maintainable code that focuses on performance and scalability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With strong analytical skills honed through problem-solving and mathematical modeling, 
              I break down complex challenges into efficient solutions. I'm a firm believer in teamwork, 
              open-source contributions, and knowledge-sharing to create impactful, user-centric software.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack & Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Core Competencies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Software Architecture & Design Patterns",
              "API Development & Integration",
              "Performance Optimization & Debugging",
              "Agile & Scrum Methodologies",
            ].map((competency, index) => (
              <Card
                key={index}
                className="p-4 bg-card border-border animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-muted-foreground">✔ {competency}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Beyond Coding */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond Coding</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            When I'm not immersed in code, you can find me:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <interest.icon className="w-12 h-12 text-primary mb-4 mx-auto transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 animate-fade-in mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Current Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold mb-2">Advanced Backend</h3>
              <p className="text-sm text-muted-foreground">
                Exploring high-concurrency systems and event-driven architectures
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="font-semibold mb-2">Modern Frontend</h3>
              <p className="text-sm text-muted-foreground">
                Learning React.js and Next.js for modern web applications
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold mb-2">Open-Source</h3>
              <p className="text-sm text-muted-foreground">
                Building and contributing to projects that solve real-world problems
              </p>
            </div>
          </div>
        </Card>

        {/* Resume/CV Section */}
        <Card className="p-8 sm:p-12 bg-card border-border text-center animate-fade-in">
          <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Resume/CV Access</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            View my full professional profile with detailed experience, education, and achievements.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a
              href="https://drive.google.com/file/d/1Yh22Tq5ThOA66q9cH_wZ7IKvnGyX8usF/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            ⚠️ Security Note: This is my personal document - please do not redistribute without permission.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
