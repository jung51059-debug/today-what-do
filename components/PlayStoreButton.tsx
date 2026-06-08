import { SITE } from "@/content/site";
import GooglePlayIcon from "./GooglePlayIcon";

type PlayStoreButtonProps = {
  variant?: "pill" | "header";
  className?: string;
};

const pillClass =
  "inline-flex min-h-[60px] items-center gap-3 rounded-full bg-green px-8 text-base font-bold text-white shadow-md transition-colors hover:bg-green-light";

export default function PlayStoreButton({
  variant = "pill",
  className = "",
}: PlayStoreButtonProps) {
  const isComingSoon =
    SITE.playStoreUrl === "#" || SITE.playStoreUrl === "coming-soon";

  if (variant === "header") {
    return (
      <a
        href={isComingSoon ? "#download" : SITE.playStoreUrl}
        {...(!isComingSoon && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className={`rounded-full bg-green px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-light ${className}`}
        aria-label={
          isComingSoon ? "다운로드 섹션으로 이동" : "Google Play에서 다운로드"
        }
      >
        {SITE.headerDownloadLabel}
      </a>
    );
  }

  if (isComingSoon) {
    return (
      <a
        href="#download"
        className={`${pillClass} ${className}`}
        aria-label="Google Play에서 받기"
      >
        <GooglePlayIcon />
        {SITE.playStoreButtonLabel}
      </a>
    );
  }

  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${pillClass} ${className}`}
      aria-label="Google Play에서 다운로드"
    >
      <GooglePlayIcon />
      {SITE.playStoreButtonLabel}
    </a>
  );
}
