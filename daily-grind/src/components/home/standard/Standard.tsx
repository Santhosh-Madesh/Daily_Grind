
const standards = [
  {
    number: '01',
    category: 'CRAFT',
    title: 'Freshly Roasted',
    description:
      'Coffee roasted with freshness and flavour in mind. Calibrated by hand to unlock deep aromatic sweetness.',
    footer: 'ROASTED WEEKLY IN SMALL BATCHES',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 3c-1 3-5 5-5 11a5 5 0 0 0 10 0c0-2-1-4-3-6 0 3-2 4-2 4s0-5 0-9Z" />
        <path d="M10 16a2 2 0 1 0 4 0c0-1-1-2-2-3-1 1-2 2-2 3Z" />
      </svg>
    ),
  },
  {
    number: '02',
    category: 'ORIGIN',
    title: 'Carefully Selected',
    description:
      'Coffee beans selected for their quality and distinctive flavour profiles from cooperative, single-origin farms.',
    footer: 'DIRECT TRADE RELATIONSHIP SOURCED',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 21V11" />
        <path d="M12 13C5 13 4 8 4 4c5 0 8 2 8 9Z" />
        <path d="M12 16c0-5 3-8 8-8 0 5-2 8-8 8Z" />
      </svg>
    ),
  },
  {
    number: '03',
    category: 'RITUAL',
    title: 'Everyday Worthy',
    description:
      'Specialty coffee designed to make a better everyday experience accessible — forgiving to brew, consistently delicious.',
    footer: 'OPTIMISED FOR FILTER & ESPRESSO',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
        <path d="M17 10h2a2 2 0 0 1 0 4h-2" />
        <path d="M3 21h16" />
        <path d="M7 4v2M11 3v3M15 4v2" />
      </svg>
    ),
  },
]

function StandardSection() {
  return (
    <section className="w-full bg-[var(--dg-neutral)]">
      <div className="mx-auto w-full max-w-[var(--dg-container-max)] px-[var(--dg-margin-mobile)] py-14 lg:px-[var(--dg-margin)] lg:py-24">

        {/* Section heading */}
        <div className="mb-8 lg:mb-12 lg:text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--dg-secondary)]">
            The Daily Grind Standard
          </p>

          <h2 className="max-w-3xl font-[var(--font-headline)] text-4xl font-semibold leading-tight text-[var(--dg-primary)] lg:mx-auto lg:text-5xl">
            Coffee roasted for everyday rituals.
          </h2>
        </div>

        {/* Standard cards */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {standards.map((standard) => (
            <article
              key={standard.number}
              className="
                flex flex-col rounded-[var(--dg-radius-lg)]
                bg-[var(--dg-white)] p-6
                shadow-sm
                transition-[transform,box-shadow]
                duration-250 ease-out
                [@media(hover:hover)]:hover:-translate-y-1
                [@media(hover:hover)]:hover:scale-[1.02]
                [@media(hover:hover)]:hover:shadow-[var(--dg-shadow-elevated)]
                motion-reduce:transform-none
                motion-reduce:transition-none
                lg:min-h-[385px] lg:p-10
              "
            >
              {/* Card header */}
              <div className="mb-5 flex items-center justify-between lg:mb-5 lg:flex-col lg:items-start lg:gap-4">
                {/* Category */}
                <p className="order-1 text-sm font-semibold uppercase tracking-wide text-[var(--dg-secondary)]">
                  {standard.number} / {standard.category}
                </p>

                {/* Icon */}
                <div className="order-2 flex h-10 w-10 items-center justify-center rounded-[var(--dg-radius)] bg-[var(--dg-neutral)] text-[var(--dg-primary)] lg:order-1">
                  {standard.icon}
                </div>
              </div>

              {/* Card content */}
              <div>
                <h3 className="font-[var(--font-headline)] text-2xl font-semibold leading-tight text-[var(--dg-primary)] lg:text-[26px]">
                  {standard.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.8] text-[var(--dg-text-secondary)] lg:text-base lg:leading-[1.65]">
                  {standard.description}
                </p>
              </div>

              {/* Desktop footer */}
              <div className="mt-auto hidden pt-8 lg:block">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--dg-secondary)]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--dg-secondary)]" />
                  {standard.footer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StandardSection
