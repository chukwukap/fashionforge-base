"use client";
import { HeroSection } from "../_components/hero-section";
import { FeaturesSection } from "../_components/features-section";
import { CTASection } from "../_components/call-to-action";
import { HowItWorks } from "../_components/How-it-works";
import { FeaturedDesigns } from "../_components/featured-designs";
import { DesignerSpotlight } from "../_components/designer-spotlight";
import { BlockchainBenefits } from "../_components/blockchain-benefits-section";
import { MarketplacePreview } from "../_components/market-preview";
import { TestimonialsAndCTA } from "../_components/testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <FeaturedDesigns />
      <DesignerSpotlight />
      <BlockchainBenefits />
      <CTASection />
      <MarketplacePreview />
      <TestimonialsAndCTA />
    </main>
  );
}
