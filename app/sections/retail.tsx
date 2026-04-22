"use client";

export default function Retail() {
    return (
        <section id="retail" className="relative h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover"
            >
                <source src="/videos/retail.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">

                <h2 className="text-5xl md:text-7xl font-bold max-w-3xl">
                    A Retail Powerhouse
                </h2>

                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
                    Home to 1200+ global brands, flagship stores, and high-performing
                    retail experiences that drive unmatched footfall and revenue.
                </p>

                <button className="mt-8 w-fit px-6 py-3 bg-white text-black rounded-full hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300">
                    Explore Retail Opportunities
                </button>

            </div>
        </section>
    );
}