
import { useEffect, useState } from 'react'
import product2 from '../../../assets/product2.png'

interface FormData {
  name: string
  email: string
  category: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  category: 'General Question',
  message: '',
}

function ContactIcon({ type }: { type: 'location' | 'mail' | 'clock' }) {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...commonProps} aria-hidden="true">
      {type === 'location' && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}

      {type === 'mail' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      )}

      {type === 'clock' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )}
    </svg>
  )
}

function ContactFormSection() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [emailError, setEmailError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  // Automatically dismiss the success popup and reset the form.
  useEffect(() => {
    if (!showSuccess) return

    const timeout = window.setTimeout(() => {
      setShowSuccess(false)
      setForm(initialForm)
      setEmailError('')
    }, 2500)

    return () => window.clearTimeout(timeout)
  }, [showSuccess])

  const handleChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }))

    if (field === 'email') {
      setEmailError('')
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const email = form.email.trim()

    if (!email) {
      setEmailError('Please enter your email address.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.')
      return
    }

    setEmailError('')
    setShowSuccess(true)
  }

  const fieldClass =
    'w-full rounded-sm border border-transparent bg-[var(--dg-neutral)] px-3 py-2.5 font-[var(--font-body)] text-sm text-[var(--dg-text-primary)] outline-none transition-colors placeholder:text-[var(--dg-text-muted)] focus:border-[var(--dg-focus)] focus:ring-1 focus:ring-[var(--dg-focus)]'

  const contactCards = [
    {
      type: 'location' as const,
      label: 'Roastery & Tasting Room',
      content: (
        <>
          <p className="font-[var(--font-headline)] text-lg text-[var(--dg-text-primary)]">
            142 St. Jude’s Mill
          </p>
          <p className="text-sm text-[var(--dg-text-secondary)]">
            Old Foundry Quarter, Portland, OR 97204
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=142+St+Jude%27s+Mill+Portland+OR+97204"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-[var(--dg-secondary)] transition-colors hover:text-[var(--dg-primary)]"
          >
            Get Directions ↗
          </a>
        </>
      ),
    },
    {
      type: 'mail' as const,
      label: 'Direct Correspondence',
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-xs text-[var(--dg-text-secondary)]">
              General Inquiries
            </p>
            <a
              href="https://dailygrindcoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer break-all text-sm font-medium text-[var(--dg-text-primary)] underline-offset-4 hover:underline"
            >
              hello@dailygrindcoffee.com
            </a>
          </div>

          <div>
            <p className="text-xs text-[var(--dg-text-secondary)]">
              Wholesale Partnerships
            </p>
            <a
              href="https://dailygrindcoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer break-all text-sm font-medium text-[var(--dg-text-primary)] underline-offset-4 hover:underline"
            >
              wholesale@dailygrindcoffee.com
            </a>
          </div>
        </div>
      ),
    },
    {
      type: 'clock' as const,
      label: 'Hours & Schedules',
      content: (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-[var(--dg-text-primary)]">
              Roasting Floor
            </p>
            <p className="text-xs text-[var(--dg-text-secondary)]">
              Tue–Sat · 7am–4pm
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-[var(--dg-text-primary)]">
              Tasting Room
            </p>
            <p className="text-xs text-[var(--dg-text-secondary)]">
              Wed–Sun · 8am–3pm
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[var(--dg-neutral)] px-[var(--dg-margin-mobile)] py-8 lg:px-[var(--dg-margin)] lg:py-12">

      {/* Decorative dotted edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-[radial-gradient(var(--dg-border-strong)_1px,transparent_1px)] [background-size:12px_12px] lg:block"
      />

      <div className="relative mx-auto max-w-[var(--dg-container-max)]">

        {/* Page introduction */}
        <div className="mb-6 lg:mb-7">
          <span className="mb-2 inline-block rounded-sm bg-[var(--dg-secondary-soft)] px-2 py-1 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wide text-[var(--dg-primary)]">
            • Get in Touch
          </span>

          <h1 className="font-[var(--font-headline)] text-3xl font-semibold leading-tight text-[var(--dg-text-primary)] lg:text-4xl">
            Let’s Start a Conversation.
          </h1>

          <p className="mt-2 max-w-xl font-[var(--font-body)] text-sm leading-relaxed text-[var(--dg-text-secondary)]">
            Questions about our coffee, interested in working with us, or
            simply want to say hello? We’d love to hear from you.
          </p>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6">

          {/* Contact form */}
          <div className="rounded-[var(--dg-radius-md)] bg-[var(--dg-white)] p-5 shadow-sm lg:p-7">
            <form onSubmit={handleSubmit} noValidate>

              {/* Dispatch desk heading */}
              <div className="mb-4 flex items-center justify-between gap-2 rounded-sm bg-[var(--dg-neutral)] px-3 py-3">
                <span className="flex items-center gap-2 font-[var(--font-body)] text-xs font-medium text-[var(--dg-secondary)]">
                  <ContactIcon type="clock" />
                  Roaster Dispatch Desk
                </span>

                <span className="font-[var(--font-body)] text-[10px] text-[var(--dg-secondary)]">
                  Portland, OR
                </span>
              </div>

              {/* Name */}
              <div className="mb-3">
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-[var(--font-body)] text-xs font-semibold text-[var(--dg-text-primary)]"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Maya Lin"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  required
                  className={fieldClass}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-[var(--font-body)] text-xs font-semibold text-[var(--dg-text-primary)]"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="maya@example.com"
                  value={form.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'email-error' : undefined}
                  className={`${fieldClass} ${
                    emailError
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : ''
                  }`}
                />

                {emailError && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-1.5 font-[var(--font-body)] text-xs text-red-600"
                  >
                    {emailError}
                  </p>
                )}
              </div>

              {/* Enquiry category */}
              <div className="mb-3">
                <label
                  htmlFor="contact-category"
                  className="mb-1.5 block font-[var(--font-body)] text-xs font-semibold text-[var(--dg-text-primary)]"
                >
                  What can we help you with?
                </label>

                <select
                  id="contact-category"
                  value={form.category}
                  onChange={(event) => handleChange('category', event.target.value)}
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option>General Question</option>
                  <option>Coffee & Orders</option>
                  <option>Wholesale Partnerships</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-4">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <label
                    htmlFor="contact-message"
                    className="font-[var(--font-body)] text-xs font-semibold text-[var(--dg-text-primary)]"
                  >
                    Your Message
                  </label>

                  <span className="font-[var(--font-body)] text-[10px] text-[var(--dg-text-secondary)] lg:hidden">
                    Character limit: 500
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  rows={5}
                  maxLength={500}
                  placeholder="Tell us a bit about what you’re brewing or how we can collaborate..."
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  required
                  className={`${fieldClass} min-h-28 resize-y`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-[var(--dg-primary)] px-4 py-3 font-[var(--font-body)] text-xs font-semibold text-white transition-colors duration-200 hover:bg-[var(--dg-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dg-focus)]"
              >
                Send Message

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
              </button>

              {/* Response note */}
              <p className="mt-3 flex items-start justify-center gap-1.5 text-center font-[var(--font-body)] text-[10px] leading-relaxed text-[var(--dg-text-secondary)] lg:text-left">
                <span aria-hidden="true">◷</span>
                We roast Tuesday through Friday and typically reply within 24 hours.
              </p>
            </form>
          </div>

          {/* Right column */}
          <div className="flex min-w-0 flex-col gap-4">

            {/* Roastery image card */}
            <div className="group relative min-h-52 overflow-hidden rounded-[var(--dg-radius-md)] shadow-sm lg:min-h-52">
              <img
                src={product2}
                alt="Specialty coffee at the Daily Grind roastery"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5">
                <p className="mb-1 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-widest text-white">
                  Portland Flagship
                </p>

                <h2 className="font-[var(--font-headline)] text-xl font-semibold text-white">
                  Old Foundry Roastery & Bar
                </h2>

                <p className="mt-1 font-[var(--font-body)] text-xs text-white/80 lg:hidden">
                  Batch brews, single-origin flights, and seasonal pour-overs.
                </p>
              </div>
            </div>

            {/* Desktop: one consolidated information card */}
            <div className="hidden flex-1 rounded-[var(--dg-radius-md)] bg-[var(--dg-white)] p-5 shadow-sm lg:block">
              <div className="space-y-4">
                {contactCards.map((card) => (
                  <div key={card.label} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--dg-radius-sm)] bg-[var(--dg-neutral)] text-[var(--dg-primary)]">
                      <ContactIcon type={card.type} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wide text-[var(--dg-secondary)]">
                        {card.label}
                      </p>

                      {card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: three separate information cards */}
            <div className="flex flex-col gap-3 lg:hidden">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="flex gap-3 rounded-[var(--dg-radius-md)] bg-[var(--dg-surface-container)] p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--dg-radius-sm)] bg-[var(--dg-secondary-soft)] text-[var(--dg-primary)]">
                    <ContactIcon type={card.type} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-wide text-[var(--dg-secondary)]">
                      {card.label}
                    </p>

                    {card.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-5 backdrop-blur-[2px]"
          role="status"
          aria-live="polite"
        >
          <div className="flex w-full max-w-sm flex-col items-center rounded-[var(--dg-radius-lg)] bg-[var(--dg-white)] px-8 py-9 text-center shadow-[var(--dg-shadow-elevated)] animate-[fadeIn_250ms_ease-out]">
            {/* Success circle and tick */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--dg-primary)]">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
            </div>

            <h2 className="font-[var(--font-headline)] text-2xl font-semibold text-[var(--dg-text-primary)]">
              Message Sent!
            </h2>

            <p className="mt-2 font-[var(--font-body)] text-sm text-[var(--dg-text-secondary)]">
              Thanks for reaching out. We appreciate you taking the time to
              connect with us.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactFormSection
