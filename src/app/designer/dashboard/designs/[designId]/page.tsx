"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { DesignHeader } from "./_components/header";
import { DesignDetails } from "./_components/detail";
import { DesignActions } from "./_components/action";
import { DesignTabs } from "./_components/tabs";
import { ImageLightbox } from "./_components/image-light-box";
import { sampleDesigns } from "@/lib/mocks/sample-designs";
import { motion } from "framer-motion";

export default function DesignDetailPage() {
  const params = useParams();
  const designId = params.designId as string;
  const design = sampleDesigns.find((d) => d.id === designId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!design) {
    return <div>Design not found</div>;
  }

  const allImages = [
    design.mainImage,
    ...design.variations.map((v) => v.image),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <DesignHeader
            design={design}
            onImageClick={() => {
              setCurrentImageIndex(0);
              setLightboxOpen(true);
            }}
          />
          <div className="md:flex">
            <DesignDetails
              design={design}
              onVariationClick={(index) => {
                setCurrentImageIndex(index + 1);
                setLightboxOpen(true);
              }}
            />
            <DesignActions design={design} />
          </div>
          <DesignTabs design={design} />
        </div>
      </motion.div>
      <ImageLightbox
        images={allImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
}
