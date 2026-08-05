import Image from "next/image";

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

        <div className="mt-10 max-w-[690px] space-y-5 text-lg leading-9 text-white/62">
          <p>
            For more than four decades, I have worked with founders, engineers,
            executives, investors and global enterprises.
          </p>

          <p>Technology has always been part of the journey.</p>

          <p className="text-white/82">People have always been the reason.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:daniel@elfort.com"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#080d17] transition hover:bg-white/88"
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.sosure.us"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
          >
            Visit SoSure
            <span aria-hidden="true">↗</span>
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