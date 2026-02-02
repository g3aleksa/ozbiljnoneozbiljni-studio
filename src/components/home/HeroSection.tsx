import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { episodes } from "@/data/episodes";

export function HeroSection() {
  const latestEpisode = episodes[0];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <motion.img
              src={logo}
              alt="OzbiljnoNeozbiljni"
              className="h-20 md:h-28 w-auto self-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Gde <span className="text-gradient">ozbiljnost</span> sreće{" "}
              <span className="text-gradient">neozbiljnost</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Podcast koji spaja duboke razgovore sa neočekivanim humorom. 
              Svaka epizoda je nova avantura.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 glow-primary animate-glow-pulse"
              >
                <a
                  href={latestEpisode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="h-5 w-5" />
                  Slušaj najnoviju epizodu
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary gap-2"
              >
                <Link to="/epizode">
                  Sve epizode
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Featured Episode */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src={latestEpisode.thumbnail}
                alt={latestEpisode.title}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Play overlay */}
              <a
                href={latestEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 glow-primary">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
              </a>
            </div>
            
            <div className="mt-4">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                Najnovija epizoda
              </p>
              <h3 className="text-xl font-bold mt-1">{latestEpisode.title}</h3>
              <p className="text-muted-foreground mt-1">
                Gost: {latestEpisode.guest}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
