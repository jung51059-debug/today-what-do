"use client";

import { useEffect } from "react";

/** 개인정보처리방침 페이지 진입 시 최상단으로 스크롤 */
export default function PrivacyScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
