type PhoneMockupProps = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  featured?: boolean;
  priority?: boolean;
};

/**
 * 목업은 Next/Image 최적화 대신 원본 PNG를 직접 표시합니다.
 * (sizes가 180px대로 잡혀 레티나에서 흐려지는 문제 방지)
 */
export default function PhoneMockup({
  src,
  alt,
  label,
  width,
  height,
  featured = false,
  priority = false,
}: PhoneMockupProps) {
  return (
    <figure
      className={`phone-mockup-figure shrink-0 ${
        featured ? "phone-mockup-figure--center" : "phone-mockup-figure--side"
      }`}
    >
      <div className="phone-mockup-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="phone-mockup-photo-img"
        />
      </div>
      <figcaption className="phone-mockup-label">{label}</figcaption>
    </figure>
  );
}
