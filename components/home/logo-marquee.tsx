const CLIENTS = [
  "Vasterlund Group",
  "Corvid & Marsh",
  "Halberd Systems",
  "Brindlewood Capital",
  "Aeon Health Systems",
  "Marrow & Finch",
];

export function LogoMarquee() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-y border-line bg-paper-2 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="label mb-6 text-text-muted">Delegations delivered for</p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl whitespace-nowrap text-text-muted/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
