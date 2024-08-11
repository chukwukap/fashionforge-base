"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DesignShowcase: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState("3d-modeling");
  const [activeDesign, setActiveDesign] = useState(0);

  const skills = [
    { id: "3d-modeling", name: "3D Modeling" },
    { id: "texture-design", name: "Texture Design" },
    { id: "pattern-making", name: "Pattern Making" },
    { id: "animation", name: "Animation" },
    { id: "ar-integration", name: "AR Integration" },
    { id: "blockchain", name: "Blockchain" },
  ];

  const designs = [
    {
      id: 1,
      title: "Futuristic Gown",
      designer: "Elena Futura",
      images: [
        "/images/futuristic-gown-1.jpg",
        "/images/futuristic-gown-2.jpg",
        "/images/futuristic-gown-3.jpg",
      ],
      skills: ["3d-modeling", "texture-design", "animation"],
      description:
        "A stunning digital gown that changes color based on the wearer's mood.",
    },
    {
      id: 2,
      title: "Neon Streetwear",
      designer: "Alex Neon",
      images: [
        "/images/neon-streetwear-1.jpg",
        "/images/neon-streetwear-2.jpg",
        "/images/neon-streetwear-3.jpg",
      ],
      skills: ["pattern-making", "ar-integration", "blockchain"],
      description: "AR-enabled streetwear with embedded NFT authentication.",
    },
    // ... other designs
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Explore Cutting-Edge Digital Fashion
        </motion.h2>

        <Tabs
          defaultValue={activeSkill}
          onValueChange={(value) => setActiveSkill(value as string)}
        >
          <TabsList className="flex flex-wrap justify-center mb-8">
            {skills.map((skill) => (
              <TabsTrigger
                key={skill.id}
                value={skill.id}
                className="px-4 py-2 m-1 rounded-full text-sm md:text-base"
              >
                {skill.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value={activeSkill} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-card rounded-lg overflow-hidden">
                    <Image
                      src={designs[activeDesign].images[0]}
                      alt={designs[activeDesign].title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <Button
                        onClick={() => {
                          /* Implement previous image logic */
                        }}
                        className="rounded-full bg-black/50 text-white p-2 hover:bg-black/70"
                      >
                        <ArrowLeftIcon className="w-6 h-6" />
                      </Button>
                      <Button
                        onClick={() => {
                          /* Implement next image logic */
                        }}
                        className="rounded-full bg-black/50 text-white p-2 hover:bg-black/70"
                      >
                        <ArrowRightIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {designs[activeDesign].title}
                    </h3>
                    <p className="text-lg md:text-xl mb-4">
                      by {designs[activeDesign].designer}
                    </p>
                    <p className="mb-6">{designs[activeDesign].description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {designs[activeDesign].skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skills.find((s) => s.id === skill)?.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        onClick={() =>
                          setActiveDesign((prev) =>
                            prev === 0 ? designs.length - 1 : prev - 1
                          )
                        }
                        className="rounded-full text-sm md:text-base"
                      >
                        <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Previous Design
                      </Button>
                      <Button
                        onClick={() =>
                          setActiveDesign((prev) =>
                            prev === designs.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="rounded-full text-sm md:text-base"
                      >
                        Next Design
                        <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {/* Featured Designers section remains unchanged */}
        <motion.div className="mt-20" variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Featured Designers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.slice(0, 3).map((design) => (
              <motion.div
                key={design.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              >
                <Image
                  src={design.images[0]}
                  alt={design.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{design.designer}</h4>
                  <p className="text-muted-foreground mb-4">{design.title}</p>
                  <Button variant="outline" className="w-full">
                    View Portfolio
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Showcase Your Designs?
          </h3>
          <p className="text-lg md:text-xl mb-8">
            Join FashionForge and bring your digital fashion creations to life.
          </p>
          <Button size="lg" className="rounded-full text-sm md:text-base">
            Start Creating Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignShowcase;
