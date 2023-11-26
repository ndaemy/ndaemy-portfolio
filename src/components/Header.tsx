"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isIntersecting, setIntersecting] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row items-center justify-between mx-auto px-8 py-4">
          <Link className="text-sky-400 text-xl font-bold" href="/">
            Ndaemy
          </Link>
          <div className="flex gap-8">
            <a
              className="duration-200 text-zinc-400 hover:text-zinc-100"
              href={process.env.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="duration-200 text-zinc-400 hover:text-zinc-100"
              href={process.env.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
