import { APP_PREVIEW } from "@/content/site";
import CTA from "./CTA";
import PhoneMockup from "./PhoneMockup";

export default function AppPreview() {
  return (
    <section
      className="bg-cream py-16 sm:py-20"
      aria-labelledby="app-preview-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <h2
            id="app-preview-title"
            className="text-2xl font-black text-brown sm:text-3xl"
          >
            {APP_PREVIEW.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-brown-muted">
            {APP_PREVIEW.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-[#E8D8C8] bg-white px-[18px] py-2 text-[14px] font-bold leading-none text-[#6B5A4E] shadow-sm">
              ① 상황 선택
            </span>

            <span className="text-[14px] font-bold text-[#B7A79A]">→</span>

            <span className="rounded-full border border-[#E8D8C8] bg-white px-[18px] py-2 text-[14px] font-bold leading-none text-[#6B5A4E] shadow-sm">
              ② 오늘의 추천
            </span>

            <span className="text-[14px] font-bold text-[#B7A79A]">→</span>

            <span className="rounded-full border border-[#E8D8C8] bg-white px-[18px] py-2 text-[14px] font-bold leading-none text-[#6B5A4E] shadow-sm">
              ③ 근처 장소 확인
            </span>
          </div>

          <p className="mt-3 text-[13px] font-normal text-[#8A7468]">
            오늘 뭐 할지 고민될 때, 3단계로 빠르게 결정해보세요.
          </p>
        </div>

        <div className="phone-showcase-frame mt-8">
          <div className="phone-showcase-row flex flex-row flex-nowrap items-end justify-center gap-6 overflow-x-auto sm:gap-12 lg:gap-16">
            {APP_PREVIEW.screens.map((screen, index) => (
              <PhoneMockup
                key={screen.label}
                src={screen.src}
                alt={screen.alt}
                label={screen.label}
                width={screen.width}
                height={screen.height}
                featured={index === 1}
                priority={index === 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <CTA embedded />
        </div>
      </div>
    </section>
  );
}
