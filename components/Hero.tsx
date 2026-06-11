import Image from "next/image";
import { SITE } from "@/content/site";
import AppIcon from "./AppIcon";

export default function Hero() {
  return (
    <section
      className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14"
      aria-labelledby="hero-title"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
        {/* 왼쪽: 앱 소개 */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <AppIcon size={120} className="rounded-[22%] shadow-md" />
          </div>

          <p className="text-sm font-medium text-brown-muted">{SITE.label}</p>

          <h1
            id="hero-title"
            className="mt-2 text-[34px] font-bold leading-tight tracking-tight text-ink sm:text-[40px] lg:text-[54px]"
          >
            {SITE.name}
          </h1>

          <p className="mx-auto mt-4 max-w-[420px] whitespace-pre-line text-[19px] leading-[1.7] text-ink-muted sm:text-[21px] lg:mx-0">
            {SITE.heroDescription}
          </p>
        </div>

        {/* 오른쪽: 홍보 이미지 — 비율 고정으로 줌 시에도 안정적 */}
        <div className="hero-promo-card relative aspect-[1672/941] w-full overflow-hidden rounded-[2rem] border border-border-warm bg-card shadow-lg sm:rounded-[2.5rem] lg:max-w-[900px] lg:justify-self-end">
          <Image
            src={SITE.promoImage}
            alt="오늘 뭐 하지? 앱 소개 — 상황 맞춤 추천, 오늘의 활동, 근처 장소"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 860px"
          />
        </div>
      </div>
    </section>
  );
}
