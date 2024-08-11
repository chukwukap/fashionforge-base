"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  SparklesIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const CTASection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hovered: { scale: 1.05, boxShadow: "0px 0px 8px rgb(124, 58, 237)" },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/base-background.jpg"
          alt="Base Ecosystem Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
          variants={itemVariants}
        >
          Revolutionize Your Fashion Game
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Join FashionForge and bring your wildest designs to life in the
          digital realm. Unleash your creativity, connect with fellow designers,
          and shape the future of fashion.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
          <motion.div
            whileHover="hovered"
            whileTap="hovered"
            variants={buttonVariants}
          >
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 text-lg px-8 py-3 rounded-full font-semibold flex items-center space-x-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Get Started Now</span>
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-colors duration-300 text-lg px-8 py-3 rounded-full font-semibold"
          >
            Learn More
          </Button>
        </motion.div>
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <p className="text-lg mb-4 flex items-center justify-center">
            <SparklesIcon className="w-6 h-6 mr-2 text-yellow-400" />
            Join thousands of designers already using FashionForge
          </p>
          <div className="flex justify-center space-x-4">
            {["Nike", "Adidas", "Gucci", "Prada"].map((brand) => (
              <motion.div
                key={brand}
                className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm font-semibold"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <p className="text-lg mb-4 flex items-center justify-center">
            <CubeTransparentIcon className="w-6 h-6 mr-2 text-blue-400" />
            Powered by Base for lightning-fast transactions and low fees
          </p>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default CTASection;
