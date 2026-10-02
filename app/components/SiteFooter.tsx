import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] py-12">
      <div className="flex flex-col items-center text-center">
       
        <div className="mt-8 max-w-[560px] text-sm leading-6 text-white/50">
          The Elfort monogram comes from my father&apos;s handwriting — a small
          piece of family history, and a reminder of where I come from and of the
          many things he taught me.
        </div>

        <div className="mt-4">
          <Image
            src="/brand/poul-e-signature-gold.png"
            alt="Poul E."
            width={176}
            height={65}
          />
        </div>

        <div className="mt-7 text-sm text-white/50">
          Technology connects systems.
          <br />
          Trust connects people.
        </div>

        <div className="pt-5 text-xs uppercase tracking-[0.18em] text-white/35">
          Copenhagen, Denmark
        </div>
      </div>
    </footer>
  );
}