import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { useLatestVideo } from "@/hooks/useYouTubePlaylist";

export function DynamicLatestEpisode() {
  const { latestVideo, isLoading, error } = useLatestVideo();

  if (isLoading) {
    return (
      <div className="relative">
        <Skeleton className="w-full aspect-video rounded-2xl" />
        <div className="mt-4">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-6 w-full mb-1" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>
    );
  }

  if (error || !latestVideo) {
    return (
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border p-8 text-center">
        <p className="text-muted-foreground">Nije moguće učitati najnoviju epizodu</p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/epizode">Pregledaj sve epizode</Link>
        </Button>
      </div>
    );
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${latestVideo.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <AspectRatio ratio={16 / 9}>
          <img
            src={latestVideo.thumbnail}
            alt={latestVideo.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>

        {/* Play overlay */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 glow-primary">
            <Play className="h-8 w-8 text-primary-foreground ml-1" />
          </div>
        </a>

        {/* Badge */}
        <Badge className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground">
          Najnovija epizoda
        </Badge>
      </div>

      <div className="mt-4">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">
          {new Date(latestVideo.publishedAt).toLocaleDateString("sr-RS", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h3 className="text-xl font-bold mt-1 line-clamp-2">{latestVideo.title}</h3>
        <p className="text-muted-foreground mt-1">{latestVideo.channelTitle}</p>
      </div>

      <div className="flex gap-3 mt-4">
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
        >
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <Play className="h-4 w-4" />
            Gledaj sada
          </a>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <Link to="/epizode">
            Sve epizode
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
