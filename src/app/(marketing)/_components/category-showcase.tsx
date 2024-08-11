import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Sample {
  title: string;
  image: string;
  designer: string;
}

interface CategoryShowcaseProps {
  title: string;
  description: string;
  image: string;
  samples: Sample[];
}

const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  title,
  description,
  image,
  samples,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl mb-8">{description}</p>
            <div className="grid grid-cols-2 gap-4">
              {samples.slice(0, 4).map((sample, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={sample.image}
                    alt={sample.title}
                    width={300}
                    height={200}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <p className="font-semibold">{sample.title}</p>
                    <p className="text-sm">by {sample.designer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
