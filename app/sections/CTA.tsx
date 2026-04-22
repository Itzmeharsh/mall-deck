export default function CTA() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">

      <h2 className="text-5xl md:text-7xl font-bold max-w-3xl">
        Bring Your Brand to the World Stage
      </h2>

      <p className="mt-6 text-gray-400 max-w-xl">
        Join the world’s most influential retail and entertainment destination.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition">
          Start Leasing
        </button>

        <button className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition">
          Partner With Us
        </button>
      </div>

    </section>
  );
}