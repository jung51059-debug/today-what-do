"use client";

import { SITE } from "@/content/site";
import GooglePlayBadge from "./GooglePlayBadge";

type PlayStoreButtonProps = {
  variant?: "badge" | "header";
  className?: string;
};

function scrollToDownloadSection(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const target = document.getElementById("download");
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export default function PlayStoreButton({
  variant = "badge",
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
        {...(isComingSoon && { onClick: scrollToDownloadSection })}
        className={`rounded-full bg-[#8eb39b] px-[18px] py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] ${className}`}
        aria-label={
          isComingSoon ? "다운로드 섹션으로 이동" : "Google Play에서 다운로드"
        }
      >
        {SITE.headerDownloadLabel}
      </a>
    );
  }

  return (
    <a
      href={isComingSoon ? "#download" : SITE.playStoreUrl}
      {...(!isComingSoon && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      {...(isComingSoon && { onClick: scrollToDownloadSection })}
      className={`inline-block transition-opacity hover:opacity-[0.85] ${className}`}
      aria-label="Google Play에서 다운로드"
    >
      <GooglePlayBadge />
    </a>
  );
}
