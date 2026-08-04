export default function Perspective() {
  return (
    <section className="border-t border-white/[0.08] py-36 md:py-44">
      <div className="grid gap-20 lg:grid-cols-[0.5fr_1.5fr]">

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.30em] text-blue-300">
            Perspective
          </div>
        </div>

        <div>

          <h2 className="text-6xl font-semibold leading-none tracking-[-0.05em] md:text-8xl">
            Patterns.
            <br /><br />
            Systems.
            <br /><br />
            Decisions.
          </h2>

          <div className="mt-24 max-w-[760px] space-y-12">

            <p className="text-2xl leading-[1.8] text-white/75">
              Every technology wave promises transformation.
            </p>

            <p className="text-2xl leading-[1.8] text-white/75">
              Every wave introduces new complexity.
            </p>

            <p className="pt-10 text-xl leading-10 text-white/58">
              Across enterprise software,
              telecommunications,
              cybersecurity,
              infrastructure and artificial intelligence,
              I have observed the same organisational
              challenges reappear in different forms.
            </p>

            <p className="pt-10 text-3xl font-medium leading-relaxed text-white">
              The technology changes.
              <br />
              The enterprise patterns rarely do.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}