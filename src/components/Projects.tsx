import { ArrowUpRight, Code2, GitBranchIcon } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { assets } from "../../assets/assets";

const projectColors: Record<string, string> = {
    peach: "bg-[#F4E1D2]",
    blue: "bg-[#DCEAF0]",
    green: "bg-[#E3EBDD]",
};

export default function Projects() {
return (
    <section
    id="projects"
    className="border-y border-line/70 bg-white/40 px-5 py-20 sm:px-8 lg:px-10"
    >
    <div className="mx-auto max-w-6xl text-justify">
        <SectionHeading
        eyebrow="Selected work"
        title="Featured Projects"
        description="A selection of projects that represent my experience in application development and database integration, including academic coursework projects, independent projects, and internship projects"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
            <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/5"
            >
            <div
                className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${
                    projectColors[project.color] ?? "bg-[#F4E1D2]"
                }`}
            >
                {project.image ? (
                    <img
                    src={project.image}
                    alt={project.title}
                    className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                    />
                ) : (
                    <div 
                        className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/70 bg-white/60 text-brown shadow-sm transition duration-300 group-hover:scale-110">
                        <Code2 size={36} strokeWidth={1.5} />
                    </div>
                )}
                    <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-brown">
                    {project.category}
                    </span>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-bold leading-snug">
                    {project.title}
                </h3>
                </div>

                <p className="mt-2 text-sm leading-7 text-muted">
                {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                    key={technology}
                    className="rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-muted"
                    >
                    {technology}
                    </span>
                ))}
                </div>
                
                <div className="mt-4 border-t-2 border-t-peach">
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold bg-peach rounded-md px-2 py-1 text-brown hover:text-brown-dark hover:bg-peach-dark"
                        >
                            <img src={assets.web.src} alt="Github" className="w-4 h-4"/>
                            Visit Website
                            <ArrowUpRight size={15} />
                        </a>
                    ) : (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold bg-peach rounded-md px-2 py-1 text-brown hover:text-brown-dark hover:bg-peach-dark"
                        >
                            <img src={assets.github.src} alt="Github" className="w-4 h-4"/>
                            View Repository
                            <ArrowUpRight size={15} />
                        </a>
                    )}
                </div>
            </div>
            </article>
        ))}
        </div>
    </div>
    </section>
);
}