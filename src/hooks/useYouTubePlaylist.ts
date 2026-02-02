import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
}

interface PlaylistResponse {
  videos: YouTubeVideo[];
}

async function fetchPlaylistVideos(maxResults: number = 10): Promise<YouTubeVideo[]> {
  const { data, error } = await supabase.functions.invoke<PlaylistResponse>(
    "youtube-playlist",
    {
      body: null,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Handle the edge function response with query params
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/youtube-playlist?maxResults=${maxResults}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch playlist videos");
  }

  const result: PlaylistResponse = await response.json();
  return result.videos;
}

export function useYouTubePlaylist(maxResults: number = 10) {
  return useQuery({
    queryKey: ["youtube-playlist", maxResults],
    queryFn: () => fetchPlaylistVideos(maxResults),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes (formerly cacheTime)
    retry: 2,
  });
}

export function useLatestVideo() {
  const { data, isLoading, error } = useYouTubePlaylist(1);
  return {
    latestVideo: data?.[0] ?? null,
    isLoading,
    error,
  };
}
