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
            className="relative h-screen flex flex-col justify-center text-white px-6 md:px-20 py-12 overflow-hidden"
        >
            {/* Background Video */}
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

            {/* Content Wrapper */}
            <div className="relative z-10">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-bold mb-12"
                >
                    A Global Stage for Events
                </motion.h2>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
                        >
                            <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                            <p className="text-gray-300">{event.desc}</p>

                            <div className="mt-4 h-[2px] w-0 bg-white transition-all group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <button
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300"
                        onClick={() => alert("Event booking module coming soon")}
                    >
                        Start Your Activation
                    </button>
                </motion.div>

            </div>
        </section>
    );
}