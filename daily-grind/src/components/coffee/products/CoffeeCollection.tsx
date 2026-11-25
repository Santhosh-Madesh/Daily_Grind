
import { useState } from 'react'

import product1 from '../../../assets/product1.png'
import product2 from '../../../assets/product2.png'
import product3 from '../../../assets/product3.png'

import ProductCard, { type CoffeeProduct } from './ProductCard'
import ProductInfoStrip from './ProductInfoStrip'

const products: CoffeeProduct[] = [
  {
    id: 'morning-ritual',
    name: 'Morning Ritual',
    image: product1,
    roast: 'Medium',
    badge: 'House Bestseller',
    origin: 'Colombia & Huila Highlands',
    altitude: '1,750m',
    roastLevel: 3,
    description:
      'Smooth, balanced, and chocolatey. Crafted specifically for morning pour-overs and silky milk drinks.',
    flavourNotes: ['Dark Chocolate', 'Sweet Almond', 'Warm Caramel'],
    grindOptions: ['Whole Bean', 'Espresso', 'Filter'],
    packages: [
      { id: '250g', label: '250g Standard', price: '18.50' },
      { id: '500g', label: '500g Roaster Bag', price: '34.00' },
    ],
  },
  {
    id: 'midnight-roast',
    name: 'Midnight Roast',
    image: product2,
    roast: 'Dark',
    badge: 'Single Origin',
    origin: 'Sumatra & Guatemala Antigua',
    altitude: '1,600m',
    roastLevel: 5,
    description:
      'Rich, bold, and full-bodied. A slow-developed roast delivering velvet mouthfeel without harsh bitterness.',
    flavourNotes: ['Rich Molasses', 'Smoked Cacao', 'Dark Caramel'],
    grindOptions: ['Whole Bean', 'Espresso', 'French Press'],
    packages: [
      { id: '250g', label: '250g Standard', price: '19.00' },
      { id: '500g', label: '500g Roaster Bag', price: '35.50' },
    ],
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    image: product3,
    roast: 'Light',
    badge: 'Heirloom',
    origin: 'Ethiopian Yirgacheffe Heirloom',
    altitude: '2,100m',
    roastLevel: 2,
    description:
      'Light, aromatic, and naturally sweet. Delicate floral aromas layered with juicy candied stone fruit.',
    flavourNotes: ['Citrus Blossom', 'Dried Apricot', 'Wild Honey'],
    grindOptions: ['Whole Bean', 'Pour Over', 'Aeropress'],
    packages: [
      { id: '250g', label: '250g Standard', price: '21.00' },
      { id: '500g', label: '500g Roaster Bag', price: '39.00' },
    ],
  },
]

function CoffeeCollection() {
  // Favourite state
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  // Each product starts with Whole Bean selected
  const [selectedGrinds, setSelectedGrinds] = useState<
    Record<string, string>
  >(() =>
    Object.fromEntries(
      products.map((product) => [product.id, 'Whole Bean']),
    ),
  )

  // Each product starts with the 250g package selected
  const [selectedPackages, setSelectedPackages] = useState<
    Record<string, string>
  >(() =>
    Object.fromEntries(
      products.map((product) => [product.id, '250g']),
    ),
  )

  const toggleFavorite = (productId: string) => {
    setFavorites((previous) => ({
      ...previous,
      [productId]: !previous[productId],
    }))
  }

  const updateGrind = (productId: string, grind: string) => {
    setSelectedGrinds((previous) => ({
      ...previous,
      [productId]: grind,
    }))
  }

  const updatePackage = (productId: string, packageId: string) => {
    setSelectedPackages((previous) => ({
      ...previous,
      [productId]: packageId,
    }))
  }

  return (
    <section className="w-full bg-[var(--dg-neutral)] px-[var(--dg-margin-mobile)] py-8 lg:px-[var(--dg-margin)] lg:py-10">
      <div className="mx-auto max-w-[var(--dg-container-max)]">
        {/* Information strip */}
        <ProductInfoStrip />

        {/* Product grid */}
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={!!favorites[product.id]}
              selectedGrind={selectedGrinds[product.id]}
              selectedPackage={selectedPackages[product.id]}
              onFavoriteToggle={() => toggleFavorite(product.id)}
              onGrindChange={(grind) =>
                updateGrind(product.id, grind)
              }
              onPackageChange={(packageId) =>
                updatePackage(product.id, packageId)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoffeeCollection
