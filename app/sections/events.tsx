"use client";
import { motion } from "framer-motion";

const events = [
    {
        title: "Global Product Launch",
        desc: "Host world-class brand launches with global visibility.",
    },
    {
        title: "Concerts & Live Shows",
        desc: "Massive footfall with high-energy entertainment events.",
    },
    {
        title: "Luxury Brand Activations",
        desc: "Engage premium audiences through immersive experiences.",
    },
];

export default function Events() {
    return (
        <section
            id="events"
            className="relative min-h-screen text-white px-6 md:px-20 py-24 overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="/videos/events.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-7xl font-bold mb-16"
            >
                A Global Stage for Events
            </motion.h2>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-10">

                {events.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
                    >
                        <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>
                        <p className="text-gray-400">{event.desc}</p>

                        {/* hover line */}
                        <div className="mt-6 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                    </motion.div>
                ))}

            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-20 text-center"
            >
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300"onClick={()=>alert("Event booking module coming soon")}>
                    Start Your Activation
                </button>
            </motion.div>

        </section>
    );
}