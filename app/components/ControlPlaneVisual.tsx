"use client";

import { useState } from "react";

const stages = [
  {
    id: "discover",
    title: "DISCOVER",
    description: "Establish visibility across the enterprise AI estate.",
  },
  {
    id: "understand",
    title: "UNDERSTAND",
    description: "Add ownership, business context and operational meaning.",
  },
  {
    id: "classify",
    title: "CLASSIFY",
    description: "Prioritize AI by risk, criticality and regulatory exposure.",
  },
  {
    id: "govern",
    title: "GOVERN",
    description: "Apply policy, accountability and human oversight.",
  },
  {
    id: "control",
    title: "CONTROL",
    description: "Continuously verify status, exceptions and executive trust.",
  },
];

export default function ControlPlaneVisual() {
  const [activeStage, setActiveStage] = useState("discover");

  const active =
    stages.find((stage) => stage.id === activeStage) ?? stages[0];

  return (
    <section className="border-t border-white/[0.08] py-24 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[760px]">
          <div className="text-xs font-medium uppercase tracking-[0.24em] text-blue-300/80">
            Reference model
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-6xl">
            The Enterprise AI
            <br />
            Control Plane
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.14),transparent_46%)]" />

            <svg
              viewBox="0 0 760 720"
              className="relative h-auto w-full"
              role="img"
              aria-label="Enterprise AI Control Plane model"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.18" />
                </linearGradient>
              </defs>

              <text
                x="380"
                y="46"
                textAnchor="middle"
                fill="rgba(255,255,255,0.52)"
                fontSize="14"
                letterSpacing="4"
              >
                ENTERPRISE AI ESTATE
              </text>

              <g fill="rgba(255,255,255,0.62)" fontSize="13">
                <text x="90" y="92">MODELS</text>
                <text x="260" y="92">AGENTS</text>
                <text x="430" y="92">COPILOTS</text>
                <text x="600" y="92">APIs</text>
              </g>

              <line
                x1="380"
                y1="112"
                x2="380"
                y2="650"
                stroke="url(#lineGradient)"
                strokeWidth="3"
              />

              {stages.map((stage, index) => {
                const y = 145 + index * 104;
                const isActive = stage.id === activeStage;

                return (
                  <g
                    key={stage.id}
                    onMouseEnter={() => setActiveStage(stage.id)}
                    onFocus={() => setActiveStage(stage.id)}
                    tabIndex={0}
                    className="cursor-pointer outline-none"
                  >
                    <rect
                      x="180"
                      y={y}
                      width="400"
                      height="74"
                      rx="22"
                      fill={
                        isActive
                          ? "rgba(37,99,235,0.22)"
                          : "rgba(255,255,255,0.035)"
                      }
                      stroke={
                        isActive
                          ? "rgba(96,165,250,0.95)"
                          : "rgba(255,255,255,0.12)"
                      }
                      strokeWidth={isActive ? 2 : 1}
                    />

                    <circle
                      cx="220"
                      cy={y + 37}
                      r="6"
                      fill={isActive ? "#93c5fd" : "rgba(255,255,255,0.28)"}
                    />

                    <text
                      x="252"
                      y={y + 44}
                      fill={isActive ? "#ffffff" : "rgba(255,255,255,0.76)"}
                      fontSize="18"
                      fontWeight="600"
                      letterSpacing="2.4"
                    >
                      {stage.title}
                    </text>
                  </g>
                );
              })}

              <text
                x="380"
                y="697"
                textAnchor="middle"
                fill="rgba(147,197,253,0.9)"
                fontSize="13"
                letterSpacing="3"
              >
                EXECUTIVE VISIBILITY
              </text>
            </svg>
          </div>

          <aside className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-8 md:p-10">
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300/75">
              Active discipline
            </div>

            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.025em] text-white">
              {active.title}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/66">
              {active.description}
            </p>

            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/38">
                Operating principle
              </div>

              <p className="mt-4 text-lg leading-8 text-white/82">
                You cannot govern what you cannot see.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}