import { FAQ_ITEMS } from "@/content/site";

export default function FAQ() {
  return (
    <section
      className="border-t border-border-warm/60 bg-cream-dark py-20"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <h2 id="faq-title" className="text-2xl font-black text-brown sm:text-3xl">
            자주 묻는 질문
          </h2>
          <p className="mt-3 text-brown-muted">
            궁금한 점을 미리 확인해보세요.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details
              key={question}
              className="rounded-xl border border-border-warm bg-card p-5 shadow-sm"
            >
              <summary className="cursor-pointer font-extrabold text-brown marker:content-none list-none [&::-webkit-details-marker]:hidden">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-brown-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
