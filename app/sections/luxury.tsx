"use client";
import { motion } from "framer-motion";

export default function Luxury() {
    return (
        <section id="luxury" className="relative h-[120vh] w-full overflow-hidden">

            {/* Background Video */}
            <motion.video
                autoPlay
                muted
                loop
                playsInline
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                className="absolute w-full h-full object-cover"
            >
                <source src="/videos/luxury.mp4" type="video/mp4" />
            </motion.video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">

                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight"
                >
                    Where Luxury Meets Global Influence
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl"
                >
                    Home to the world’s most prestigious brands, Dubai Mall offers an
                    unmatched platform for luxury retail, attracting high-net-worth
                    individuals and global shoppers.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300"
                >
                    Explore Luxury Leasing
                </motion.button>

            </div>
        </section>
    );
}