import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100vh-73px)] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
    >
      <div>
        <div className="text-xs font-medium uppercase tracking-[0.24em] text-blue-300/80">
          Enterprise Perspective
        </div>

        <h1 className="mt-6 max-w-[850px] text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-7xl lg:text-[86px]">
          Daniel Conn
          <br />
          Elfort
        </h1>

        <p className="mt-7 text-lg font-medium leading-8 text-white/68 md:text-xl">
          Enterprise Technology Executive
          <br />
          Founder, SoSure
        </p>

        <h2 className="mt-10 max-w-[760px] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-6xl lg:text-[68px]">
  The Control Plane
  <br />
  for Enterprise AI
</h2>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-12 bg-blue-400/70" />

          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            SEE. GOVERN. CONTROL.
          </div>
        </div>

        <p className="mt-10 max-w-[680px] text-base leading-8 text-white/72 md:text-lg md:leading-9">
  I help enterprises see, govern and control AI before complexity becomes
  operational risk.
</p>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]">
    <div className="text-[11px] uppercase tracking-[0.25em] text-blue-300">
      Discover
    </div>

    <div className="mt-3 text-lg font-semibold">
      Every AI
    </div>

    <p className="mt-2 text-sm text-white/60">
      Complete visibility across enterprise AI.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]">
    <div className="text-[11px] uppercase tracking-[0.25em] text-blue-300">
      Classify
    </div>

    <div className="mt-3 text-lg font-semibold">
      Risk
    </div>

    <p className="mt-2 text-sm text-white/60">
      Understand what matters first.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]">
    <div className="text-[11px] uppercase tracking-[0.25em] text-blue-300">
      Govern
    </div>

    <div className="mt-3 text-lg font-semibold">
      Policy
    </div>

    <p className="mt-2 text-sm text-white/60">
      Align AI with enterprise governance.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]">
    <div className="text-[11px] uppercase tracking-[0.25em] text-blue-300">
      Control
    </div>

    <div className="mt-3 text-lg font-semibold">
      Continuous
    </div>

    <p className="mt-2 text-sm text-white/60">
      Executive visibility and oversight.
    </p>
  </div>

</div>

<div className="mt-10 flex gap-4">
  <a
    href="https://www.sosure.us"
    target="_blank"
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
  >
    Visit SoSure
  </a>

  <a
    href="mailto:daniel@elfort.com"
    className="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/5"
  >
    Connect
  </a>
</div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-[120px]" />

        <div
          className="relative w-full max-w-[460px] overflow-hidden rounded-[36px] border border-white/10 p-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)",
            boxShadow:
              "0 38px 100px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <Image
            src="/daniel-portrait.jpg"
            alt="Daniel Conn Elfort"
            width={900}
            height={1100}
            priority
            className="h-[560px] w-full rounded-[29px] object-cover object-center grayscale md:h-[650px]"
          />

          <div className="pointer-events-none absolute inset-2 rounded-[29px] bg-gradient-to-t from-[#080d17]/60 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
              Copenhagen
            </div>

            <div className="mt-2 text-sm font-medium text-white/80">
              Enterprise technology · Strategy · Governance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}