import { Layout } from "@/components/layout/Layout";
import { FeaturedEpisode } from "@/components/episodes/FeaturedEpisode";
import { EpisodesGrid } from "@/components/episodes/EpisodesGrid";
import { episodes } from "@/data/episodes";

const Epizode = () => {
  const latestEpisode = episodes[0];

  return (
    <Layout>
      <FeaturedEpisode episode={latestEpisode} />
      <EpisodesGrid />
    </Layout>
  );
};

export default Epizode;
