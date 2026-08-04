const principles = [
  {
    number: "01",
    title: "Technology changes. Organisations change slowly.",
    text: "Enterprise transformation rarely fails because of technology. It fails where governance, accountability and operational reality drift apart.",
  },
  {
    number: "02",
    title: "Every transformation creates new blind spots.",
    text: "AI does not eliminate complexity. It redistributes it across people, systems, data and decision-making.",
  },
  {
    number: "03",
    title: "Visibility comes before control.",
    text: "You cannot govern what you cannot see. Discovery is the first responsibility of leadership.",
  },
  {
    number: "04",
    title: "Architecture has become a leadership discipline.",
    text: "Enterprise architecture is no longer only technical. It defines how organisations operate, scale and remain resilient.",
  },
];
export default function EnterprisePrinciples() {
  return (
    <section className="border-t border-white/[0.08] py-28">
      <div className="mb-20 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
          Enterprise Principles
        </div>

        <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
          Experience becomes
          <br />
          perspective.
        </h2>
      </div>

      <div className="space-y-20">
        {principles.map((item) => (
          <div
            key={item.number}
            className="border-l border-white/10 pl-10"
          >
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300/70">
              {item.number}
            </div>

            <h3 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              {item.title}
            </h3>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}