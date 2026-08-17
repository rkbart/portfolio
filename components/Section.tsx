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
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            <span className="mr-3 text-red">✳</span>
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}