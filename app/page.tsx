
import Hero from "./components/Hero";
import CoreObservation from "./components/CoreObservation";
import ControlPlaneVisual from "./components/ControlPlaneVisual";
import Observations from "./components/Observations";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d17] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-[-18rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-slate-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1240px] flex-col px-6 md:px-10">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/[0.08] py-6">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-white"
          >
            Elfort
          </a>

          <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
            Copenhagen, Denmark
          </div>
        </header>

        {/* Hero */}
<Hero />

<CoreObservation />

<ControlPlaneVisual />

<Observations />

{/* Current work */}
        <section className="border-t border-white/[0.08] py-20 md:py-28">
          <div className="max-w-[820px]">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
              Current work
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
                Leading the development of the Enterprise AI Control Plane for
                visibility, governance and operational oversight.
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
                02
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                Executive Advisory
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/62">
                Selective involvement where strategy, commercial structure,
                leadership and execution require senior enterprise
                perspective.
              </p>
            </article>

            <article className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04]">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300/75">
                03
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                Enterprise Observations
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/62">
                Writing and dialogue on enterprise technology, AI governance,
                infrastructure, leadership and long-term organisational
                resilience.
              </p>
            </article>
          </div>
        </section>

        {/* Enterprise thinking */}
        <section className="border-t border-white/[0.08] py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
              Enterprise thinking
            </div>

            <div>
              <blockquote className="max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
                AI is becoming infrastructure. Governance must become
                operational.
              </blockquote>

              <div className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
                SEE. GOVERN. CONTROL.
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-white/[0.08] py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
                Contact
              </div>

              <h2 className="mt-5 max-w-[760px] text-3xl font-semibold leading-tight tracking-[-0.025em] text-white md:text-5xl">
                Strategic dialogue begins with a clear purpose.
              </h2>
            </div>

            <a
              href="mailto:daniel@elfort.com"
              className="inline-flex w-fit items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              daniel@elfort.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-white/[0.08] py-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Daniel Conn Elfort. All rights
            reserved.
          </div>

          <div>Elfort.com · Copenhagen</div>
        </footer>
      </div>
    </main>
  );
}