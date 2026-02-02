import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Kontakt() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Poruka poslata!",
      description: "Hvala što ste nas kontaktirali. Odgovorićemo vam u najkraćem roku.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kontaktirajte <span className="text-gradient">nas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Imate pitanje, predlog za gosta ili želite sarađivati? 
              Javite nam se i rado ćemo vam odgovoriti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              className="bg-card rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Pošaljite nam poruku</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ime i prezime
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Vaše ime"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email adresa
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="vas@email.com"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Tema
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="O čemu želite da razgovaramo?"
                    required
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Poruka
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Napišite vašu poruku ovde..."
                    rows={6}
                    required
                    className="bg-secondary border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
                >
                  {isSubmitting ? (
                    "Slanje..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Pošalji poruku
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontakt informacije</h2>
                <p className="text-muted-foreground mb-8">
                  Slobodno nas kontaktirajte putem forme ili direktno na naše kontakt podatke.
                  Trudimo se da odgovorimo na sve poruke u roku od 24-48 sati.
                </p>
              </div>

              <div className="space-y-6">
                <ContactInfoCard
                  icon={Mail}
                  title="Email"
                  content="kontakt@ozbiljnoneozbiljni.rs"
                  href="mailto:kontakt@ozbiljnoneozbiljni.rs"
                />
                <ContactInfoCard
                  icon={Phone}
                  title="Telefon"
                  content="+381 11 123 4567"
                  href="tel:+381111234567"
                />
                <ContactInfoCard
                  icon={MapPin}
                  title="Lokacija"
                  content="Beograd, Srbija"
                />
              </div>

              {/* Social CTA */}
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold mb-2">Pratite nas na društvenim mrežama</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Budite u toku sa najnovijim epizodama i sadržajem iza kulisa.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                      Spotify
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface ContactInfoCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  href?: string;
}

function ContactInfoCard({ icon: Icon, title, content, href }: ContactInfoCardProps) {
  const ContentWrapper = href ? "a" : "div";
  
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <ContentWrapper
          {...(href ? { href, className: "font-semibold hover:text-primary transition-colors" } : { className: "font-semibold" })}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}
