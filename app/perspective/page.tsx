import type { Metadata } from "next";
import Perspective from "../components/Perspective";

export const metadata: Metadata = {
  title: "Perspective",
};

export default function PerspectivePage() {
  return (
    <>
      <Perspective />

      <section className="border-t border-white/[0.08] py-24 md:py-32">
        <blockquote className="max-w-[980px] text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
          Experience tells you what happened.
          <br />
          <span className="text-white/48">
            Perspective helps you decide what comes next.
          </span>
        </blockquote>
      </section>
    </>
  );
}