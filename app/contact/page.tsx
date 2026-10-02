import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/44">
            Conversation
          </div>
        </div>

        <div>
          <h1 className="max-w-[850px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
            Let&apos;s continue the conversation.
          </h1>

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
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/[0.14] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.instagram.com/dcecph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/[0.14] bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              Instagram
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}