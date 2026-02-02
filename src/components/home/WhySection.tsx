import { motion } from "framer-motion";
import { Mic, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Autentični razgovori",
    description:
      "Bez skripti, bez cenzure. Samo iskrene priče i perspektive koje inspirišu.",
  },
  {
    icon: Users,
    title: "Raznovrsni gosti",
    description:
      "Od preduzetnika do umetnika, od sportista do naučnika - svako ima priču vrednu slušanja.",
  },
  {
    icon: Sparkles,
    title: "Ozbiljno neozbiljno",
    description:
      "Duboke teme obrađujemo sa dozom humora jer verujemo da se i o teškim stvarima može pričati lako.",
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Zašto <span className="text-gradient">OzbiljnoNeozbiljni</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Podcast koji se ne plaši da ide protiv struje. Evo šta nas čini
            posebnim.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
