import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import { Guest } from "@/data/guests";

interface GuestCardProps {
  guest: Guest;
  index: number;
}

export function GuestCard({ guest, index }: GuestCardProps) {
  return (
    <motion.article
      className="group flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Circular Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-border group-hover:border-primary transition-colors duration-300">
          <img
            src={guest.image}
            alt={guest.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Episode Badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
          <Play className="h-3 w-3" />
          EP {guest.episodeNumber}
        </div>
      </div>

      {/* Name & Title */}
      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
        {guest.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 px-2">
        {guest.title}
      </p>

      {/* Quote */}
      <div className="relative px-4 max-w-xs">
        <Quote className="absolute -top-2 -left-1 h-6 w-6 text-primary/30" />
        <p className="text-sm italic text-muted-foreground leading-relaxed">
          "{guest.quote}"
        </p>
      </div>
    </motion.article>
  );
}
