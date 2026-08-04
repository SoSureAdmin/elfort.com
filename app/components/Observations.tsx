const observations = [
  {
    number: "01",
    title: "Adoption always outpaces control.",
    text: "Technology scales faster than organisational oversight, accountability and governance.",
  },
  {
    number: "02",
    title: "Visibility precedes governance.",
    text: "Leadership cannot govern what the organisation cannot identify, understand and monitor.",
  },
  {
    number: "03",
    title: "Operational complexity grows quietly.",
    text: "The consequences often become visible only after systems, responsibilities and dependencies have already fragmented.",
  },
];

export default function Observations() {
  return (
    <section className="border-t border-white/[0.08] py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            Observations
          </div>

          <h2 className="mt-5 max-w-[420px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Patterns recognised through enterprise experience.
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {observations.map((observation) => (
            <article
              key={observation.number}
              className="grid gap-5 py-8 md:grid-cols-[70px_1fr] md:py-10"
            >
              <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300/70">
                {observation.number}
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white md:text-3xl">
                  {observation.title}
                </h3>

                <p className="mt-4 max-w-[680px] text-base leading-8 text-white/62">
                  {observation.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}