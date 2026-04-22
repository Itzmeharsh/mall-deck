export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/dubai-mall.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          100 Million Visitors.
          <br />
          One Global Stage.
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          The Dubai Mall is not just retail — it’s a global platform where brands scale,
          engage, and dominate visibility.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">

          <button className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300">
            Lease Your Space
          </button>

          <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition duration-300">
            Explore Opportunities
          </button>

        </div>

      </div>
    </section>
  );
}