export default function CurrentWork() {
  return (
    <section
      id="current-work"
      className="border-t border-white/[0.08] py-20 md:py-28"
    >
      <div className="max-w-[820px]">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
          What I&apos;m Building
        </div>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-white md:text-5xl">
          Today I divide my time between building, advising and writing.
        </h2>

        <p className="mt-6 max-w-[720px] text-lg leading-9 text-white/58">
          Each reflects lessons learned through more than four decades in
          enterprise technology, leadership and change.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            01 · Building
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            SoSure
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Years of observing enterprise technology eventually led to one
            conclusion: adoption always outpaces control.
          </p>

          <p className="mt-4 text-sm font-medium leading-7 text-white/82">
            SoSure is my response.
          </p>

          <a
            href="https://www.sosure.us"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            Visit SoSure
            <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            02 · Advising
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            Executive Advisory
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Working with founders, executives and organisations where
            experience, perspective and trusted conversations can create
            clarity and momentum.
          </p>
        </article>

        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            03 · Writing
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            What Experience Taught Me
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Exploring the patterns that repeat across technology, leadership,
            organisations and human behaviour.
          </p>
        </article>
      </div>
    </section>
  );
}