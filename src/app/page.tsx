"use client";
import Image from "next/image";
import { LoginButton } from "@/components/privy/login-button";
import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import Designers from "./_components/designers-section";
import { CallToAction } from "./_components/call-to-action";
import { HowItWorks } from "./_components/How-it-works";
import { FeaturedDesigns } from "./_components/featured-designs";
import { DesignerSpotlight } from "./_components/designer-spotlight";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <FeaturedDesigns />
      <DesignerSpotlight />
      <Designers />
      <CallToAction />
    </div>
  );
}
