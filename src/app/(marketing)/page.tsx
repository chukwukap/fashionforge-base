import HeroSection from "./_components/hero-section";
import FeatureSection from "./_components/features-section";
import PortfolioShowcase from "./_components/showcase";
import CommunitySection from "./_components/community-section";
import AISection from "./_components/ai-section";
import CTASection from "./_components/call-to-action";

export default function LandingPage() {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-black text-white">
      <HeroSection />

      <FeatureSection />

      <PortfolioShowcase />

      <CommunitySection />

      <AISection />

      <CTASection />
    </div>
  );
}
