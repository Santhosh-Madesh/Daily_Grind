
function LabelIcon({ type }: { type: 'truck' | 'instagram' | 'audio' | 'book' | 'badge' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" {...common} aria-hidden="true">
      {type === 'truck' && (
        <>
          <path d="M3 6h12v12H3z" />
          <path d="M15 10h4l3 4v4h-7z" />
          <circle cx="7.5" cy="18" r="1.5" />
          <circle cx="18.5" cy="18" r="1.5" />
        </>
      )}

      {type === 'instagram' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
        </>
      )}

      {type === 'audio' && (
        <>
          <path d="M5 9v6M9 6v12M13 9v6M17 5v14M21 9v6" />
        </>
      )}

      {type === 'book' && (
        <>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z" />
          <path d="M4 5.5v16.5M8 7h8M8 11h8" />
        </>
      )}

      {type === 'badge' && (
        <>
          <path d="m12 2 2.4 2 3.1-.2.9 3 2.5 1.8-1 3 1 3-2.5 1.8-.9 3-3.1-.2L12 21l-2.4-2-3.1.2-.9-3L3.1 14.4l1-3-1-3L6 6.6l.9-3 3.1.2z" />
          <path d="m9 11.5 2 2 4-4" />
        </>
      )}
    </svg>
  )
}

const dispatchLinks = [
  {
    platform: 'Instagram',
    label: '@dailygrindroasters',
    mobileLabel: '@dailygrindroasters',
    href: 'https://www.instagram.com/dailygrindroasters/',
    icon: 'instagram' as const,
  },
  {
    platform: 'Spotify',
    label: 'Morning Jams',
    mobileLabel: 'Morning Jams',
    href: 'https://open.spotify.com/track/7Fq9RwQxSn3kW85PrDUf0M',
    icon: 'audio' as const,
  },
  {
    platform: 'Substack',
    label: 'The Slow Pour',
    mobileLabel: 'The Slow Pour',
    href: 'https://theslowpour.substack.com/',
    icon: 'book' as const,
  },
]

const externalLinkClass =
  'cursor-pointer transition-colors duration-200 hover:text-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)]'

function LabelSection() {
  return (
    <section className="w-full bg-[var(--dg-neutral)] px-[var(--dg-margin-mobile)] py-8 lg:px-[var(--dg-margin)] lg:py-12">
      <div className="mx-auto max-w-[var(--dg-container-max)]">

        {/* Desktop: upper-right information blocks */}
        <div className="mb-8 hidden justify-end lg:flex">
          <div className="w-[40%] space-y-5">

            {/* Audio and dispatch */}
            <div className="rounded-[var(--dg-radius-md)] bg-[var(--dg-surface-container)] p-5">
              <p className="mb-3 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wider text-[var(--dg-secondary)]">
                Audio & Dispatch
              </p>

              <div className="grid grid-cols-3 gap-2">
                {dispatchLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.platform}: ${link.label} (opens in a new tab)`}
                    className={`min-w-0 rounded-sm bg-[var(--dg-white)] p-2 ${externalLinkClass}`}
                  >
                    <span className="block truncate font-[var(--font-body)] text-[10px] text-[var(--dg-secondary)]">
                      {link.platform}
                    </span>
                    <span className="mt-1 block truncate font-[var(--font-body)] text-xs text-[var(--dg-text-primary)]">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Turnaround information */}
            <div className="flex gap-3 rounded-[var(--dg-radius-md)] bg-[var(--dg-surface-container)] p-4">
              <div className="pt-1 text-[var(--dg-secondary)]">
                <LabelIcon type="truck" />
              </div>

              <div>
                <h3 className="font-[var(--font-body)] text-sm font-medium text-[var(--dg-text-primary)]">
                  Looking for turnaround info?
                </h3>
                <p className="mt-1 font-[var(--font-body)] text-xs leading-relaxed text-[var(--dg-text-secondary)]">
                  Wondering about grind sizes or shipping times? Check our standard
                  turnaround: orders ship within 48h of roast date for optimum cup clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: turnaround guarantee */}
        <div className="mb-5 flex gap-3 rounded-[var(--dg-radius-md)] bg-[var(--dg-surface-container)] p-4 lg:hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--dg-radius-sm)] bg-[var(--dg-white)] text-[var(--dg-secondary)]">
            <LabelIcon type="truck" />
          </div>

          <div>
            <p className="font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wide text-[var(--dg-secondary)]">
              Turnaround Guarantee
            </p>
            <p className="mt-1 font-[var(--font-body)] text-xs leading-relaxed text-[var(--dg-text-primary)]">
              Looking for turnaround info? Orders ship within 48 hours of roast date
              for optimum cup clarity.
            </p>
          </div>
        </div>

        {/* Mobile: community dispatches */}
        <div className="mb-6 lg:hidden">
          <p className="mb-3 px-1 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wider text-[var(--dg-secondary)]">
            Community Dispatches
          </p>

          <div className="flex flex-wrap gap-2">
            {dispatchLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.platform}: ${link.mobileLabel} (opens in a new tab)`}
                className={`inline-flex items-center gap-2 rounded-full bg-[var(--dg-surface-container)] px-3 py-2 font-[var(--font-body)] text-xs font-medium text-[var(--dg-text-primary)] ${externalLinkClass}`}
              >
                <span className="text-[var(--dg-secondary)]">
                  <LabelIcon type={link.icon} />
                </span>
                {link.mobileLabel}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal brand standard */}
        <div className="hidden items-center gap-4 rounded-[var(--dg-radius-md)] bg-[var(--dg-surface-container)] px-8 py-5 lg:flex">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--dg-radius-sm)] bg-[var(--dg-neutral)] text-[var(--dg-secondary)]">
            <LabelIcon type="badge" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-[var(--font-headline)] text-lg text-[var(--dg-text-primary)]">
              Ethically Sourced. Micro-Lot Roasted.
            </h3>
            <p className="font-[var(--font-body)] text-xs text-[var(--dg-text-secondary)]">
              Every harvest is cupped and verified for transparency, provenance, and flavor purity.
            </p>
          </div>

          <p className="shrink-0 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wider text-[var(--dg-secondary)]">
            Est. 2018 <span className="px-1">•</span> Direct Trade
          </p>
        </div>

        {/* Mobile: centered dark brand standard */}
        <div className="flex flex-col items-center rounded-[var(--dg-radius-md)] bg-[var(--dg-primary)] px-5 py-5 text-center shadow-sm lg:hidden">
          <div className="mb-2 flex items-center gap-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wider text-[var(--dg-secondary)]">
            <LabelIcon type="badge" />
            Daily Grind Standard
          </div>

          <h3 className="max-w-xs font-[var(--font-headline)] text-lg font-semibold leading-snug text-[var(--dg-text-inverse)]">
            Ethically Sourced. Micro-Lot Roasted.
          </h3>

          <p className="mt-2 font-[var(--font-body)] text-[10px] text-[var(--dg-tertiary)]">
            Est. 2018 • Direct Trade Certified
          </p>
        </div>

      </div>
    </section>
  )
}

export default LabelSection
