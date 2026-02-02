import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import studioBackground from "@/assets/studio-background.jpg";
import { DynamicLatestEpisode } from "./DynamicLatestEpisode";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${studioBackground})` }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-background/70" />
      
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
                <Link to="/epizode">
                  <Play className="h-5 w-5" />
                  Gledaj epizode
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary gap-2"
              >
                <Link to="/o-nama">
                  O nama
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Dynamic Latest Episode */}
          <DynamicLatestEpisode />
        </div>
      </div>
    </section>
  );
}
