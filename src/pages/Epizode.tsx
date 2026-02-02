import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { DynamicFeaturedEpisode } from "@/components/episodes/DynamicFeaturedEpisode";
import { DynamicEpisodesGrid } from "@/components/episodes/DynamicEpisodesGrid";
import { useYouTubePlaylist, YouTubeVideo } from "@/hooks/useYouTubePlaylist";

const Epizode = () => {
  const { data: videos, isLoading, error } = useYouTubePlaylist(10);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  // Set the first video as selected when data loads
  useEffect(() => {
    if (videos && videos.length > 0 && !selectedVideo) {
      setSelectedVideo(videos[0]);
    }
  }, [videos, selectedVideo]);

  const handleVideoSelect = (video: YouTubeVideo) => {
    setSelectedVideo(video);
  };

  // Get the remaining videos for the grid (exclude the selected one or show all if none selected)
  const gridVideos = videos?.slice(1) ?? [];

  return (
    <Layout>
      <DynamicFeaturedEpisode 
        video={selectedVideo} 
        isLoading={isLoading} 
      />
      <DynamicEpisodesGrid
        videos={gridVideos}
        isLoading={isLoading}
        onVideoSelect={handleVideoSelect}
        selectedVideoId={selectedVideo?.id}
      />
    </Layout>
  );
};

export default Epizode;
