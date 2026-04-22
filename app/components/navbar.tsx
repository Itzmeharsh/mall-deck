"use client";

import { useEffect, useState } from "react";

const sections = ["why", "retail", "luxury", "events"];

export default function Navbar() {
  const [active, setActive] = useState("why");

  useEffect(() => {
    const handleScroll = () => {
      let current = "why";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          if (window.scrollY >= top - 200) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex gap-6 text-sm border border-white/10">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`capitalize transition ${
            active === sec ? "text-white" : "text-gray-400"
          } hover:text-white`}
        >
          {sec}
        </a>
      ))}
    </div>
  );
}