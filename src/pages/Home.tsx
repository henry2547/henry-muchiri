import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Cloud, GitBranch, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const skills = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Laravel, PHP, and API Development",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MySQL and PostgreSQL expertise",
    },
    {
      icon: GitBranch,
      title: "Mobile Development",
      description: "Building Android apps with Kotlin & Java",
    },
    {
      icon: Cloud,
      title: "Learning Frontend",
      description: "Expanding skills in React.js & Next.js",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                ✨ Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Henry Muchiri
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Engineer | Mathematics & Computer Science Enthusiast | Problem Solver
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              "Turning complex problems into elegant solutions – one line of code at a time."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 group">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                📍 Kirinyaga County, Kenya
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                🌱 Learning React & Next.js
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I'm Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Currently expanding my expertise in these key areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Collaborate!</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm actively seeking new opportunities, tech discussions, and open-source contributions.
              Perfect for mentorship, project collaborations, or job opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="mailto:henrynjue255@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/254742735159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              ⏳ Response Time: Within 24 hours for emails, faster via WhatsApp
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
