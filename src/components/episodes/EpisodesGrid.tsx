import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Play, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { episodes, Episode } from "@/data/episodes";

export function EpisodesGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEpisodes = useMemo(() => {
    if (!searchQuery.trim()) return episodes;

    const query = searchQuery.toLowerCase();
    return episodes.filter(
      (episode) =>
        episode.title.toLowerCase().includes(query) ||
        episode.guest.toLowerCase().includes(query) ||
        episode.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Sve <span className="text-gradient">epizode</span>
            </h2>
            <p className="text-muted-foreground">
              Pronađi epizodu koja te zanima
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Pretraži po naslovu ili gostu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-secondary border-border"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Count */}
        {searchQuery && (
          <p className="text-muted-foreground mb-6">
            Pronađeno {filteredEpisodes.length}{" "}
            {filteredEpisodes.length === 1 ? "epizoda" : "epizoda"}
          </p>
        )}

        {/* Episodes Grid */}
        {filteredEpisodes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode, index) => (
              <EpisodeCard key={episode.id} episode={episode} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nema epizoda koje odgovaraju pretrazi "{searchQuery}"
            </p>
            <Button
              variant="ghost"
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary"
            >
              Poništi pretragu
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

interface EpisodeCardProps {
  episode: Episode;
  index: number;
}

function EpisodeCard({ episode, index }: EpisodeCardProps) {
  return (
    <motion.article
      className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Embedded YouTube Player */}
      <div className="relative aspect-video overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${episode.youtubeId}?rel=0`}
          title={episode.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-1">
          {new Date(episode.date).toLocaleDateString("sr-RS", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p className="text-primary text-sm font-medium mb-2">{episode.guest}</p>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {episode.description}
        </p>
      </div>
    </motion.article>
  );
}
