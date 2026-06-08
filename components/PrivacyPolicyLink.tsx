"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PrivacyPolicyLinkProps = {
  className?: string;
};

export default function PrivacyPolicyLink({ className }: PrivacyPolicyLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/privacy"
      scroll
      className={className}
      onClick={() => {
        if (pathname === "/privacy") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      개인정보처리방침
    </Link>
  );
}
