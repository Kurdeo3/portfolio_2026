type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    centered?: boolean;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    centered = false,
}: SectionHeadingProps) {
return (
    <div className={centered ? "mx-auto mb-12 w-full text-center" : "mb-10 w-full"}>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brown sm:text-sm">
        {eyebrow}
    </p>

    <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
        {title}
    </h2>

    {description && (
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
        {description}
        </p>
    )}
    </div>
);
}