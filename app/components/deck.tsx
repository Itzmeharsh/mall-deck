"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sections
import Hero from "../sections/hero";
import Why from "../sections/why";
import Retail from "../sections/retail";
import Luxury from "../sections/luxury";
import Impact from "../sections/impact";
import Events from "../sections/events";
import CTA from "../sections/CTA";

const slides = [Hero, Why, Retail, Luxury, Impact, Events, CTA];

export default function Deck() {
    const [index, setIndex] = useState(0);

    const CurrentSlide = slides[index];

    return (
        <div className="h-screen w-full relative bg-black text-white overflow-hidden">

            {/* Slide Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                >
                    <CurrentSlide />
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-50">
                <button
                    onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
                    className="px-5 py-2 bg-white text-black rounded-full"
                >
                    Prev
                </button>

                <button
                    onClick={() =>
                        setIndex((prev) => Math.min(prev + 1, slides.length - 1))
                    }
                    className="px-5 py-2 bg-white text-black rounded-full"
                >
                    Next
                </button>
            </div>

            {/* Indicator */}
            <div className="absolute top-5 right-5 text-sm text-gray-400">
                {index + 1} / {slides.length}
            </div>

        </div>
    );
}