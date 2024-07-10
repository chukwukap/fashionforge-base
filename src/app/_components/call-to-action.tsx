import { motion } from "framer-motion";

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Join the Fashion Revolution
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-amber-600 px-8 py-3 rounded-full text-lg font-semibold"
        >
          Sign Up Now
        </motion.button>
      </div>
    </section>
  );
};
