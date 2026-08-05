export default function Perspective() {
  return (
    <section
      id="perspective"
      className="border-t border-white/[0.08] py-28 md:py-36"
    >
      <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            What Experience Taught Me
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
              transformed organisations and invested in new ideas.
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
              Experience has taught me that trust is built long before
              technology creates value.
            </p>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              That listening usually leads to better decisions.
            </p>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              That great organisations are built by exceptional people.
            </p>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              And that leadership is rarely about having all the answers.
            </p>

            <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl">
              It is about asking better questions.
            </p>

            <blockquote className="border-l border-blue-300/45 pl-7 text-2xl font-medium leading-relaxed text-white md:text-3xl">
              I only hire people who are better than myself.
            </blockquote>

            <p className="text-base leading-8 text-white/48 md:text-lg">
              A leadership principle I expressed in an interview with Børsen
              in the early 2000s — and one I still believe today.
            </p>

            <p className="text-lg leading-9 text-white/62 md:text-xl md:leading-10">
              Some opportunities take months. Others take years. I have never
              been in a hurry to build something that matters.
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