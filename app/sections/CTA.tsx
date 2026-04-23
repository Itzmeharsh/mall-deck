"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold max-w-3xl"
      >
        Bring Your Brand to the World Stage
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        Join the world’s most influential retail and entertainment destination.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <button className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300">
          Start Leasing
        </button>

        <button className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition duration-300">
          Partner With Us
        </button>
      </motion.div>

    </section>
  );
}