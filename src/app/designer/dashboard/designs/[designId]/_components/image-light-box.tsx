import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export function ImageLightbox({
  images,
  isOpen,
  onClose,
  currentIndex,
  setCurrentIndex,
}: ImageLightboxProps) {
  if (!isOpen) return null;

  const handlePrevious = () => setCurrentIndex(Math.max(0, currentIndex - 1));
  const handleNext = () =>
    setCurrentIndex(Math.min(images.length - 1, currentIndex + 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="absolute right-4 text-white">
            <ChevronRight size={24} />
          </button>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full max-w-4xl max-h-4xl"
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
