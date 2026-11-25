
import { Link } from 'react-router'

export interface PackageOption {
  id: string
  label: string
  price: string
}

export interface CoffeeProduct {
  id: string
  name: string
  image: string
  roast: string
  badge: string
  origin: string
  altitude: string
  roastLevel: number
  description: string
  flavourNotes: string[]
  grindOptions: string[]
  packages: PackageOption[]
}

interface ProductCardProps {
  product: CoffeeProduct
  isFavorite: boolean
  selectedGrind: string
  selectedPackage: string
  onFavoriteToggle: () => void
  onGrindChange: (grind: string) => void
  onPackageChange: (packageId: string) => void
}

function ProductCard({
  product,
  isFavorite,
  selectedGrind,
  selectedPackage,
  onFavoriteToggle,
  onGrindChange,
  onPackageChange,
}: ProductCardProps) {
  const currentPackage = product.packages.find(
    (option) => option.id === selectedPackage,
  ) ?? product.packages[0]

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[var(--dg-radius-lg)] bg-[var(--dg-white)] shadow-sm">
      {/* Product image */}
      <div className="group relative aspect-[4/3] overflow-hidden lg:aspect-square">
        <img
          src={product.image}
          alt={`${product.name} specialty coffee packaging`}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />

        {/* Roast badge */}
        <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2 py-1 font-[var(--font-body)] text-[10px] font-semibold uppercase text-[var(--dg-primary)]">
          {product.roast} Roast
        </span>

        {/* Product distinction badge */}
        <span className="absolute bottom-3 right-3 rounded-sm bg-[var(--dg-primary)] px-2 py-1 font-[var(--font-body)] text-[10px] font-semibold text-white">
          {product.badge}
        </span>

        {/* Favourite button */}
        <button
          type="button"
          onClick={onFavoriteToggle}
          aria-label={
            isFavorite
              ? `Remove ${product.name} from favourites`
              : `Add ${product.name} to favourites`
          }
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[var(--dg-primary)] transition-colors hover:bg-[var(--dg-tertiary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
      </div>

      {/* Product content */}
      <div className="flex flex-1 flex-col p-4 lg:p-5">
        {/* Name and price */}
        <div className="mb-1 flex items-start justify-between gap-2">
          <h2 className="font-[var(--font-headline)] text-xl leading-tight text-[var(--dg-text-primary)]">
            {product.name}
          </h2>

          <span className="shrink-0 pt-1 font-[var(--font-body)] text-sm font-semibold text-[var(--dg-text-primary)]">
            ${currentPackage.price}
          </span>
        </div>

        {/* Origin */}
        <p className="mb-2 font-[var(--font-body)] text-[10px] uppercase tracking-wide text-[var(--dg-secondary)]">
          {product.origin} ({product.altitude})
        </p>

        {/* Roast level */}
        <div className="mb-2 flex items-center justify-between gap-2 rounded-sm bg-[var(--dg-neutral)] px-2 py-1">
          <span className="font-[var(--font-body)] text-[10px] uppercase tracking-wide text-[var(--dg-text-secondary)]">
            Roast Level:
          </span>

          <div
            className="flex items-center gap-1"
            aria-label={`${product.roastLevel} out of 5 roast level`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index < product.roastLevel
                    ? 'bg-[var(--dg-primary)]'
                    : 'bg-[var(--dg-border)]'
                }`}
              />
            ))}
          </div>

          <span className="font-[var(--font-body)] text-[10px] text-[var(--dg-text-primary)]">
            {product.roast}
          </span>
        </div>

        {/* Flavour notes */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {product.flavourNotes.map((note) => (
            <span
              key={note}
              className="rounded-sm bg-[var(--dg-neutral)] px-2 py-1 font-[var(--font-body)] text-[10px] text-[var(--dg-text-primary)]"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mb-4 font-[var(--font-body)] text-xs leading-relaxed text-[var(--dg-text-secondary)]">
          {product.description}
        </p>

        {/* Grind selection */}
        <div className="mb-3">
          <div className="mb-1 flex items-center justify-between">
            <p className="font-[var(--font-body)] text-[10px] uppercase tracking-wide text-[var(--dg-text-secondary)]">
              Grind Selection
            </p>

            <span className="font-[var(--font-body)] text-[10px] font-medium text-[var(--dg-secondary)]">
              {selectedGrind}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 rounded-sm bg-[var(--dg-neutral)] p-1">
            {product.grindOptions.map((grind) => {
              const isSelected = selectedGrind === grind

              return (
                <button
                  key={grind}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onGrindChange(grind)}
                  className={`min-w-0 cursor-pointer rounded-sm px-1 py-1.5 font-[var(--font-body)] text-[10px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)] ${
                    isSelected
                      ? 'bg-[var(--dg-primary)] font-semibold text-white'
                      : 'text-[var(--dg-text-primary)] hover:bg-white'
                  }`}
                >
                  {grind}
                </button>
              )
            })}
          </div>
        </div>

        {/* Package selection */}
        <div className="mb-4">
          <p className="mb-1 font-[var(--font-body)] text-[10px] uppercase tracking-wide text-[var(--dg-text-secondary)]">
            Package Weight
          </p>

          <div className="grid grid-cols-2 gap-1">
            {product.packages.map((option) => {
              const isSelected = selectedPackage === option.id

              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onPackageChange(option.id)}
                  className={`min-w-0 cursor-pointer rounded-sm border px-2 py-2 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)] ${
                    isSelected
                      ? 'border-[var(--dg-secondary)] bg-[var(--dg-secondary-soft)]'
                      : 'border-transparent bg-[var(--dg-neutral)] hover:border-[var(--dg-border-strong)]'
                  }`}
                >
                  <span className="block font-[var(--font-body)] text-[10px] font-semibold text-[var(--dg-text-primary)]">
                    {option.label}
                  </span>

                  <span className="block font-[var(--font-body)] text-[10px] text-[var(--dg-text-secondary)]">
                    ${option.price}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Enquire button */}
        <Link
          to="/contact"
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--dg-primary)] px-4 py-2.5 font-[var(--font-body)] text-xs font-semibold text-white transition-colors duration-200 hover:bg-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)]"
        >
          Enquire &amp; Order

          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
