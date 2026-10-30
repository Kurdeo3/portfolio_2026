
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Flame } from "lucide-react";
import { profile } from "@/data/portfolio";
import RotatingText from "@/components/RotatingText";
import { assets } from "../../assets/assets";

export default function Hero() {
    return (
        <section
            id="home"
            className="overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-12"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 text-justify md:grid-cols-[1.2fr_0.8fr] lg:gap-20">
                <div>
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-muted">
                        <span className="h-2 w-2 rounded-full bg-green-600" />
                        Welcome to my portfolio
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-brown">
                        Hello, I'm
                    </p>

                    <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        {profile.firstName}{" "}
                        <span className="text-brown">
                            {profile.lastName}
                        </span>
                    </h1>

                    <motion.h2
                        className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-xl font-semibold sm:text-2xl lg:text-[30px]"
                    >
                        <span>Interested in</span>

                        <RotatingText
                            texts={[
                                "Full-Stack Development",
                                "Web Development",
                                "Database",
                            ]}
                            mainClassName="rounded-lg px-2 py-1 text-brown"
                            rotationInterval={2000}
                        />
                    </motion.h2>

                    <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
                        {profile.introduction}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                        <MapPin size={17} className="text-brown" />
                        {profile.location}
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brown-dark"
                        >
                            Let's Connect
                            <ArrowRight size={17} />
                        </a>

                        <a
                            href="/CV_Eulogius Kurdeo Hesay.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-6 py-3.5 text-sm font-semibold transition hover:border-brown"
                        >
                        View Resume
                            <img src={assets.download_icon.src} alt='Download' className='w-4'/>
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -top-4 -right-4 h-28 w-28 rounded-full bg-peach/70 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-soft blur-2xl" />

                    <div className="relative rounded-3xl border border-line bg-white p-2 shadow-lg shadow-brown/5">
                        <div className="overflow-hidden rounded-2xl bg-peach">
                            <img
                                src="/images/user-image.jpg"
                                alt={`Foto profil ${profile.name}`}
                                className="h-68 w-full object-cover object-top md:h-92"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-2 px-2 py-3">
                            <div>
                                <p className="font-heading font-bold">
                                    {profile.name}
                                </p>
                                <p className="mt-1 text-sm text-muted">
                                    "Always Learning, Always Moving."
                                </p>
                            </div>

                            <span className="rounded-xl bg-peach/60 p-2 text-base">
                                <Flame size={17} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
