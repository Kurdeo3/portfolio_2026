
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("home");

        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(hero);

        return () => observer.disconnect();
    }, []);

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 rounded-full bg-brown p-3 text-white shadow-lg transition hover:bg-brown-dark sm:bottom-8 sm:right-8"
        >
            <ArrowUp size={20} />
        </button>
    );
}
