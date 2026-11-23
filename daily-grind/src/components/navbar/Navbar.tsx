
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const drawer = drawerRef.current
    const focusableElements = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not(:disabled)'
    )

    focusableElements?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }

      if (event.key === 'Tab' && focusableElements?.length) {
        const first = focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const navigationLinkClass =
    "relative py-2 text-sm font-semibold text-[var(--dg-text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--dg-secondary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--dg-secondary)] after:transition-transform after:duration-200 [&.active]:text-[var(--dg-primary)] [&.active]:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-4"

  const navigationLinks = (
    <>
      <NavLink
        to="/"
        end
        className={navigationLinkClass}
        onClick={closeMenu}
      >
        Home
      </NavLink>

      <NavLink
        to="/coffee"
        className={navigationLinkClass}
        onClick={closeMenu}
      >
        Our Coffee
      </NavLink>

      <NavLink
        to="/contact"
        className={navigationLinkClass}
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </>
  )

  return (
    <header className="relative z-[1000] w-full border-b border-[var(--dg-border-subtle)] bg-[var(--dg-surface-bright)]">

      {/* Navbar container */}
      <div className="mx-auto flex min-h-[76px] w-full max-w-[var(--dg-container-max)] items-center gap-2 px-[var(--dg-margin-mobile)] md:min-h-[88px] md:justify-between md:gap-8 md:px-[var(--dg-margin)]">

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center text-[var(--dg-primary)] md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="dg-mobile-drawer"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-[26px] w-[26px]"
            aria-hidden="true"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {/* Brand */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center no-underline"
          aria-label="Daily Grind home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[var(--dg-radius)] bg-[var(--dg-primary)] font-[var(--font-headline)] text-xl font-semibold text-[var(--dg-white)] md:h-12 md:w-12">
            DG
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {navigationLinks}
        </nav>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0 md:gap-5">

          {/* Shop CTA */}
          <NavLink
            to="/coffee"
            className="dg-btn dg-btn-primary !px-3 !py-2 text-sm md:!px-6 md:!py-3"
          >
            <span className="hidden md:inline">Shop Coffee</span>
            <span className="md:hidden">Shop</span>
          </NavLink>

          {/* Shopping bag — mobile only */}
          <a
            href="#"
            className="relative hidden h-9 w-9 shrink-0 items-center justify-center text-[var(--dg-primary)] md:hidden"
            aria-label="Shopping bag"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M5 8h14l1 13H4L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[var(--dg-secondary)]" />
          </a>

          {/* Profile */}
          <a
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--dg-primary)] transition-colors hover:bg-[var(--dg-secondary-soft)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)] focus-visible:outline-offset-3 md:h-[42px] md:w-[42px] md:rounded-full md:border md:border-[var(--dg-border)]"
            aria-label="Profile"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[21px] w-[21px] md:h-5 md:w-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile drawer backdrop */}
      <button
        type="button"
        className={`fixed inset-0 z-[1090] bg-[var(--dg-overlay)] transition-opacity duration-300 motion-reduce:transition-none ${
          isMenuOpen
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <aside
        ref={drawerRef}
        id="dg-mobile-drawer"
        className={`fixed inset-y-0 left-0 z-[1100] w-4/5 max-w-[420px] bg-[var(--dg-surface-bright)] p-6 shadow-[var(--dg-shadow-elevated)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal={isMenuOpen ? 'true' : undefined}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[var(--dg-border-subtle)] pb-6">
          <span className="font-[var(--font-headline)] text-[var(--headline-md-size)] text-[var(--dg-primary)]">
            Menu
          </span>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-[var(--dg-primary)] focus-visible:outline-2 focus-visible:outline-[var(--dg-focus)]"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer navigation */}
        <nav
          className="flex flex-col items-start gap-2 pt-6"
          aria-label="Mobile navigation"
        >
          {navigationLinks}
        </nav>
      </aside>
    </header>
  )
}

export default Navbar
