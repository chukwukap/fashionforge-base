import React from "react";
import { motion } from "framer-motion";

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
];

const DesignerCard: React.FC<{ designer: (typeof designers)[0] }> = ({
  designer,
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
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
  </motion.div>
);

const DesignerSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-stone-800"
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
