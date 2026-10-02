export default function Roots() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
          Roots
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <svg
            viewBox="0 0 64 32"
            role="img"
            aria-label="Canadian flag"
            className="h-8 w-16 shrink-0"
          >
            <rect width="64" height="32" fill="#fff" />
            <rect width="16" height="32" fill="#d80621" />
            <rect x="48" width="16" height="32" fill="#d80621" />
            <path
              fill="#d80621"
              d="M32 4
                 34.3 9.2 36.5 8
                 35.5 15 39.5 12
                 40.2 14.5 44 14
                 42.5 18 44 19
                 36 24 36.8 26
                 32.8 25.4 32.8 29
                 31.2 29 31.2 25.4
                 27.2 26 28 24
                 20 19 21.5 18
                 20 14 23.8 14.5
                 24.5 12 28.5 15
                 27.5 8 29.7 9.2 Z"
            />
          </svg>

          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#c9a962]">
            Halifax · Nova Scotia · Canada
          </div>
        </div>

        <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
          Part of the story
          <br />
          <span className="text-white/48">before mine began.</span>
        </h1>

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
    </section>
  );
}