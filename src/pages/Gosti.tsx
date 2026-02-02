import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GuestCard } from "@/components/guests/GuestCard";
import { guests } from "@/data/guests";
import { Star, Users, Mic } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Gostiju" },
  { icon: Star, value: "4.9", label: "Prosečna ocena" },
  { icon: Mic, value: "500+", label: "Sati razgovora" },
];

const Gosti = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Wall of <span className="text-gradient">Fame</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Upoznajte neverovatne ljude koji su podelili svoje priče,
              iskustva i mudrost sa nama.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-6 text-muted-foreground text-sm">
                Naši gosti
              </span>
            </div>
          </div>

          {/* Guests Grid - Wall of Fame */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {guests.map((guest, index) => (
              <GuestCard key={guest.id} guest={guest} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gosti;
