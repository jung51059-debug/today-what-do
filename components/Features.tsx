import { FEATURES, FEATURES_SECTION } from "@/content/site";

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-border-warm/60 bg-cream-dark py-20"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center">
          <h2
            id="features-title"
            className="text-2xl font-black text-brown sm:text-3xl"
          >
            {FEATURES_SECTION.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-brown-muted">
            {FEATURES_SECTION.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ emoji, title, description }) => (
            <li key={title} className="h-full">
              <article className="card-feature-hover flex h-full min-h-[180px] flex-col rounded-2xl border bg-card p-8 shadow-sm">
                <div
                  className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream text-lg"
                  aria-hidden="true"
                >
                  {emoji}
                </div>
                <h3 className="text-lg font-extrabold text-brown">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brown-muted">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
