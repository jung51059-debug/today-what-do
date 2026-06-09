import Image from "next/image";

type GooglePlayBadgeProps = {
  className?: string;
};

/** Google Play 공식 "Google Play에서 다운로드" 배지 */
export default function GooglePlayBadge({ className = "" }: GooglePlayBadgeProps) {
  return (
    <Image
      src="/google-play-badge-ko.png"
      alt="Google Play에서 다운로드"
      width={646}
      height={250}
      className={`h-[60px] w-auto ${className}`}
    />
  );
}
