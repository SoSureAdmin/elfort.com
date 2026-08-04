export default function CurrentWork() {
  return (
    <section className="border-t border-white/[0.08] py-20 md:py-28">
      <div className="max-w-[820px]">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
          Current Work
        </div>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-white md:text-5xl">
          Applying four decades of enterprise experience where operational
          control matters most.
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">

        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            01
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            SoSure
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Building the operational control layer for Enterprise AI.
          </p>

          <a
            href="https://www.sosure.us"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            Visit SoSure
            <span>↗</span>
          </a>
        </article>

        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            02
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            Executive Advisory
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Helping organisations navigate strategy, governance and enterprise
            transformation.
          </p>
        </article>

        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            03
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            Enterprise Perspectives
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Essays and observations on enterprise architecture, AI governance,
            leadership and operational resilience.
          </p>
        </article>

      </div>
    </section>
  );
}