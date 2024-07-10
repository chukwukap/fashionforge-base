import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const MarketplacePreview: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-serif text-center mb-16 text-stone-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Curated Elegance
        </motion.h2>

        <div className="bg-white shadow-xl overflow-hidden rounded-lg">
          <div className="p-8 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <Input
                  type="text"
                  placeholder="Search our curated collection..."
                  className="bg-transparent border-stone-300 focus:border-amber-500"
                />
              </div>
              <Button
                variant="default"
                className="bg-stone-800 hover:bg-stone-700"
              >
                Discover
              </Button>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 border-r border-stone-200 pr-8">
              <h3 className="font-serif text-xl mb-6 text-stone-800">Refine</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-stone-700">
                    Category
                  </h4>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="outerwear">Outerwear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-stone-700">
                    Designer
                  </h4>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Designers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Designers</SelectItem>
                      <SelectItem value="aria">Aria Veil</SelectItem>
                      <SelectItem value="leo">Leo Modernist</SelectItem>
                      <SelectItem value="zoe">Zoe Eco</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-stone-700">
                    Price Range
                  </h4>
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-stone-600">
                    <span>$0</span>
                    <span>$1000+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    image:
                      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                    title: "Ethereal Gown",
                    designer: "Aria Veil",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                    title: "Modernist Suit",
                    designer: "Leo Modernist",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                    title: "Eco Chic Ensemble",
                    designer: "Zoe Eco",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                    title: "Avant-Garde Piece",
                    designer: "Futurist Couture",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                    title: "Minimalist Elegance",
                    designer: "Sleek Designs",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                    title: "Timeless Classic",
                    designer: "Vintage Vogue",
                  },
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-stone-200 h-64 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h4 className="font-serif text-lg text-stone-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-stone-600 mb-2">
                      By {item.designer}
                    </p>
                    <div className="flex items-center text-xs text-amber-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Blockchain Authenticated
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.p
          className="text-center mt-16 text-stone-600 max-w-2xl mx-auto font-serif text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our exclusive collection of blockchain-authenticated designs.
          Each piece is a testament to creativity, authenticity, and innovation
          in fashion.
        </motion.p>
      </div>
    </section>
  );
};

export { MarketplacePreview };
