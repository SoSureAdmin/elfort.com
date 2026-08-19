export default function Roots() {
  return (
    <section className="border-t border-white/[0.08] py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
            Roots
          </div>
        </div>

        <div>
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#c9a962]">
            Halifax · Nova Scotia · Canada
          </div>

          <h2 className="mt-5 max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
            Part of the story
            <br />
            <span className="text-white/48">before mine began.</span>
          </h2>

          <div className="mt-10 max-w-[760px] space-y-5 text-lg leading-9 text-white/62">
            <p>
              In the early 1950s, my parents left Denmark as young adults and
built a life in Halifax, Nova Scotia.
            </p>

            <p>
              Decades later, I would make my own move across the Atlantic and
              build a life and business in Boston.
            </p>

            <p className="text-white/82">
              Different generation. Different circumstances. But perhaps some
              of the willingness to leave what was familiar and build somewhere
              new travelled with me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}