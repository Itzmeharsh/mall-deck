"use client";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Why() {
    return (
        <section
            id="why"
            className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24 bg-black text-white"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-7xl font-bold mb-16 leading-tight"
            >
                Why <span className="text-white/70">Dubai Mall</span>?
            </motion.h2>

            {/* Stats */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="grid md:grid-cols-3 gap-10"
            >
                {[
                    { title: "100M+", desc: "Annual Visitors" },
                    { title: "1200+", desc: "Retail Stores" },
                    { title: "Global", desc: "Tourism Destination" },
                ].map((itemData, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
                    >
                        <h3 className="text-4xl font-semibold mb-2">
                            {itemData.title}
                        </h3>
                        <p className="text-gray-400">{itemData.desc}</p>

                        {/* subtle hover line */}
                        <div className="mt-4 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}