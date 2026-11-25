
const information = [
  {
    label: 'Roast Cadence',
    value: 'Tuesdays & Fridays',
    description: 'Shipped within 48h',
  },
  {
    label: 'Ethical Sourcing',
    value: 'Direct Trade 100%',
    description: 'Above fair price minimums',
  },
  {
    label: 'Freshness Sealed',
    value: 'Degassing Valves',
    description: 'Recyclable kraft barrier',
  },
  {
    label: 'Grind Profiles',
    value: 'Mahlkönig EK43',
    description: 'Precision calibrated daily',
  },
]

function ProductInfoStrip() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[var(--dg-radius-lg)] bg-[var(--dg-white)] p-5 shadow-sm lg:grid-cols-4 lg:gap-6 lg:px-6 lg:py-5">
      {information.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="mb-1 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wider text-[var(--dg-secondary)] lg:text-xs">
            {item.label}
          </p>

          <p className="font-[var(--font-headline)] text-base text-[var(--dg-text-primary)] lg:text-lg">
            {item.value}
          </p>

          <p className="font-[var(--font-body)] text-xs text-[var(--dg-text-secondary)]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProductInfoStrip
