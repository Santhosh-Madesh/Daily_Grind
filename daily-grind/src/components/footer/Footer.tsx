
import { NavLink } from 'react-router'

const navigationLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Our Coffee', to: '/coffee' },
  { label: 'Contact', to: '/contact' },
  { label: 'Shipping & FAQ', to: '/contact' },
  { label: 'Wholesale Enquiries', to: '/contact' },
]

const socialLinks = [
  { label: 'Instagram' },
  { label: 'Substack' },
  { label: 'Twitter / X' },
]

const getLinkClass = (isActive = false) =>
  `relative inline-block py-1 text-sm font-[var(--font-body)] text-[var(--dg-text-primary)] no-underline transition-colors duration-200 hover:text-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--dg-secondary)] after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none ${
    isActive ? 'after:scale-x-100' : ''
  }`

function Footer() {
  return (
    <footer className="w-full border-t border-[var(--dg-primary)] bg-[var(--dg-surface)]">
      <div className="mx-auto w-full max-w-[var(--dg-container-max)] px-[var(--dg-margin-mobile)] py-10 lg:px-[var(--dg-margin)] lg:py-10">

        {/* Mobile footer */}
        <div className="flex flex-col items-center gap-6 text-center lg:hidden">
          <p className="font-[var(--font-headline)] text-4xl font-semibold italic text-[var(--dg-secondary)]">
            Good Coffee. Better Days.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {navigationLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={'end' in link ? link.end : false}
                className={getLinkClass()}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <p className="text-sm text-[var(--dg-text-secondary)]">
            © 2026 Daily Grind Coffee Roasters. All rights reserved.
          </p>
        </div>

        {/* Desktop footer */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[1.1fr_2fr_1fr] gap-10">

            {/* Brand */}
            <div className="flex flex-col items-start gap-4">
              <NavLink
                to="/"
                aria-label="Daily Grind home"
                className="font-[var(--font-headline)] text-2xl font-semibold text-[var(--dg-primary)] no-underline hover:text-[var(--dg-secondary)]"
              >
                Daily Grind
              </NavLink>

              <p className="font-[var(--font-headline)] text-xl font-medium italic text-[var(--dg-secondary)]">
                Good Coffee. Better Days.
              </p>

              <a
                href="mailto:hello@dailygrindcoffee.com"
                className="text-sm text-[var(--dg-text-primary)] no-underline transition-colors hover:text-[var(--dg-secondary)] hover:underline focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-4"
              >
                hello@dailygrindcoffee.com
              </a>

              <p className="text-sm text-[var(--dg-text-secondary)]">
                Roasted with care.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--dg-secondary)]">
                Navigation &amp; Inquiries
              </h2>

              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                {navigationLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={'end' in link ? link.end : false}
                    className={({ isActive }) => getLinkClass(isActive)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--dg-secondary)]">
                Dispatch &amp; Social
              </h2>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className={getLinkClass()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 flex items-center justify-between">
            <p className="text-sm text-[var(--dg-text-secondary)]">
              © 2026 Daily Grind Coffee Roasters. All rights reserved.
            </p>

            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--dg-secondary)]">
              Single Origin &amp; Artisanal Blends
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
