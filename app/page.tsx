import Image from "next/image";
import Hero from "./components/Hero";
import Perspective from "./components/Perspective";
import Observations from "./components/Observations";
import CurrentFocus from "./components/CurrentFocus";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#080d17] text-white"
    >
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
            aria-label="Back to top"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/brand/monogram-gold.svg"
              alt="Elfort"
              width={50}
              height={50}
              priority
            />
          </a>

          <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
            Copenhagen, Denmark
          </div>
        </header>

        {/* Daniel */}
        <Hero />

        {/* What experience taught me */}
        <Perspective />

        {/* Observations */}
        <Observations />

        {/* Building, advising and writing */}
        <CurrentFocus />

        {/* Conversation */}
        <section
          id="contact"
          className="border-t border-white/[0.08] py-24 md:py-32"
        >
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
                Conversation
              </div>
            </div>

            <div>
              <h2 className="max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
                Let&apos;s continue the conversation.
              </h2>

              <div className="mt-10 max-w-[720px] space-y-5 text-lg leading-9 text-white/62">
                <p>
                  The most valuable opportunities in my career rarely started
                  with a presentation.
                </p>

                <p className="text-white/82">
                  They started with a conversation.
                </p>

                <p>
                  If something you have read here resonates with you, I&apos;d
                  be pleased to continue the conversation.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:daniel@elfort.com"
                  className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#080d17] transition hover:bg-white/88"
                >
                  Email Daniel
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/elfort"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/[0.14] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
                >
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Closing thought */}
        <section className="border-t border-white/[0.08] py-24 md:py-32">
          <blockquote className="max-w-[980px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
            Experience tells you what happened.
            <br />
            <span className="text-white/48">
              Perspective helps you decide what comes next.
            </span>
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] py-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <a
              href="#top"
              aria-label="Back to top"
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/brand/monogram-gold.svg"
                alt="Elfort"
                width={42}
                height={42}
              />
            </a>

            <div className="text-sm font-medium text-white">
              Daniel Conn Elfort
            </div>

            <div className="text-sm text-white/50">
              Technology connects systems.
              <br />
              Trust connects people.
            </div>

            <div className="pt-2 text-xs uppercase tracking-[0.18em] text-white/35">
              Copenhagen, Denmark
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}