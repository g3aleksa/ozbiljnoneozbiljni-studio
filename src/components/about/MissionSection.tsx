import { motion } from "framer-motion";
import { Mic, Heart, Lightbulb, Target } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Mic,
    title: "Autentičnost",
    description: "Bez skripti, bez glume. Samo iskreni razgovori.",
  },
  {
    icon: Heart,
    title: "Strast",
    description: "Volimo ono što radimo i to se oseća u svakoj epizodi.",
  },
  {
    icon: Lightbulb,
    title: "Znatiželja",
    description: "Uvek tražimo nova pitanja i neočekivane odgovore.",
  },
  {
    icon: Target,
    title: "Kvalitet",
    description: "Svaka epizoda je pažljivo pripremljena i produkovana.",
  },
];

export function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              O <span className="text-gradient">nama</span>
            </h1>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">OzbiljnoNeozbiljni</strong> je 
                podcast koji je nastao iz jednostavne ideje - da se o važnim temama 
                može pričati na zabavan i pristupačan način.
              </p>
              <p>
                Verujemo da humor i ozbiljnost nisu suprotnosti. Naši razgovori 
                idu duboko, ali nikada ne zaboravljamo da se nasmejemo. Svaki gost 
                donosi novu perspektivu, a svaka epizoda je prilika da naučimo 
                nešto novo.
              </p>
              <p>
                Od 2020. godine, ugostili smo preko 100 gostiju iz različitih 
                oblasti - od preduzetnika i umetnika, do naučnika i sportista. 
                Naša misija je da inspirišemo, edukujemo i zabavimo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground mt-1">Epizoda</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground mt-1">Slušalaca</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground mt-1">Godine</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Logo & Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border">
              <img
                src={logo}
                alt="OzbiljnoNeozbiljni"
                className="w-full max-w-xs mx-auto"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <value.icon className="h-6 w-6 text-primary mb-2" />
                  <h3 className="font-semibold text-sm">{value.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
