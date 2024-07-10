import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const featuredDesigns = [
  {
    id: 1,
    title: "Ethereal Gown",
    designer: "Aria Veil",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blockchainId: "0x1a2b3c...",
  },
  {
    id: 2,
    title: "Avant-Garde Suit",
    designer: "Modernist Tailor",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blockchainId: "0x4d5e6f...",
  },
  {
    id: 3,
    title: "Eco Chic Ensemble",
    designer: "Green Threads",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blockchainId: "0x7g8h9i...",
  },
  {
    id: 4,
    title: "Futuristic Streetwear",
    designer: "Urban Pulse",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    blockchainId: "0xj0k1l...",
  },
];

const DesignCard: React.FC<{ design: (typeof featuredDesigns)[0] }> = ({
  design,
}) => (
  <div className="px-4">
    <Link href={`/designs/${design.id}`} passHref>
      <div className="relative group cursor-pointer">
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{design.title}</h3>
          <p className="text-lg text-white mb-2">By {design.designer}</p>
          <div className="flex items-center text-sm text-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Blockchain Protected: {design.blockchainId}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const FeaturedDesigns: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Fashion-inspired SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="fabric"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0h10v10H0zm10 10h10v10H10z"
                fill="#000"
                fillOpacity="0.05"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fabric)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12 text-stone-800">
          Featured Designs
        </h2>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {featuredDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </Slider>
          {/* Custom navigation buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              sliderRef.current?.slickPrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-stone-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              sliderRef.current?.slickNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-stone-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p className="text-center mt-12 text-stone-600 max-w-2xl mx-auto">
          Each design on FashionForge is securely stored and verified on the
          blockchain, ensuring authenticity and protecting designers&apos;
          intellectual property.
        </p>
      </div>
    </section>
  );
};

export { FeaturedDesigns };
