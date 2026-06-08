import { HOW_IT_WORKS } from "@/content/site";

export default function HowItWorks() {
  return (
    <section
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      aria-labelledby="how-it-works-title"
    >
      <div className="text-center">
        <h2
          id="how-it-works-title"
          className="text-2xl font-black text-brown sm:text-3xl"
        >
          이용 방법
        </h2>
        <p className="mt-3 text-brown-muted">
          3단계로 오늘의 활동을 찾아보세요.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-3">
        {HOW_IT_WORKS.map(({ step, title, description }) => (
          <li
            key={step}
            className="rounded-3xl border border-border-warm bg-card p-7 shadow-sm"
          >
            <div
              className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-green font-black text-white"
              aria-hidden="true"
            >
              {step}
            </div>
            <h3 className="text-lg font-extrabold text-brown">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-brown-muted">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
