import Image from "next/image";

const strengths = [
  "Enterprise perspective",
  "Global relationships",
  "Trust and execution",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[86vh] items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="max-w-[760px]">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
          Enterprise Perspective
        </div>

        <h1 className="mt-6 text-6xl font-semibold leading-[0.92] tracking-[-0.055em] text-white md:text-8xl lg:text-[96px]">
          Daniel Conn
          <br />
          Elfort
        </h1>

        <div className="mt-10 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white/92 md:text-5xl">
          Patterns.
          <br />
          Systems.
          <br />
          Decisions.
        </div>

        <div className="mt-10 max-w-[700px] border-l border-blue-300/45 pl-6">
          <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl">
            Technology connects systems.
            <br />
            Trust connects people.
          </p>
        </div>

        <p className="mt-10 max-w-[690px] text-lg leading-9 text-white/62">
          I have spent four decades working across technologies, organisations
          and cultures—building trust, connecting people and helping turn
          complex ideas into meaningful action.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {strengths.map((strength) => (
            <span
              key={strength}
              className="rounded-full border border-white/[0.1] bg-white/[0.025] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/58"
            >
              {strength}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#perspective"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#080d17] transition hover:bg-white/88"
          >
            Perspective
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href="#current-work"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
          >
            Current work
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:ml-auto">
        <div className="absolute -inset-8 rounded-[36px] bg-blue-500/[0.07] blur-3xl" />

        <div className="relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-white/[0.03] p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
            <Image
              src="/daniel.png"
              alt="Daniel Conn Elfort"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 470px"
              className="object-cover grayscale"
            />
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/42">
          <span>Copenhagen</span>
          <span>Europe · United States · Asia</span>
        </div>
      </div>
    </section>
  );
}