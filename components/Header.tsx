import Link from "next/link";
import { SITE } from "@/content/site";
import AppIcon from "./AppIcon";
import PlayStoreButton from "./PlayStoreButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-warm/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80"
          aria-label={`${SITE.name} 홈으로 이동`}
        >
          <AppIcon size={40} className="rounded-[22%] shadow-sm" />
          <span className="truncate text-base font-extrabold leading-tight text-brown sm:text-lg">
            {SITE.name}
          </span>
        </Link>

        <nav className="flex items-center" aria-label="주요 메뉴">
          <PlayStoreButton variant="header" />
        </nav>
      </div>
    </header>
  );
}
