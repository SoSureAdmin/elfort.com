import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#080d17] text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}