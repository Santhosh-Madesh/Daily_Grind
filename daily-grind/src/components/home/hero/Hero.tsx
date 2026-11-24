
import { Link } from 'react-router'
import heroImage from '../../../assets/hero_image.png'

const trustIndicators = [
  {
    title: '100%',
    subtitle: 'Arabica Origin',
    mobileTitle: '100% Arabica',
    mobileSubtitle: 'Single Origin',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3C7 3 4 7 4 12c0 4 3 8 8 9 5-1 8-5 8-9 0-5-3-9-8-9Z" />
        <path d="M8 16c2-4 5-6 9-8" />
      </svg>
    ),
  },
  {
    title: '48h',
    subtitle: 'Roast to Door',
    mobileTitle: '48h Roast',
    mobileSubtitle: 'Direct To Door',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M3 7h12v11H3z" />
        <path d="M15 11h4l3 3v4h-7z" />
        <circle cx="7.5" cy="19" r="1.5" />
        <circle cx="18.5" cy="19" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Direct',
    subtitle: 'Ethical Trade',
    mobileTitle: 'Direct Ethical',
    mobileSubtitle: 'Farm Trade',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="m12 3 8 5v5c0 4-3.5 7-8 8-4.5-1-8-4-8-8V8l8-5Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    ),
  },
]

function Hero() {
  return (
    <section className="w-full bg-[var(--dg-surface)]">
      <div className="mx-auto grid w-full max-w-[var(--dg-container-max)] grid-cols-1 items-center gap-8 px-[var(--dg-margin-mobile)] py-10 lg:grid-cols-2 lg:gap-16 lg:px-[var(--dg-margin)] lg:py-20">

        {/* Hero content */}
        <div className="flex flex-col items-start">
          {/* Small-batch badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--dg-tertiary)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--dg-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--dg-secondary)]" />
            Small-Batch Roastery
          </span>

          {/* Main heading */}
          <h1 className="mt-4 font-[var(--font-headline)] text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--dg-primary)] lg:text-[clamp(2.25rem,3.2vw,2.75rem)]">
            Make Every Morning Worth Waking Up For.
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-[540px] text-sm leading-[1.7] text-[var(--dg-text-secondary)] lg:text-base">
            Freshly roasted specialty coffee, thoughtfully sourced and crafted
            to make your everyday cup something worth looking forward to.
          </p>

          {/* Calls to action */}
          <div className="mt-6 flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center">
            <Link
              to="/coffee"
              className="dg-btn dg-btn-primary flex w-full items-center justify-center gap-3 !py-3 text-sm font-semibold sm:w-auto sm:min-w-[154px]"
            >
              Explore Our Coffee
              <span aria-hidden="true" className='lg:hidden'>→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-[var(--dg-primary)] no-underline transition-colors hover:text-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-4"
            >
              Get In Touch
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Desktop trust indicators */}
          <div className="mt-10 hidden w-full grid-cols-3 divide-x divide-[var(--dg-border-subtle)] lg:grid">
            {trustIndicators.map((item) => (
              <div key={item.title} className="flex flex-col gap-1 px-4 first:pl-0">
                <span className="font-[var(--font-headline)] text-lg font-semibold leading-tight text-[var(--dg-primary)]">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-wide text-[var(--dg-text-secondary)]">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full overflow-hidden rounded-[var(--dg-radius-lg)] shadow-[var(--dg-shadow-elevated)]">
          <img
            src={heroImage}
            alt="Freshly brewed specialty coffee in a ceramic cup at a warm coffee roastery"
            className="aspect-[4/3] w-full object-cover lg:aspect-[1.46/1]"
          />

          {/* Image overlay badge */}
          <div className="absolute bottom-4 left-4 flex max-w-[85%] items-center gap-2 rounded-md bg-[var(--dg-surface)]/95 px-3 py-2 shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[var(--dg-secondary)]" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" />
              <path d="m12 7 1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.4-2.3 3.3-.5L12 7Z" />
            </svg>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold uppercase tracking-wide text-[var(--dg-text-primary)]">
                Small-Batch Roasted Weekly
              </p>
              <p className="truncate text-[10px] text-[var(--dg-text-secondary)]">
                Peak flavour guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Mobile trust indicators */}
        <div className="grid grid-cols-3 gap-2 lg:hidden">
          {trustIndicators.map((item) => (
            <div
              key={item.title}
              className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-[var(--dg-radius)] bg-[var(--dg-surface-container)] px-1 py-3 text-center"
            >
              <span className="text-[var(--dg-secondary)]">
                {item.icon}
              </span>
              <span className="text-xs font-semibold text-[var(--dg-primary)]">
                {item.mobileTitle}
              </span>
              <span className="text-[10px] text-[var(--dg-text-secondary)]">
                {item.mobileSubtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
