export default function ControlPlane() {
  const items = [
    {
      title: "DISCOVER",
      text: "Gain complete visibility into enterprise AI."
    },
    {
      title: "UNDERSTAND",
      text: "Transform visibility into business context."
    },
    {
      title: "GOVERN",
      text: "Apply enterprise policies consistently."
    },
    {
      title: "CONTROL",
      text: "Continuously verify operational trust."
    }
  ];

  return (
    <section className="border-t border-white/10 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Enterprise AI Control Plane
          </p>

          <h2 className="mt-6 text-5xl font-semibold">
            Four disciplines.
            <br />
            One operating model.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40"
            >
              <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                {item.title}
              </div>

              <p className="mt-8 leading-8 text-white/70">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}