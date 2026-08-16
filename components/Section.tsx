export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 flex items-baseline gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {title}
          </h2>
          <span className="font-mono text-sm text-accent">#</span>
        </div>
        {subtitle ? (
          <p className="mb-8 max-w-2xl text-muted">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}