import Image from "next/image";

/** Google Play 공식 배지 원본 비율 (646×250) */
const GOOGLE_PLAY_BADGE_WIDTH = 646;
const GOOGLE_PLAY_BADGE_HEIGHT = 250;

type GooglePlayBadgeProps = {
  size?: "default" | "large";
  className?: string;
};

/** Google Play 공식 "Google Play에서 다운로드" 배지 */
export default function GooglePlayBadge({
  size = "default",
  className = "",
}: GooglePlayBadgeProps) {
  const badgeSizeClass =
    size === "large" ? "h-auto w-[170px]" : "h-[50px] w-auto";

  return (
    <Image
      src="/google-play-badge-ko.png"
      alt="Google Play에서 다운로드"
      width={GOOGLE_PLAY_BADGE_WIDTH}
      height={GOOGLE_PLAY_BADGE_HEIGHT}
      className={`${badgeSizeClass} ${className}`}
    />
  );
}
