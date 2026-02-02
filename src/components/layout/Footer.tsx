import { Youtube, Instagram, Music2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const socialLinks = [
  {
    icon: Youtube,
    href: "https://youtube.com",
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Music2,
    href: "https://spotify.com",
    label: "Spotify",
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="OzbiljnoNeozbiljni Logo"
              className="h-12 w-auto self-start"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Podcast gde ozbiljnost sreće neozbiljnost. Svaka epizoda je nova
              avantura kroz razgovore koji inspirišu i zabavljaju.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">
              Pratite nas
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">
              Prijavi se na Newsletter
            </h3>
            <p className="text-muted-foreground text-sm">
              Budi prvi koji saznaje o novim epizodama i ekskluzivnom sadržaju.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Tvoja email adresa"
                className="bg-secondary border-border placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-primary hover:bg-primary/90 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} OzbiljnoNeozbiljni. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
