"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const FashionCard = ({
  src,
  alt,
  x,
  y,
}: {
  src: string;
  alt: string;
  x: number;
  y: number;
}) => (
  <motion.div
    className="absolute w-40 h-56 rounded-lg overflow-hidden shadow-lg"
    style={{ x, y }}
    animate={{
      y: [y, y + 20, y],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Image src={src} alt={alt} layout="fill" objectFit="cover" />
  </motion.div>
);

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const texts = [
    "Revolutionize Fashion",
    "Design Without Limits",
    "Connect Globally",
    "Secure Your Creations",
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Text rotation interval
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-background to-primary/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="fashion-grid"></div>
      </div>

      {/* Floating Fashion Cards */}
      <FashionCard
        src="/fashion1.jpg"
        alt="Fashion Design 1"
        x={-150}
        y={100}
      />
      {windowSize.width > 0 && (
        <>
          <FashionCard
            src="/images/soccer-uniform.png"
            alt="Fashion Design 2"
            x={windowSize.width - 250}
            y={150}
          />
          <FashionCard
            src="/images/pattern-sketcher.jpg"
            alt="Fashion Design 3"
            x={-100}
            y={windowSize.height - 250}
          />
          <FashionCard
            src="/images/sketch.avif"
            alt="Fashion Design 4"
            x={windowSize.width - 200}
            y={windowSize.height - 300}
          />
        </>
      )}

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          FashionForge
        </h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl mb-8"
          >
            <AnimatedText text={texts[currentTextIndex]} />
          </motion.h2>
        </AnimatePresence>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="rounded-full text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-lg px-8 py-4 transition-transform hover:scale-105"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg
          className="animate-bounce w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
