
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { assets } from "../../assets/assets";

const contactItems = [
    {
        icon: Mail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
    },
    {
        icon: MapPin,
        label: "Location",
        value: profile.location,
        href: "",
    },
    {
        image: assets.github,
        label: "GitHub",
        value: "Visit my GitHub",
        href: profile.github,
    },
    {
        image: assets.linkedin,
        label: "LinkedIn",
        value: "Connect with me",
        href: profile.linkedin,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="px-5 py-20 sm:px-8 lg:px-10"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Get in touch"
                    title="Let's Work Together"
                    description="Have a project, opportunity, or just want to connect? Feel free to reach out."
                />

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="rounded-3xl bg-[#302820] p-7 text-white sm:p-9">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8C7A9]">
                            Contact information
                        </p>

                        <h3 className="mt-4 font-heading text-2xl font-bold leading-snug">
                            Let's start a conversation.
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/65">
                            I'm open to software development opportunities,
                            web projects, and professional collaboration.
                        </p>

                        <div className="mt-8 space-y-5">
                            {contactItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="shrink-0 pt-1">
                                            {item.image ? (
                                                <img
                                                    src={item.image.src}
                                                    alt={item.label}
                                                    className="h-6 w-6 object-contain"
                                                />
                                            ) : Icon ? (
                                                <Icon size={19} />
                                            ) : null}
                                        </div>

                                        <div className="min-w-0 pt-0.5">
                                            <p className="text-xs text-white/50">
                                                {item.label}
                                            </p>

                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={
                                                        item.href.startsWith("http")
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel={
                                                        item.href.startsWith("http")
                                                            ? "noreferrer"
                                                            : undefined
                                                    }
                                                    className="mt-1 inline-flex max-w-full items-center gap-1 break-all text-sm font-medium transition hover:text-[#E8C7A9]"
                                                >
                                                    {item.value}
                                                    {item.href.startsWith("http") && (
                                                        <ArrowUpRight
                                                            size={13}
                                                            className="shrink-0"
                                                        />
                                                    )}
                                                </a>
                                            ) : (
                                                <p className="mt-1 text-sm font-medium">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col justify-center rounded-3xl border border-line bg-white p-7 sm:p-9">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brown">
                            Have an opportunity?
                        </span>

                        <h3 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                            Let's build something meaningful together.
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-muted">
                            Whether you have a project idea, a job opportunity,
                            or simply want to discuss technology, I'd be happy
                            to hear from you.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-brown px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brown-dark"
                            >
                                <Mail size={17} />
                                Get in Touch
                                <ArrowUpRight size={16} />
                            </a>

                            <a
                                href="/CV_Eulogius Kurdeo Hesay.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-brown hover:text-brown"
                            >
                                <Download size={17} />
                                Download Resume
                            </a>
                        </div>

                        <p className="mt-5 text-xs leading-6 text-muted">
                            Click the button to contact me via email or download my resume.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
