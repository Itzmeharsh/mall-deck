"use client";

import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Deck from "./components/deck";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Deck />
    </>
  );
}