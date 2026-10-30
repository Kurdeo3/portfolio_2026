
import {
    GraduationCap,
    Award,
    BookOpen,
    Code2,
} from "lucide-react";
import { about } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

const coursework = [
    "Web Programming",
    "Object-Oriented Programming",
    "Database Systems",
    "Software Testing",
    "Software Architecture",
];

export default function About() {
    return (
        <section
            id="about"
            className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Get to know me"
                    title="About Me"
                    description="My background, education, and areas of interest."
                />

                <div className="grid gap-6">
                    {/* About Me */}
                    <div className="rounded-3xl border border-line bg-white p-5 sm:p-8 lg:p-9">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-peach text-brown sm:h-14 sm:w-14">
                                <Code2 size={25} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    <span className="rounded-md bg-peach px-3 py-1 text-xs font-semibold text-brown sm:text-sm">
                                        Background
                                    </span>
                                </div>

                                <h3 className="mt-3 font-heading text-lg font-bold sm:text-xl">
                                    Little About Me
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8 text-justify">
                                    {about.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                {/* Education */}
                <div className="rounded-3xl border border-line bg-white p-5 sm:p-8 lg:p-9">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-peach text-brown sm:h-14 sm:w-14">
                                <GraduationCap size={28} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    <span className="rounded-md bg-peach px-3 py-1 text-xs font-semibold text-brown sm:text-sm">
                                        Education
                                    </span>
                                    <p className="text-sm text-muted">
                                        {about.period}
                                    </p>
                                </div>

                                <h3 className="mt-3 font-heading text-lg font-bold sm:text-xl">
                                    {about.education}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                                    {about.degree}
                                </p>
                            </div>
                        </div>

                        {/* GPA */}
                        <div className="flex items-center gap-4 rounded-2xl bg-cream p-4 sm:p-5 md:min-w-48">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-peach text-brown">
                                <Award size={20} />
                            </div>

                            <div>
                                <p className="text-xs text-muted sm:text-sm">
                                    Grade Point Average
                                </p>
                                <p className="mt-1 font-heading text-xl font-extrabold sm:text-2xl">
                                    {about.gpa}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Relevant Coursework */}
                    <div className="mt-7 border-t border-line pt-6 sm:mt-8 sm:pt-7">
                        <div className="flex items-center gap-3">
                            <BookOpen
                                size={20}
                                className="shrink-0 text-brown"
                            />
                            <h4 className="font-heading text-sm font-bold leading-6 text-brown sm:text-base">
                                Relevant Coursework
                            </h4>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {coursework.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-peach/60 px-3 py-2 text-xs font-medium leading-5 text-brown-dark sm:text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
