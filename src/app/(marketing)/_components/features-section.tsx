"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  PaintBrushIcon,
  ShoppingBagIcon,
  CubeIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  SparklesIcon,
  ScissorsIcon,
  CameraIcon,
  SwatchIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}> = ({ icon: Icon, title, description, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-card text-card-foreground rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-primary mr-3" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      <div className="h-48 relative rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

  const features = [
    {
      icon: GiftIcon,
      title: "Creator Tipping",
      description:
        "Receive tips from appreciative clients and fans, providing an additional revenue stream.",
      image: "/creator-tipping.jpg",
    },
    {
      icon: GlobeAltIcon,
      title: "Global Marketplace",
      description:
        "Showcase and sell your creations and skills to a worldwide audience. Connect with clients from across the globe.",
      image: "/global-marketplace.jpg",
    },
    {
      icon: PaintBrushIcon,
      title: "Diverse Design Services",
      description:
        "Offer a wide range of services: custom designs, alterations, style consulting, and more.",
      image: "/design-services.jpg",
    },
    {
      icon: SwatchIcon,
      title: "Fabric Recommendations",
      description:
        "Provide expert fabric suggestions to clients, enhancing the quality of final products.",
      image: "/fabric-recommendations.jpg",
    },
    {
      icon: ScissorsIcon,
      title: "Pattern Making",
      description:
        "Create and sell digital patterns for both traditional and 3D-printed fashion items.",
      image: "/pattern-making.jpg",
    },
    {
      icon: CameraIcon,
      title: "Virtual Fittings",
      description:
        "Conduct remote fittings using AR technology, ensuring perfect fits for your clients.",
      image: "/virtual-fittings.jpg",
    },
    {
      icon: CubeIcon,
      title: "NFT Fashion Items",
      description:
        "Create and sell unique digital fashion pieces as NFTs, tapping into the virtual fashion market.",
      image: "/nft-fashion.jpg",
    },
    {
      icon: UserGroupIcon,
      title: "Collaboration Opportunities",
      description:
        "Find fellow designers for joint projects or outsource specific tasks within the community.",
      image: "/collaboration.jpg",
    },
    {
      icon: ShieldCheckIcon,
      title: "IP Protection",
      description:
        "Secure your designs with Base chain technology, ensuring your intellectual property is protected.",
      image: "/ip-protection.jpg",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Seamless Transactions",
      description:
        "Receive payments for your designs and services with low fees, powered by Base chain.",
      image: "/seamless-transactions.jpg",
    },

    {
      icon: SparklesIcon,
      title: "Trend Forecasting",
      description:
        "Access and contribute to trend reports, helping the community stay ahead of fashion curves.",
      image: "/trend-forecasting.jpg",
    },
    {
      icon: ShoppingBagIcon,
      title: "Custom Merchandise",
      description:
        "Design and sell custom merchandise, from t-shirts to accessories, expanding your product line.",
      image: "/custom-merchandise.jpg",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden bg-gradient-to-br from-background to-secondary/10"
      ref={containerRef}
    >
      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ y: ySpring, opacity: opacitySpring }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Empower Your Fashion Design Career
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="rounded-full text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Join FashionForge Today
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
