import Link from "next/link";
import { SITE } from "@/content/site";
import PrivacyPolicyLink from "./PrivacyPolicyLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-warm/70 bg-cream-dark py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-brown-muted sm:px-8 md:flex-row md:items-center">
        <p className="text-center text-xs sm:text-sm md:text-left">
          © {year} {SITE.name}. All rights reserved.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          aria-label="푸터 링크"
        >
          <Link
            href="/#features"
            className="transition-colors hover:text-brown"
          >
            앱 기능
          </Link>
          <PrivacyPolicyLink className="transition-colors hover:text-brown" />
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="transition-colors hover:text-brown"
            aria-label={`이메일 문의: ${SITE.contactEmail}`}
          >
            문의하기
          </a>
        </nav>
      </div>
    </footer>
  );
}
