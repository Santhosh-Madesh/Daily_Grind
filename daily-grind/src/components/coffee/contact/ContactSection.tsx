
import { Link } from 'react-router'

function ContactSection() {
  return (
    <section className="w-full bg-[var(--dg-neutral)] px-[var(--dg-margin-mobile)] py-8 lg:bg-[var(--dg-primary)] lg:px-[var(--dg-margin)] lg:py-12">
      <div className="mx-auto flex max-w-[var(--dg-container-max)] flex-col items-center rounded-[var(--dg-radius-lg)] bg-[var(--dg-surface-dim)] px-6 py-6 text-center lg:flex-row lg:justify-between lg:gap-10 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-8 lg:text-left">

        {/* Mobile-only business icon */}
        <div
          className="mb-3 flex h-14 w-14 items-center justify-center rounded-[var(--dg-radius-lg)] bg-[var(--dg-tertiary)] lg:hidden"
          aria-hidden="true"
        >
          <svg
            className="h-7 w-7 text-[var(--dg-primary)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="16" rx="1" />
            <path d="M9 20V8h6v12" />
            <path d="M6 8h.01M6 12h.01M6 16h.01M18 8h.01M18 12h.01M18 16h.01" />
          </svg>
        </div>

        {/* Desktop content */}
        <div className="hidden max-w-[680px] lg:block">
          <p className="mb-2 font-[var(--font-body)] text-xs font-semibold uppercase tracking-widest text-[var(--dg-tertiary)]">
            Commercial Partnerships
          </p>

          <h2 className="mb-2 font-[var(--font-headline)] text-3xl font-semibold leading-tight text-[var(--dg-text-inverse)]">
            Need coffee for your cafe, office, or event?
          </h2>

          <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--dg-tertiary)]">
            We offer wholesale pricing, barista training, equipment guidance,
            and tailored weekly subscription schedules for businesses of all
            scales.
          </p>
        </div>

        {/* Mobile content */}
        <div className="lg:hidden">
          <h2 className="mb-2 font-[var(--font-headline)] text-2xl font-semibold leading-tight text-[var(--dg-text-primary)]">
            Need coffee for your cafe or office?
          </h2>

          <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--dg-text-secondary)]">
            We supply wholesale partner cafes, boutique co-working spaces, and
            special events with weekly roasted batches and barista training.
          </p>
        </div>

        {/* Wholesale CTA */}
        <Link
          to="/contact"
          className="mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-[var(--dg-radius-sm)] border border-[var(--dg-border-strong)] bg-transparent px-5 py-3 font-[var(--font-body)] text-base font-semibold text-[var(--dg-text-primary)] transition-colors duration-200 ease-out hover:bg-[var(--dg-tertiary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--dg-focus)] lg:mt-0 lg:w-auto lg:border-0 lg:bg-[var(--dg-tertiary)] lg:px-9 lg:py-4 lg:text-sm lg:text-[var(--dg-primary)] lg:hover:bg-white"
        >
          Enquire for Wholesale
        </Link>
      </div>
    </section>
  )
}

export default ContactSection
