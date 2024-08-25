"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartBarIcon,
  SwatchIcon,
  SparklesIcon,
  BoltIcon,
  ArrowPathIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const aiFeatures = [
  {
    icon: ChartBarIcon,
    title: "Trend Forecasting",
    description:
      "Stay ahead of the curve with AI-powered fashion trend predictions.",
  },
  {
    icon: SwatchIcon,
    title: "Color Palette Suggestions",
    description:
      "Get AI-generated color palettes that resonate with current trends.",
  },
  {
    icon: SparklesIcon,
    title: "Style Recommendations",
    description:
      "Receive personalized style suggestions based on user preferences and market trends.",
  },
  {
    icon: BoltIcon,
    title: "Design Optimization",
    description:
      "Optimize your designs for various factors like sustainability and production efficiency.",
  },
  {
    icon: ArrowPathIcon,
    title: "Automated Iterations",
    description:
      "Generate multiple design variations quickly with AI assistance.",
  },
];

const AISection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            AI-Powered Fashion Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Harness the power of artificial intelligence to revolutionize your
            fashion design process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary rounded-full">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <LightBulbIcon className="w-6 h-6" />
                <span>AI Design Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Experience the future of fashion design with our AI-powered
                assistant. Get instant feedback, suggestions, and inspiration
                for your creations.
              </p>
              <Button variant="secondary" size="lg">
                Try It Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
