
import { Link } from 'react-router'

const brewingMetrics = [
  {
    value: '15–20g',
    desktopLabel: 'Recommended dose',
    mobileLabel: 'Dose',
  },
  {
    value: '1:16',
    desktopLabel: 'Water brew ratio',
    mobileLabel: 'Ratio',
  },
  {
    value: '93°C',
    desktopLabel: 'Optimal temperature',
    mobileLabel: 'Temp',
  },
]

function PhilosophySection() {
  return (
    <section className="w-full bg-[var(--dg-neutral)] px-[var(--dg-margin-mobile)] py-8 lg:px-[var(--dg-margin)] lg:py-12">
      <div className="mx-auto max-w-[var(--dg-container-max)] rounded-[var(--dg-radius-lg)] bg-[var(--dg-primary)] p-5 shadow-sm lg:flex lg:items-center lg:gap-10 lg:bg-[var(--dg-white)] lg:px-8 lg:py-8">

        {/* Desktop philosophy content */}
        <div className="hidden flex lg:block">
          <p className="mb-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-widest text-[var(--dg-secondary)]">
            Brewing Philosophy
          </p>

          <h2 className="mb-2 font-[var(--font-headline)] text-3xl font-semibold leading-tight text-[var(--dg-text-primary)]">
            Small Batches, Uncompromising Precision.
          </h2>

          <p className="font-[var(--font-body)] text-sm leading-relaxed text-[var(--dg-text-secondary)]">
            We roast on a modified cast-iron drum roaster, tracking heat
            profiles manually every thirty seconds. This hands-on artisanal
            technique allows us to adapt in real time to fluctuating ambient
            humidity and harvest moisture contents, preserving peak aromatic
            complexity in each cup.
          </p>

           {/* Brewing metrics */}
        <div className="my-4 grid grid-cols-3 border-0 py-0 lg:my-0 lg:mt-5 lg:w-full lg:divide-x lg:divide-[var(--dg-border)]">
          {brewingMetrics.map((metric) => (
            <div
              key={metric.value}
              className="flex flex-col gap-0.5 px-2 first:pl-0 last:pr-0 lg:px-5 lg:first:pl-0"
            >
              <span className="font-[var(--font-headline)] text-lg font-semibold text-[var(--dg-text-inverse)] lg:text-[var(--dg-text-primary)]">
                {metric.value}
              </span>

              <span className="font-[var(--font-body)] text-[10px] text-[var(--dg-tertiary)] lg:text-xs lg:text-[var(--dg-text-secondary)]">
                <span className="lg:hidden">{metric.mobileLabel}</span>
                <span className="hidden lg:inline">
                  {metric.desktopLabel}
                </span>
              </span>
            </div>
          ))}
        </div>
        </div>

        {/* Mobile philosophy content */}
        <div className="lg:hidden">
          <p className="mb-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wider text-[var(--dg-tertiary)]">
            The Extraction Ritual
          </p>

          <h2 className="mb-2 font-[var(--font-headline)] text-2xl font-semibold leading-tight text-[var(--dg-text-inverse)]">
            Small Batches, Uncompromising Precision.
          </h2>

          <p className="font-[var(--font-body)] text-xs leading-relaxed text-[var(--dg-tertiary)]">
            Unlock optimal sweetness and clarity by calibrating your extraction
            variables.
          </p>
        </div>

        {/* Brewing metrics - mobile */}
        <div className="lg:hidden my-4 grid grid-cols-3 border-0 py-0 lg:my-0 lg:mt-5 lg:w-full lg:divide-x lg:divide-[var(--dg-border)]">
          {brewingMetrics.map((metric) => (
            <div
              key={metric.value}
              className="flex flex-col gap-0.5 px-2 first:pl-0 last:pr-0 lg:px-5 lg:first:pl-0"
            >
              <span className="font-[var(--font-headline)] text-lg font-semibold text-[var(--dg-text-inverse)] lg:text-[var(--dg-text-primary)]">
                {metric.value}
              </span>

              <span className="font-[var(--font-body)] text-[10px] text-[var(--dg-tertiary)] lg:text-xs lg:text-[var(--dg-text-secondary)]">
                <span className="lg:hidden">{metric.mobileLabel}</span>
                <span className="hidden lg:inline">
                  {metric.desktopLabel}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Tasting guarantee */}
        <div className="rounded-[var(--dg-radius-sm)] bg-[#493329] p-3 lg:bg-[var(--dg-surface-container)] lg:p-5">
          <div className="mb-1 flex items-center gap-2">
            {/* Coffee cup icon */}
            <svg
              className="h-5 w-5 shrink-0 text-[var(--dg-secondary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 2v2" />
              <path d="M14 2v2" />
              <path d="M4 6h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z" />
              <path d="M17 9h2a2 2 0 0 1 0 4h-2" />
              <path d="M2 22h19" />
            </svg>

            <p className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wide text-[var(--dg-secondary)]">
              Tasting Guarantee
            </p>
          </div>

          {/* Desktop guarantee copy */}
          <p className="hidden font-[var(--font-body)] text-xs leading-relaxed text-[var(--dg-text-secondary)] lg:block">
            Not completely in love with your bag? Reach out to our roasting
            team within 14 days and we will gladly swap it for an alternative
            origin profile suited to your preferred brew method.
          </p>

          {/* Mobile guarantee copy */}
          <p className="font-[var(--font-body)] text-xs leading-relaxed text-[var(--dg-tertiary)] lg:hidden">
            If a bag fails to inspire your morning cup, reach out to our
            roasting team within 14 days and we'll gladly swap it.
          </p>

          {/* Desktop-only contact link */}
          <Link
            to="/contact"
            className="mt-4 hidden w-fit items-center gap-2 font-[var(--font-body)] text-xs font-semibold text-[var(--dg-text-primary)] transition-colors duration-200 hover:text-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--dg-focus)] lg:inline-flex"
          >
            Speak with a Roaster

            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
