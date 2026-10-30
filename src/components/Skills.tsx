
import Image from "next/image";
import {
  Code2,
  Layers3,
  Database,
  Wrench,
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";

const categoryIcons = [Code2, Layers3, Database, Wrench];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-6xl text-justify">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          description="Technologies and tools I have used in academic projects and professional experience."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {skillGroups.map((group, index) => {
            const CategoryIcon = categoryIcons[index] ?? Code2;

            return (
              <section
                key={group.title}
                className="w-full rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brown/5"
              >
                {/* Header kategori */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-peach/70 text-brown">
                    <CategoryIcon size={21} />
                  </div>

                  <div>
                    <h3 className="font-heading text-base font-bold text-ink sm:text-lg">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-wrap items-center gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:border-brown/40 hover:bg-peach/20 hover:shadow-sm"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cream p-1">
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={`${skill.name} logo`}
                            width={20}
                            height={20}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Code2
                            size={17}
                            aria-hidden="true"
                            className="text-brown"
                          />
                        )}
                      </div>

                      <span className="whitespace-nowrap text-sm font-medium text-ink/80">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
