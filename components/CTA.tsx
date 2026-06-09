import { CTA_HIGHLIGHTS, SITE } from "@/content/site";
import PlayStoreButton from "./PlayStoreButton";

type CTAProps = {
  /** 앱 미리보기 섹션 안에 붙일 때 */
  embedded?: boolean;
};

export default function CTA({ embedded = false }: CTAProps) {
  const card = (
    <div
      id="download"
      className="scroll-mt-24 rounded-[28px] border border-[#E8D8C8] bg-white/80 px-8 py-10 text-center shadow-sm"
    >
      <h2
        id="cta-title"
        className="text-2xl font-black text-[#2B211C]"
      >
        {SITE.ctaTitle}
      </h2>

      <p className="mt-3 text-sm leading-6 text-[#8A7468]">
        {SITE.ctaDescription}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {CTA_HIGHLIGHTS.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#DDE8DA] bg-[#F7FCF8] px-4 py-2 text-sm font-bold text-[#5E8F73]"
          >
            ✓ {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <PlayStoreButton />
      </div>
    </div>
  );

  const wrapperClass = embedded
    ? "mx-auto max-w-3xl text-center"
    : "mx-auto max-w-3xl px-5 py-16 text-center";

  return (
    <section className={wrapperClass} aria-labelledby="cta-title">
      {card}
    </section>
  );
}
