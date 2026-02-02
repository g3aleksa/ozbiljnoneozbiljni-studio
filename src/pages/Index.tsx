import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhySection } from "@/components/home/WhySection";
import { DynamicLatestEpisodes } from "@/components/home/DynamicLatestEpisodes";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhySection />
      <DynamicLatestEpisodes />
    </Layout>
  );
};

export default Index;
