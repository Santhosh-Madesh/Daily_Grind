import { useState } from 'react'

const categories = [
  'All Roasts',
  'Balanced & Chocolatey',
  'Bold & Dark',
  'Bright & Floral',
]

function CoffeeHero() {
  const [activeCategory, setActiveCategory] = useState('All Roasts')

  return (
    <section className="w-full overflow-hidden bg-[var(--dg-neutral)] px-[var(--dg-margin-mobile)] py-12 lg:px-[var(--dg-margin)] lg:py-16">
      <div className="mx-auto flex max-w-[var(--dg-container-max)] flex-col items-start lg:items-center">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center gap-2 lg:mb-4">
          {/* Desktop decorative lines */}
          <span
            className="hidden h-px w-6 bg-[var(--dg-secondary)] lg:block"
            aria-hidden="true"
          />

          {/* Mobile decorative dot */}
          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--dg-secondary)] lg:hidden"
            aria-hidden="true"
          />

          <p className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--dg-secondary)]">
            The Roastery Archive
          </p>

          <span
            className="hidden h-px w-6 bg-[var(--dg-secondary)] lg:block"
            aria-hidden="true"
          />
        </div>

        {/* Heading and description */}
        <div className="w-full lg:max-w-[720px] lg:text-center">
          <h1 className="mb-3 font-[var(--font-headline)] text-3xl font-semibold leading-tight text-[var(--dg-text-primary)] sm:text-4xl lg:text-5xl">
            Find Your Everyday Favourite.
          </h1>

          <p className="font-[var(--font-body)] text-base leading-relaxed text-[var(--dg-text-secondary)] sm:text-lg">
            Every bean in our collection is sustainably sourced from
            generational farms and roasted in micro-batches to highlight its
            distinct terroir, natural sweetness, and aromatic balance.
          </p>
        </div>

        {/* Decorative category selector */}
        <div
          role="group"
          aria-label="Coffee categories"
          className="mt-6 flex w-full gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-7 lg:w-auto lg:justify-center"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 font-[var(--font-body)] text-xs font-medium transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)] sm:text-sm ${
                  isActive
                    ? 'bg-[var(--dg-secondary)] text-white'
                    : 'bg-[var(--dg-white)] text-[var(--dg-text-primary)] hover:bg-[var(--dg-tertiary)]'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoffeeHero