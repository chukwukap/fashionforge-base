"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const fashionImages = [
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2070&h=1380",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=2070&h=1380",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=2070&h=1380",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2070&h=1380",
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % fashionImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } =
        containerRef.current?.getBoundingClientRect() || {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
        };
      mouseX.set((e.clientX - left) / width);
      mouseY.set((e.clientY - top) / height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const particleCount = 50;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));
  const particleX = useTransform(mouseX, [0, 1], [-50, 50]);
  const particleY = useTransform(mouseY, [0, 1], [-50, 50]);

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Image Carousel */}
      <motion.div
        key={currentImageIndex}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${fashionImages[currentImageIndex]}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-secondary/50 mix-blend-overlay" />
      </motion.div>

      {/* Particle Effect */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{
            x: particleX,
            y: particleY,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            background: index % 2 === 0 ? "var(--primary)" : "var(--secondary)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground max-w-4xl px-4">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FashionForge
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-3xl mb-8 font-light text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revolutionizing Couture through Blockchain Brilliance
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <CTAButton text="Forge Your Digital Wardrobe" primary={true} />
          <CTAButton text="Create & Sell" primary={false} />
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {fashionImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 z-50 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-primary scale-125"
                : "bg-primary/50 hover:bg-primary/75"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </motion.section>
  );
};

interface CTAButtonProps {
  text: string;
  primary: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, primary }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
        primary
          ? "bg-primary text-primary-foreground"
          : "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {primary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent to-secondary"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

export { HeroSection };
