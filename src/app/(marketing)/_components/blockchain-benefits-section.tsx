import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionIntro } from "@/components/common/section-intro";

const benefits = [
  {
    title: "Decentralized Design Ownership",
    description:
      "Secure your designs with immutable blockchain records, ensuring undisputed ownership and protection against intellectual property theft.",
    example:
      "Your avant-garde collection is tokenized on the blockchain, providing irrefutable proof of your creation date and ownership rights.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
  },
  {
    title: "Smart Contract Collaborations",
    description:
      "Facilitate seamless collaborations with other designers, manufacturers, or brands through blockchain-powered smart contracts.",
    example:
      "Collaborate with a sustainable fabric supplier, where production milestones, payments, and delivery are automatically executed via smart contracts.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Tokenized Fashion Assets",
    description:
      "Transform your designs into digital assets (NFTs) that can be traded, licensed, or used in virtual fashion shows and digital wardrobes.",
    example:
      "Your digital couture piece becomes a coveted asset in virtual fashion weeks and can be worn by avatars in the metaverse.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Transparent Supply Chain",
    description:
      "Track every step of your product's journey, from raw materials to consumer, ensuring ethical sourcing and production.",
    example:
      "Customers can scan a QR code on your garment to view its entire history, from the organic cotton farm to the fair-trade workshop.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Decentralized Fashion Marketplace",
    description:
      "Sell your designs directly to consumers or other businesses without intermediaries, reducing costs and increasing profits.",
    example:
      "Launch a limited edition collection on our decentralized marketplace, where transactions are secure, instant, and commission-free.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const BenefitCard: React.FC<{
  benefit: (typeof benefits)[0];
  index: number;
}> = ({ benefit, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl p-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 text-amber-500">{benefit.icon}</div>
      <h3 className="text-2xl font-bold text-stone-800">{benefit.title}</h3>
    </div>
    <p className="text-stone-600 mb-4">{benefit.description}</p>
    <div className="bg-amber-50 rounded-lg p-4">
      <p className="text-sm text-amber-800 italic">
        <span className="font-semibold">Example:</span> {benefit.example}
      </p>
    </div>
  </motion.div>
);

const BlockchainBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-100 to-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Revolutionary Blockchain Benefits for Fashion" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
        <SectionIntro text="Join FashionForge and revolutionize your design process, protect your creations, and tap into new revenue streams with blockchain technology." />
      </div>
    </section>
  );
};

export { BlockchainBenefits };
