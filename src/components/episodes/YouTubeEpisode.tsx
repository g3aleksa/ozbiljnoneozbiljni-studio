import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubeEpisodeProps {
  youtubeUrl: string;
  title: string;
  description: string;
}

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function YouTubeEpisode({ youtubeUrl, title, description }: YouTubeEpisodeProps) {
  const videoId = extractYouTubeId(youtubeUrl);

  if (!videoId) {
    return (
      <div className="rounded-2xl bg-card border border-border p-8 text-center">
        <p className="text-muted-foreground">Neispravan YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-card border border-border">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </AspectRatio>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
