
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur-md">
            <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
                {/* Logo kiri */}
                <Link
                    href="#home"
                    className="font-heading text-lg font-extrabold tracking-tight"
                >
                    EKH <span className="text-brown">.</span>
                </Link>

                {/* Menu Desktop */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted transition hover:text-brown"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Hamburger Icon */}
                <button
                    type="button"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 transition hover:bg-peach md:hidden"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="border-t border-line bg-cream px-5 py-4 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl px-3 py-3 text-sm font-medium text-muted transition hover:bg-white hover:text-brown"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
