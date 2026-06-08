import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyOperatorSection from "@/components/PrivacyOperatorSection";
import PrivacyScrollToTop from "@/components/PrivacyScrollToTop";
import PrivacyText from "@/components/PrivacyText";
import {
  PRIVACY_INTRO,
  PRIVACY_META,
  PRIVACY_SECTIONS,
  PRIVACY_TOC,
} from "@/content/privacy";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${SITE.name} 앱의 개인정보처리방침입니다.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyScrollToTop />
      <Header />
      <main className="privacy-page mx-auto max-w-[800px] px-4 py-10 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brown-muted transition-colors hover:text-green"
          aria-label="랜딩페이지로 돌아가기"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          홈으로 돌아가기
        </Link>

        <header className="mb-10 border-b border-border-warm pb-8">
          <h1 className="privacy-page-title text-brown">개인정보처리방침</h1>
          <div className="privacy-intro mt-4 space-y-4 text-brown-muted">
            {PRIVACY_INTRO.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 1 ? "privacy-intro-subline" : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="privacy-effective-badge mt-6">
            <span aria-hidden="true">📅</span>
            <span>시행일: {PRIVACY_META.effectiveDate}</span>
          </p>
        </header>

        <nav
          className="privacy-toc mb-10 rounded-2xl border border-border-warm bg-card p-6"
          aria-label="목차"
        >
          <h2 className="privacy-toc-heading">목차</h2>
          <ol className="privacy-toc-list">
            {PRIVACY_TOC.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="prose-privacy">
          {PRIVACY_SECTIONS.map(
            ({
              id,
              title,
              paragraphs,
              list,
              paragraphsAfter,
              detailItems,
            }) => (
              <section key={id} id={id} className="scroll-mt-24">
                {id === "operator" ? (
                  <PrivacyOperatorSection />
                ) : (
                  <>
                    <h2>{title}</h2>
                    {paragraphs?.map((text, index) => (
                      <p
                        key={text}
                        className={
                          (id === "intro" && index === 1) ||
                          (id === "changes" && index === 0)
                            ? "privacy-intro-subline"
                            : undefined
                        }
                      >
                        <PrivacyText text={text} />
                      </p>
                    ))}
                    {detailItems && (
                      <div className="privacy-detail-list">
                        {detailItems.map(({ title: itemTitle, description }) => (
                          <div key={itemTitle} className="privacy-detail-item">
                            <h3>{itemTitle}</h3>
                            <p>{description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {list && (
                      <ul>
                        {list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {paragraphsAfter?.map((text) => (
                      <p key={text}>
                        <PrivacyText text={text} />
                      </p>
                    ))}
                  </>
                )}
              </section>
            ),
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
