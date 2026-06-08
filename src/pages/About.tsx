import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Lightbulb,
  Target,
  Users,
  FileText,
  Gamepad2,
  Film,
  Plane,
  Download,
} from "lucide-react";
import cvAsset from "@/assets/cv.pdf.asset.json";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description:
        "Experience building scalable web applications and enterprise solutions end-to-end.",
    },
    {
      icon: Lightbulb,
      title: "IT Support Specialist",
      description:
        "Skilled in systems administration, networking, and end-user technical support.",
    },
    {
      icon: Target,
      title: "Analytical Thinker",
      description:
        "Mathematics & Computer Science background applied to clean, efficient problem-solving.",
    },
    {
      icon: Users,
      title: "Agile Collaborator",
      description:
        "Advocate of Agile development, clean code practices, and continuous learning.",
    },
  ];

  const techStack = {
    "Programming Languages": [
      "Java",
      "Kotlin",
      "PHP",
      "JavaScript",
      "Python",
      "C++",
      "HTML5",
      "CSS3",
    ],
    "Frameworks & Technologies": ["Laravel", "Node.js", "React.js", "Next.js"],
    Databases: ["MySQL", "PostgreSQL"],
    "IT Support & Systems": [
      "Hardware & Software Troubleshooting",
      "LAN/WAN Networking",
      "System Administration",
      "Identity & Access Management",
      "ITSM",
      "Technical Documentation",
    ],
    "Development Tools": ["Git & GitHub", "VS Code", "Postman", "Linux", "REST APIs"],
    "Currently Learning": [
      "Advanced Backend Architecture",
      "Scalable API Design",
      "Cloud Infrastructure",
      "Design Patterns",
    ],
  };

  const interests = [
    {
      icon: Film,
      title: "Movies",
      description: "Sci-fi and thriller films that spark imagination",
    },
    {
      icon: Plane,
      title: "Traveling",
      description: "Exploring new places, cultures, and cuisines",
    },
    {
      icon: Gamepad2,
      title: "eFootball",
      description: "Competitive matches and unwinding with friends",
    },
  ];

  const careerInterests = [
    "Full-Stack Software Development",
    "Backend Engineering",
    "IT Support & Systems Administration",
    "Enterprise Application Development",
    "Technical Support Engineering",
    "DevOps & Cloud Technologies",
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
            Software Engineer · IT Support Specialist · Mathematics & Computer Science Graduate
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 sm:p-12 mb-12 bg-card border-border animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 text-foreground">My Journey</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            👋 Hi, I'm Henry Muchiri — a passionate Software Engineer and IT Support
            Specialist with over two years of hands-on experience developing scalable web
            applications, maintaining IT infrastructure, and delivering technical support
            solutions. My background in Mathematics and Computer Science enables me to
            approach problems analytically while building practical, user-focused systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I enjoy creating efficient software, optimizing business processes through
            automation, and solving technical challenges across both software development
            and IT operations.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>🚀 Full-Stack Developer building web applications and enterprise solutions.</li>
            <li>🎓 B.Sc. in Mathematics & Computer Science (Software Engineering Specialization).</li>
            <li>🛠️ Skilled in IT support, systems administration, and network troubleshooting.</li>
            <li>💡 Passionate about backend architecture, API integrations, and scalable systems.</li>
            <li>📈 Strong advocate of Agile, clean code, and continuous learning.</li>
            <li>🎮 Outside tech: sci-fi & thriller movies, traveling, and eFootball.</li>
          </ul>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
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

        {/* Career Interests */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Career Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careerInterests.map((interest, index) => (
              <Card
                key={index}
                className="p-4 bg-card border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-muted-foreground">✔ {interest}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Beyond Coding */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond Coding</h2>
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

        {/* CV Section */}
        <Card className="p-8 sm:p-12 bg-card border-border text-center animate-fade-in">
          <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">My CV / Resume</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            View or download my full CV for detailed experience, education, and projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href={cvAsset.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                View CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={cvAsset.url} download="Henry-Njue-Muchiri-CV.pdf" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
