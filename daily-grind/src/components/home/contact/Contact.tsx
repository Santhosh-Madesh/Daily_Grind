import { Link } from 'react-router'

function ContactSection() {
  const trustIndicators = [
    'Direct Trade Sourcing',
    'Carbon-Neutral Delivery',
    'Satisfaction Guaranteed',
  ]

  return (
    <section className="w-full px-[var(--dg-margin-mobile)] py-8 lg:px-[var(--dg-margin)] lg:py-16">
      <div className="mx-auto flex max-w-[var(--dg-container-max)] flex-col items-start rounded-[var(--dg-radius-lg)] bg-[var(--dg-primary)] px-7 py-10 shadow-[var(--dg-shadow-elevated)] sm:px-10 lg:min-h-[435px] lg:items-center lg:justify-center lg:px-16 lg:py-16">
        {/* Content */}
        <div className="w-full lg:max-w-[620px] lg:text-center">
          <p className="mb-3 font-[var(--font-body)] text-sm font-semibold tracking-wider text-[var(--dg-secondary)]">
            OUR PHILOSOPHY
          </p>

          <h2 className="mb-3 font-[var(--font-headline)] text-3xl font-semibold leading-tight text-[var(--dg-text-inverse)] sm:text-4xl lg:text-4xl">
            Good Coffee. No Complications.
          </h2>

          <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--dg-tertiary)] sm:text-lg">
            We believe great coffee shouldn't be complicated. Just thoughtfully
            selected beans, careful roasting, and a cup you'll want to come back
            to.
          </p>
        </div>

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[var(--dg-radius-sm)] bg-[var(--dg-secondary)] px-6 py-4 font-[var(--font-body)] text-base font-semibold text-[var(--dg-primary)] transition-colors duration-200 ease-out hover:bg-[var(--dg-tertiary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--dg-focus)] lg:mt-8 lg:w-[169px] lg:rounded-[var(--dg-radius-sm)] lg:bg-white lg:px-5 lg:py-3 lg:text-sm"
        >
          Let's Talk Coffee

          {/* Mobile-only message icon */}
          <svg
            className="h-5 w-5 lg:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
          </svg>
        </Link>

        {/* Desktop trust indicators */}
        <div className="mt-12 hidden items-center justify-center gap-5 lg:flex">
          {trustIndicators.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 font-[var(--font-body)] text-xs uppercase tracking-wide text-[var(--dg-tertiary)]"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--dg-secondary)]"
                aria-hidden="true"
              />
              {item}
            </div>
          ))}
        </div>

        {/* Mobile trust indicators */}
        <p className="mt-7 w-full text-center font-[var(--font-body)] text-sm leading-relaxed text-[var(--dg-tertiary)] lg:hidden">
          {trustIndicators.join(' • ')}
        </p>
      </div>
    </section>
  )
}

export default ContactSection