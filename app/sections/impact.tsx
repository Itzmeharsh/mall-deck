"use client";
import { motion } from "framer-motion";

export default function Impact() {
    return (
        <section className="h-screen flex flex-col justify-center px-6 md:px-20 py-12 bg-black text-white">

            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-12"
            >
                Why Brands Win Here
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">

                {[
                    {
                        title: "High Spending Audience",
                        desc: "Premium global visitors with strong purchasing power.",
                    },
                    {
                        title: "Unmatched Visibility",
                        desc: "Millions of daily impressions across retail & events.",
                    },
                    {
                        title: "Global Brand Positioning",
                        desc: "Position your brand among world-leading companies.",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-6 rounded-2xl border border-white/10 bg-white/5"
                    >
                        <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}