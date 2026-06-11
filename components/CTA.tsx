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
      className="cta-card scroll-mt-24 rounded-[28px] border border-[#E8D8C8] bg-white/80 px-6 py-8 text-center shadow-sm sm:px-12 sm:py-11"
    >
      <h2
        id="cta-title"
        className="mb-[-4px] text-balance text-2xl font-bold text-ink sm:text-3xl"
      >
        {SITE.ctaTitle}
      </h2>

      <p className="mx-auto mt-4 max-w-[420px] text-base leading-relaxed text-ink-muted sm:text-lg">
        {SITE.ctaDescription.split("\n")[0]}
        <br />
        {SITE.ctaDescription.split("\n")[1]}
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
