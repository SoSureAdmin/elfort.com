export default function OperatingModel() {
  const stages = [
    "DISCOVER",
    "UNDERSTAND",
    "CLASSIFY",
    "GOVERN",
    "CONTROL",
  ];

  return (
    <section className="py-36 border-t border-white/10">

      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <div className="uppercase tracking-[0.3em] text-blue-300 text-sm">
            Enterprise AI Operating Model
          </div>

          <h2 className="mt-6 text-5xl font-semibold">
            From visibility
            <br />
            to executive control.
          </h2>

          <p className="mt-8 text-white/60 max-w-2xl mx-auto leading-8">
            Enterprise AI cannot be governed through isolated tools.
            It requires an operational model that connects discovery,
            understanding, governance and continuous executive oversight.
          </p>

        </div>

        <div className="mt-24 flex items-center justify-center gap-6 flex-wrap">

          {stages.map((stage, index) => (

            <div
              key={stage}
              className="flex items-center"
            >

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-6 hover:border-blue-400/50 transition">

                <div className="text-xs uppercase tracking-[0.28em] text-blue-300">
                  Step {index + 1}
                </div>

                <div className="mt-3 text-xl font-semibold">
                  {stage}
                </div>

              </div>

              {index < stages.length - 1 && (

                <div className="mx-5 text-blue-400 text-2xl">
                  →
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}