import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heart, Eye, Download } from "lucide-react";

const trendingDesigns = [
  {
    id: 1,
    name: "Ethereal Evening Gown",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    designer: "Aria Couture",
    likes: 1200,
    views: 5600,
    downloads: 350,
  },
  {
    id: 2,
    name: "Urban Streetwear Collection",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    designer: "Metro Chic",
    likes: 980,
    views: 4200,
    downloads: 280,
  },
  {
    id: 3,
    name: "Bohemian Summer Dress",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    designer: "Free Spirit Fashions",
    likes: 1500,
    views: 6800,
    downloads: 420,
  },
  {
    id: 4,
    name: "Avant-Garde Jacket",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    designer: "Futuristic Flair",
    likes: 2200,
    views: 9500,
    downloads: 680,
  },
  // Add more trending designs as needed
];

export function TrendingDesigns() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="pb-10"
      >
        {trendingDesigns.map((design) => (
          <SwiperSlide key={design.id}>
            <motion.div
              className="relative h-80 rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={design.image}
                alt={design.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 text-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-1">{design.name}</h3>
                <p className="text-sm mb-2">{design.designer}</p>
                <div className="flex justify-between text-xs">
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" /> {design.likes}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" /> {design.views}
                  </span>
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-1" /> {design.downloads}
                  </span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
