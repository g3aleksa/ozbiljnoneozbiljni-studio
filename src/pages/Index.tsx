import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { LatestEpisodes } from "@/components/home/LatestEpisodes";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhySection />
      <LatestEpisodes />
    </Layout>
  );
};

export default Index;
