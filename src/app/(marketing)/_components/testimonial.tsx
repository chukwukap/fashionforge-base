import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionIntro } from "@/components/common/section-intro";

const testimonials = [
  {
    quote:
      "FashionForge has revolutionized how I protect and monetize my designs. The blockchain authentication gives me peace of mind, and the quality of craftsmanship on the platform is unparalleled.",
    author: "Aria Veil",
    role: "Fashion Designer",
  },
  {
    quote:
      "As a buyer, I love knowing that each piece I purchase is authentic and its provenance is verified. The innovative use of blockchain technology adds a new layer of trust to luxury fashion.",
    author: "Ethan Collector",
    role: "Fashion Enthusiast",
  },
  {
    quote:
      "The smart contract collaborations on FashionForge have opened up new possibilities for my sustainable fashion line. It's not just about great design anymore; it's about transparent, ethical creation.",
    author: "Zoe Eco",
    role: "Sustainable Fashion Designer",
  },
];

const TestimonialsAndCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-100 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Voices of the Fashion Revolution" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-stone-600 mb-4 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="text-stone-800 font-semibold">
                {testimonial.author}
              </p>
              <p className="text-stone-500 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.h3
            className="text-3xl font-serif mb-6 text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join the Fashion Revolution
          </motion.h3>
          <motion.p
            className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whether you&apos;re a visionary designer or a discerning buyer,
            FashionForge invites you to be part of the future of fashion.
            Experience the perfect blend of exquisite craftsmanship and
            cutting-edge blockchain technology.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Start Designing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-50"
            >
              Explore Collections
            </Button>
          </motion.div>
        </div>

        <SectionIntro text="FashionForge has revolutionized how I protect and monetize my designs. The blockchain authentication gives me peace of mind, and the quality of craftsmanship on the platform is unparalleled." />
      </div>
    </section>
  );
};

export { TestimonialsAndCTA };
