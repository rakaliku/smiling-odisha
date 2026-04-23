interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 mb-3 ${align === "center" ? "" : ""}`}>
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-primary">{eyebrow}</span>
        <span className="h-px w-8 bg-primary" />
      </div>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
