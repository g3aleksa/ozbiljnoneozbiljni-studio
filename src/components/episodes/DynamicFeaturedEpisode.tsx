import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { YouTubeVideo } from "@/hooks/useYouTubePlaylist";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoSkeleton } from "./VideoSkeleton";

interface DynamicFeaturedEpisodeProps {
  video: YouTubeVideo | null;
  isLoading?: boolean;
}

export function DynamicFeaturedEpisode({ video, isLoading }: DynamicFeaturedEpisodeProps) {
  if (isLoading) {
    return (
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Najnovija epizoda
            </span>
          </div>
          <VideoSkeleton variant="hero" />
        </div>
      </section>
    );
  }

  if (!video) {
    return (
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Nije moguće učitati epizode</p>
        </div>
      </section>
    );
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const formattedDate = new Date(video.publishedAt).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Najnovija epizoda
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* YouTube Player */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </AspectRatio>
            </div>

            {/* Episode Info */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-muted-foreground text-sm mb-2">
                  {formattedDate}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {video.title}
                </h1>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Play className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kanal</p>
                  <p className="font-semibold text-lg">{video.channelTitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed line-clamp-4">
                {video.description || "Pogledajte najnoviju epizodu na našem kanalu."}
              </p>

              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-2"
              >
                <Play className="h-4 w-4" />
                Gledaj na YouTube-u
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
