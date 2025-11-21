import { Github, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/henry2547/henry_njue?tab=readme-ov-file",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/njue-muchiri-5a7532360",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/njue_unruly",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/unruly.njue/",
    },
  ];

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Henry Muchiri</h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer crafting elegant solutions with clean code and creative thinking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:henrynjue255@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                henrynjue255@gmail.com
              </a>
              <a
                href="https://wa.me/254742735159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +254 742 735159
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Henry Muchiri. All rights reserved.</p>
          <p className="mt-2">Based in Kirinyaga County, Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
};
