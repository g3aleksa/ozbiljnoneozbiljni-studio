import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useYouTubePlaylist, YouTubeVideo } from "@/hooks/useYouTubePlaylist";

export function DynamicLatestEpisodes() {
  const { data: videos, isLoading, error } = useYouTubePlaylist(3);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Najnovije <span className="text-gradient">epizode</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Pogledaj naše poslednje razgovore i zaroni u svet OzbiljnoNeozbiljnih priča.
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="mt-4 md:mt-0 gap-2 text-primary hover:text-primary-foreground hover:bg-primary"
          >
            <Link to="/epizode">
              Sve epizode
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-card border border-border">
                <Skeleton className="aspect-video w-full" />
                <div className="p-5">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nije moguće učitati epizode. Pokušajte ponovo kasnije.
            </p>
          </div>
        )}

        {videos && videos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <EpisodeCard key={video.id} video={video} index={index} />
            ))}
          </div>
        )}

        {videos && videos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nema dostupnih epizoda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

interface EpisodeCardProps {
  video: YouTubeVideo;
  index: number;
}

function EpisodeCard({ video, index }: EpisodeCardProps) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const formattedDate = new Date(video.publishedAt).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.article
      className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center glow-primary">
            <Play className="h-6 w-6 text-primary-foreground ml-0.5" />
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-primary text-sm font-medium mb-2">
          {formattedDate}
        </p>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {video.description || video.channelTitle}
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full gap-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play className="h-4 w-4" />
            Gledaj na YouTube-u
          </a>
        </Button>
      </div>
    </motion.article>
  );
}
