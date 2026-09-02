export default function CurrentFocus() {
  return (
    <section
      id="current-work"
      className="border-t border-white/[0.08] py-20 md:py-28"
    >
      <div className="max-w-[860px]">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
          Current Focus
        </div>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-white md:text-5xl">
          Today, my focus spans enterprise AI, international market development,
          modular building systems and initiatives built around lived experience.
        </h2>

        <p className="mt-6 max-w-[720px] text-lg leading-9 text-white/58">
          Different fields, but connected by the same principles: understanding
          the context, finding what matters and bringing the right people
          together to build something useful.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {/* SoSure */}
        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            01 · Building
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            SoSure
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Years of observing enterprise technology led to one recurring
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

        {/* FinnFlyer */}
        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            02 · Market Development
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            FinnFlyer
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Helping introduce premium Nordic boating craftsmanship to new
            markets through strategic partnerships, commercial development and
            long-term relationships.
          </p>

          <p className="mt-4 text-sm font-medium leading-7 text-white/82">
            Building markets begins with building trust.
          </p>

          <a
            href="https://finnflyer.fi/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            Visit FinnFlyer
            <span aria-hidden="true">↗</span>
          </a>
        </article>

        {/* 4D-CUBE */}
        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            03 · Building
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            4D-CUBE
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Exploring how modular thinking, standardized connections and
            intelligent construction systems can create simpler ways to build,
            adapt and expand.
          </p>

          <p className="mt-4 text-sm font-medium leading-7 text-white/82">
  Currently in development.
</p>

<div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
  4D-CUBE — Website coming soon
  <span aria-hidden="true">→</span>
</div>
        </article>

        {/* Erfaring Indefra */}
        <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
            04 · Social Impact
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            Erfaring Indefra
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            Turning lived experience into practical insight to help improve
            how professionals and institutions understand situations from the
            inside.
          </p>

          <p className="mt-4 text-sm font-medium leading-7 text-white/82">
            Better understanding can lead to better first responses.
          </p>
          <a
  href="https://www.erfaringindefra.com/"
  target="_blank"
  rel="noreferrer"
  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
>
  Visit Erfaring Indefra
  <span aria-hidden="true">↗</span>
</a>
        </article>
      </div>
    </section>
  );
}