"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/perspective", label: "Perspective" },
  { href: "/roots", label: "Roots" },
  { href: "/observations", label: "Observations" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/[0.08] py-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Elfort — Home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Image
            src="/brand/monogram-gold.svg"
            alt="Elfort"
            width={50}
            height={50}
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-7"
        >
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`border-b pb-1 text-sm font-medium transition-colors ${
                  active
                    ? "border-blue-300 text-white"
                    : "border-transparent text-white/55 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}