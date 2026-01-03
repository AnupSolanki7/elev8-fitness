export default function SectionWrapper({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">{title}</h2>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
            {subtitle}
          </p>
        )}

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
