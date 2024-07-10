import React from "react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <path d="M0,50 L100,50" stroke="white" strokeWidth="0.5" />
          <path d="M50,0 L50,100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Revolutionize Your Fashion Design Career?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join FashionForge today and unlock the power of blockchain for your
            designs. Protect your creations, collaborate seamlessly, and tap
            into new markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="/signup"
              className="inline-block bg-white text-amber-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-stone-100 hover:shadow-lg"
            >
              Start Creating Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
