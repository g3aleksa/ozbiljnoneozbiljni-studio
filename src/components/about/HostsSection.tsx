import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { hosts } from "@/data/hosts";

export function HostsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Upoznajte <span className="text-gradient">domaćine</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tim koji stoji iza svakog razgovora, svake priče i svakog smeha.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hosts.map((host, index) => (
            <motion.article
              key={host.id}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={host.image}
                  alt={host.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {host.social?.instagram && (
                    <a
                      href={host.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-primary transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {host.social?.twitter && (
                    <a
                      href={host.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {host.social?.linkedin && (
                    <a
                      href={host.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary text-sm font-medium mb-1">
                  {host.role}
                </p>
                <h3 className="text-xl font-bold mb-3">{host.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {host.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
