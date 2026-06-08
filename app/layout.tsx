import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "오늘 뭐 하지? — 기분에 맞는 오늘의 활동 추천",
  description: SITE.description,
  keywords: [
    "오늘 뭐 하지",
    "활동 추천",
    "데이트 추천",
    "주말 뭐하지",
    "근처 장소",
    "랜덤 추천",
  ],
  authors: [{ name: SITE.operatorName }],
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "오늘 뭐 하지? — 기분에 맞는 오늘의 활동 추천",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: SITE.promoImage,
        width: 1672,
        height: 941,
        alt: `${SITE.name} 앱 소개`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "오늘 뭐 하지? — 기분에 맞는 오늘의 활동 추천",
    description: SITE.description,
    images: [SITE.promoImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
