import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
return (
    <section
    id="experience"
    className="border-y border-line/70 bg-white/40 px-5 py-20 sm:px-8 lg:px-10"
    >
    <div className="mx-auto max-w-6xl text-justify">
        <SectionHeading
        eyebrow="My journey"
        title="Experience"
        description="Professional and academic experiences that have shaped my development skills."
        />

        <div className="grid gap-6">
        {experiences.map((experience) => (
            <article
            key={experience.company}
            className="rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brown/5 sm:p-8"
            >
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-peach/70 text-brown">
                <BriefcaseBusiness size={22} />
                </div>

                <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-brown">
                    {experience.period}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug">
                    {experience.role}
                </h3>
                <p className="mt-1 text-sm text-muted">
                    {experience.company}
                </p>
                </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-muted">
                {experience.description}
            </p>

            <ul className="mt-5 space-y-3">
                {experience.highlights.map((highlight) => (
                <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-6 text-ink/80"
                >
                    <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-brown"
                    />
                    <span>{highlight}</span>
                </li>
                ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {experience.technologies.map((technology) => (
                <span
                    key={technology}
                    className="rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-muted"
                >
                    {technology}
                </span>
                ))}
            </div>
            </article>
        ))}
        </div>
    </div>
    </section>
);
}