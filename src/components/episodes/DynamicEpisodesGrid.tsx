import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { YouTubeVideo } from "@/hooks/useYouTubePlaylist";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoGridSkeleton } from "./VideoSkeleton";

interface DynamicEpisodesGridProps {
  videos: YouTubeVideo[];
  isLoading?: boolean;
  onVideoSelect: (video: YouTubeVideo) => void;
  selectedVideoId?: string;
}

export function DynamicEpisodesGrid({
  videos,
  isLoading,
  onVideoSelect,
  selectedVideoId,
}: DynamicEpisodesGridProps) {
  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Sve <span className="text-gradient">epizode</span>
            </h2>
            <p className="text-muted-foreground">Izaberi epizodu za gledanje</p>
          </div>
          <VideoGridSkeleton count={9} />
        </div>
      </section>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Nema dostupnih epizoda</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Sve <span className="text-gradient">epizode</span>
          </h2>
          <p className="text-muted-foreground">
            Klikni na epizodu da je gledaš u glavnom plejeru
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onSelect={onVideoSelect}
              isSelected={video.id === selectedVideoId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  video: YouTubeVideo;
  index: number;
  onSelect: (video: YouTubeVideo) => void;
  isSelected?: boolean;
}

function VideoCard({ video, index, onSelect, isSelected }: VideoCardProps) {
  const formattedDate = new Date(video.publishedAt).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleClick = () => {
    onSelect(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.article
      className={`group rounded-2xl overflow-hidden bg-background border transition-all duration-300 cursor-pointer ${
        isSelected
          ? "border-primary ring-2 ring-primary/20"
          : "border-border hover:border-primary/50"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={handleClick}
    >
      {/* Thumbnail with play overlay */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="h-6 w-6 text-primary-foreground ml-1" />
            </div>
          </div>
        </AspectRatio>
        {isSelected && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
            Sada se gleda
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-1">{formattedDate}</p>
        <p className="text-primary text-sm font-medium mb-2">
          {video.channelTitle}
        </p>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {video.description || "Pogledajte epizodu na našem kanalu."}
        </p>
      </div>
    </motion.article>
  );
}
