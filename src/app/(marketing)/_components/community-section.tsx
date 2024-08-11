"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  UsersIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const CommunitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("designers");
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: UsersIcon, label: "Active Designers", value: "10,000+" },
    { icon: SparklesIcon, label: "Projects Completed", value: "50,000+" },
    {
      icon: ChatBubbleLeftRightIcon,
      label: "Daily Farcaster Casts",
      value: "5,000+",
    },
    {
      icon: ArrowTrendingUpIcon,
      label: "Monthly Trading Volume",
      value: "$2M+",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Digital Fashion Designer",
      image: "/alex-chen.jpg",
      quote:
        "FashionForge has revolutionized my design process. The community feedback is invaluable!",
    },
    {
      name: "Sophia Lee",
      role: "Fashion Influencer",
      image: "/sophia-lee.jpg",
      quote:
        "The integration with Farcaster has helped me grow my audience exponentially.",
    },
    {
      name: "Marcus Johnson",
      role: "Indie Brand Owner",
      image: "/marcus-johnson.jpg",
      quote:
        "Thanks to FashionForge, my small brand now competes with industry giants.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-background text-foreground overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Join Our Thriving Community
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground rounded-lg p-6 text-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "hsl(var(--primary) / 0.1)",
              }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-8">
            What Our Community Says
          </h3>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="bg-card text-card-foreground rounded-lg p-6 max-w-md"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="italic">&apos;{testimonial.quote}&apos;</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-8">
            Engage with FashionForge
          </h3>
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={activeTab === "designers" ? "default" : "outline"}
              onClick={() => setActiveTab("designers")}
              className="rounded-full"
            >
              For Designers
            </Button>
            <Button
              variant={activeTab === "brands" ? "default" : "outline"}
              onClick={() => setActiveTab("brands")}
              className="rounded-full"
            >
              For Brands
            </Button>
            <Button
              variant={activeTab === "enthusiasts" ? "default" : "outline"}
              onClick={() => setActiveTab("enthusiasts")}
              className="rounded-full"
            >
              For Enthusiasts
            </Button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card text-card-foreground rounded-lg p-6"
            >
              {activeTab === "designers" && (
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    Empower Your Creativity
                  </h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>Access cutting-edge digital design tools</li>
                    <li>Collaborate with brands and fellow designers</li>
                    <li>Showcase your work to a global audience</li>
                    <li>Earn royalties from your digital fashion creations</li>
                  </ul>
                  <Button className="rounded-full">Start Designing</Button>
                </div>
              )}
              {activeTab === "brands" && (
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    Elevate Your Brand
                  </h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>Discover and collaborate with top digital designers</li>
                    <li>Launch exclusive digital fashion collections</li>
                    <li>
                      Engage with customers in immersive virtual experiences
                    </li>
                    <li>Leverage blockchain for authenticity and scarcity</li>
                  </ul>
                  <Button className="rounded-full">Partner with Us</Button>
                </div>
              )}
              {activeTab === "enthusiasts" && (
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    Dive into Digital Fashion
                  </h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>
                      Collect unique, limited-edition digital fashion pieces
                    </li>
                    <li>Participate in exclusive virtual fashion events</li>
                    <li>Connect with designers and brands directly</li>
                    <li>Join discussions and share your style on Farcaster</li>
                  </ul>
                  <Button className="rounded-full">Join the Community</Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-6">
            Connect with Us on Farcaster
          </h3>
          <p className="text-xl mb-8">
            Join the conversation and stay updated with the latest trends in
            digital fashion.
          </p>
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
            Follow Us on Farcaster
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
