"use client";

import { useEffect, useState } from "react";
import Loader from "./components/loader";
import SmoothScroll from "./components/smoothscroll";
import Navbar from "./components/navbar";
// Sections
import Hero from "./sections/hero";
import Why from "./sections/why";
import Retail from "./sections/retail";
import Luxury from "./sections/luxury";
import Events from "./sections/events";
import Impact from "./sections/impact";
import CTA from "./sections/CTA";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {loading && <Loader />}

      {/* Smooth Scroll Wrapper */}
      <SmoothScroll>
        <main className="bg-black text-white overflow-x-hidden">

          <Navbar />

          <Hero />

          <div className="h-32 bg-gradient-to-b from-transparent to-black" />

          <Why />

          <div className="h-32 bg-gradient-to-b from-transparent to-black" />

          <Retail />

          <div className="h-32 bg-gradient-to-b from-transparent to-black" />

          <Luxury />

          <div className="h-32 bg-gradient-to-b from-transparent to-black" />
          <Impact />

          <div className="h-32 bg-gradient-to-b from-transparent to-black" />

          <Events />

          <div className="h-32 bg-gradient-to-b from-transparent to-black" />

          <CTA />
        </main>
      </SmoothScroll>
    </>
  );
}