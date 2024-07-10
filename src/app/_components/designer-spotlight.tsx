import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const designers = [
  {
    id: 1,
    name: "Aria Veil",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Ethereal Gowns",
    earnings: 250000,
    growthRate: 185,
    designsSold: 73,
  },
  {
    id: 2,
    name: "Leo Modernist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Avant-Garde Suits",
    earnings: 180000,
    growthRate: 150,
    designsSold: 58,
  },
  {
    id: 3,
    name: "Zoe Eco",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Sustainable Chic",
    earnings: 210000,
    growthRate: 200,
    designsSold: 65,
  },
  {
    id: 4,
    name: "Kai Futurist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Tech-Inspired Wear",
    earnings: 195000,
    growthRate: 170,
    designsSold: 61,
  },
  {
    id: 5,
    name: "Mia Vintage",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Retro Revivals",
    earnings: 220000,
    growthRate: 160,
    designsSold: 69,
  },
  {
    id: 6,
    name: "Ravi Fusion",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Cultural Blend Couture",
    earnings: 235000,
    growthRate: 190,
    designsSold: 71,
  },
];

const DesignerCard: React.FC<{ designer: (typeof designers)[0] }> = ({
  designer,
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Link href={`/designers/${designer.id}`} passHref>
      <div className="cursor-pointer">
        <div className="relative h-48">
          <img
            src={designer.image}
            alt={designer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-2xl font-bold text-white">{designer.name}</h3>
            <p className="text-sm text-gray-300">{designer.specialty}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">Total Earnings</p>
              <p className="text-2xl font-bold text-amber-600">
                ${designer.earnings.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Growth Rate</p>
              <p className="text-2xl font-bold text-green-600">
                +{designer.growthRate}%
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Designs Sold</p>
            <p className="text-3xl font-bold text-stone-800">
              {designer.designsSold}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const DesignerSpotlight: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-amber-50/70">
      {/* Fashion-inspired SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="designer-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0h100v100H0z"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
              <path d="M50 0v100M0 50h100" stroke="#000" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" fill="#000" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#designer-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        <motion.h2
          className="  text-amber-800 text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Designer Spotlight
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer) => (
            <DesignerCard key={designer.id} designer={designer} />
          ))}
        </div>
        <motion.p
          className="text-center mt-12 text-stone-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join these successful designers on FashionForge and turn your creative
          vision into a thriving business.
        </motion.p>
      </div>
    </section>
  );
};

export { DesignerSpotlight };
