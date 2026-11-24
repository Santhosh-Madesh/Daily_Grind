
import { useState } from 'react'
import { Link } from 'react-router'
import product1 from '../../../assets/product1.png'
import product2 from '../../../assets/product2.png'
import product3 from '../../../assets/product3.png'

const products = [
  {
    id: 'morning-ritual',
    name: 'Morning Ritual',
    price: '$18.50',
    weight: '250G WHOLE BEAN',
    roast: 'MEDIUM ROAST • WASHED',
    description:
      'Smooth, balanced, and chocolatey with notes of sweet almond and dark cocoa.',
    flavours: ['Chocolate', 'Almond', 'Caramel'],
    image: product1,
  },
  {
    id: 'midnight-roast',
    name: 'Midnight Roast',
    price: '$19.00',
    weight: '250G WHOLE BEAN',
    roast: 'DARK ROAST • NATURAL',
    description:
      'Rich, bold, and full-bodied with deep molasses, dark caramel, and smoky spice.',
    flavours: ['Molasses', 'Smoky', 'Spice'],
    image: product2,
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    price: '$21.00',
    weight: '250G WHOLE BEAN',
    roast: 'LIGHT ROAST • HONEY PROCESS',
    description:
      'Light, aromatic, and naturally sweet with bright citrus blossom and apricot notes.',
    flavours: ['Citrus', 'Honey', 'Apricot'],
    image: product3,
  },
]

function ProductSection() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const toggleFavorite = (productId: string) => {
    setFavorites((previous) => ({
      ...previous,
      [productId]: !previous[productId],
    }))
  }

  return (
    <section className="w-full bg-[var(--dg-surface)]">
      <div className="mx-auto w-full max-w-[var(--dg-container-max)] px-[var(--dg-margin-mobile)] py-14 lg:px-[var(--dg-margin)] lg:py-24">

        {/* Section heading */}
        <div className="mb-8 flex flex-col gap-3 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--dg-secondary)]">
              Our Signature Roasts
            </p>

            <h2 className="font-[var(--font-headline)] text-4xl font-semibold leading-tight text-[var(--dg-primary)] lg:text-5xl">
              Specialty Coffee For Every Palate
            </h2>

            <p className="mt-3 text-sm text-[var(--dg-text-secondary)] lg:text-base">
              Whole bean or ground to order, sealed at peak freshness.
            </p>
          </div>

          <Link
            to="/coffee"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-[var(--dg-primary)] no-underline transition-colors hover:text-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-4 lg:inline-flex"
          >
            View All Coffees
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-[var(--dg-radius-lg)] bg-[var(--dg-white)] shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--dg-shadow-elevated)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              {/* Product navigation */}
              <Link
                to="/coffee"
                aria-label={`Explore ${product.name}`}
                className="absolute inset-0 z-10 rounded-[var(--dg-radius-lg)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-4"
              />

              {/* Product image */}
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                <img
                  src={product.image}
                  alt={`${product.name} specialty coffee`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />

                {/* Roast badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[var(--dg-surface-bright)] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--dg-primary)] shadow-sm">
                  {product.roast}
                </span>

                {/* Favorite button */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={
                    favorites[product.id]
                      ? `Remove ${product.name} from favorites`
                      : `Add ${product.name} to favorites`
                  }
                  aria-pressed={Boolean(favorites[product.id])}
                  className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--dg-surface-bright)] text-[var(--dg-primary)] shadow-sm transition-colors duration-200 hover:bg-[var(--dg-neutral)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-2 motion-reduce:transition-none"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={favorites[product.id] ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                  </svg>
                </button>
              </div>

              {/* Product information */}
              <div className="relative z-20 flex flex-1 flex-col p-6 lg:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[var(--font-headline)] text-2xl font-semibold text-[var(--dg-primary)]">
                    {product.name}
                  </h3>

                  <span className="shrink-0 pt-1 font-semibold text-[var(--dg-secondary)]">
                    {product.price}
                  </span>
                </div>

                <p className="mt-2 text-xs font-medium tracking-wider text-[var(--dg-text-muted)]">
                  {product.weight}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[var(--dg-text-secondary)]">
                  {product.description}
                </p>

                {/* Flavour tags */}
                <div className="mt-4 mb-4 flex flex-wrap gap-2">
                  {product.flavours.map((flavour) => (
                    <span
                      key={flavour}
                      className="rounded-[var(--dg-radius-sm)] bg-[var(--dg-neutral)] px-3 py-1.5 text-xs text-[var(--dg-text-secondary)]"
                    >
                      {flavour}
                    </span>
                  ))}
                </div>

                {/* Explore product */}
                <Link
                  to="/coffee"
                  className="dg-btn dg-btn-primary mt-auto pt-6 flex w-full items-center justify-center gap-3 !py-3 text-sm"
                >
                  Explore Product
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            to="/coffee"
            className="dg-btn dg-btn-secondary flex items-center gap-3"
          >
            View All Coffees
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
