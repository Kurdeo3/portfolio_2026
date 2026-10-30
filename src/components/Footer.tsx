
"use client";
import { assets } from "../../assets/assets";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-line px-5 py-7 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="#home"
          className="font-heading text-lg font-extrabold tracking-tight"
        >
          EKH<span className="text-brown">.</span>
        </a>

        <p className="text-center text-xs leading-6 text-muted">
          © {year ?? "2026"} {profile.name}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-line p-2.5 text-muted transition hover:border-brown hover:text-brown"
          >
            <img src={assets.github.src} alt="Github" className="h-6 w-6"/>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-line p-2.5 text-muted transition hover:border-brown hover:text-brown"
          >
            <img src={assets.linkedin.src} alt="Github" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
