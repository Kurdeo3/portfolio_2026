
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RotatingTextProps = {
    texts: string[];
    mainClassName?: string;
    rotationInterval?: number;
};

export default function RotatingText({
    texts,
    mainClassName = "",
    rotationInterval = 2000,
}: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (texts.length <= 1) return;

        const interval = window.setInterval(() => {
            setIndex((current) => (current + 1) % texts.length);
        }, rotationInterval);

        return () => window.clearInterval(interval);
    }, [texts, rotationInterval]);

    if (texts.length === 0) return null;

    return (
        <span
            className={`relative inline-grid align-middle ${mainClassName}`}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={texts[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="col-start-1 row-start-1 whitespace-nowrap"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
