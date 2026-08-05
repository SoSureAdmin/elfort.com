export default function Perspective() {
  return (
    <section
      id="perspective"
      className="border-t border-white/[0.08] py-28 md:py-36"
    >
      <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            Perspective
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-7xl lg:text-[88px]">
            Patterns.
            <br />
            Systems.
            <br />
            Decisions.
          </h2>

          <div className="mt-16 max-w-[780px] space-y-10">
            <div className="space-y-3 text-2xl leading-relaxed text-white/84 md:text-3xl">
              <p>Technology changes.</p>
              <p>People remain remarkably familiar.</p>
            </div>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              Over the years, I have worked with people who built companies,
              people who transformed them and people who invested in them.
            </p>

            <div className="space-y-2 text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              <p>Different industries.</p>
              <p>Different cultures.</p>
              <p>Different technologies.</p>
              <p className="pt-3 text-white/82">
                Remarkably similar human challenges.
              </p>
            </div>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              I have learned that trust is built long before technology creates
              value. That listening often leads to better decisions. And that
              bringing the right people together is often the most important
              contribution a leader can make.
            </p>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              I have never believed leadership is about having all the answers.
              It is about asking better questions, recognising patterns,
              creating momentum and building teams that are stronger than any
              individual.
            </p>

            <blockquote className="border-l border-blue-300/45 pl-7 text-2xl font-medium leading-relaxed text-white md:text-3xl">
              I only hire people who are better than myself.
            </blockquote>

            <p className="text-base leading-8 text-white/48 md:text-lg">
              A leadership principle I expressed in an interview with Børsen
              in the early 2000s — and one I still believe today.
            </p>

            <div className="pt-6 text-3xl font-semibold leading-relaxed tracking-[-0.025em] text-white md:text-4xl">
              Technology connects systems.
              <br />
              Trust connects people.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}