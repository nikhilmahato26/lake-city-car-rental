import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, Car } from 'lucide-react'
import { NAV_LINKS, PRIMARY_PHONE, tel, SITE } from '../../data/site'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const ids = NAV_LINKS.map((l) => l.to.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'glass-light shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal-gradient text-white shadow-glow">
              <Car size={20} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold tracking-tight text-ink">
                Lakecity
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-royal-600">
                Car Rental
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.to.replace('#', '')
              return (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-royal-700'
                        : 'text-ink/70 hover:text-royal-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-royal-100"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={tel(PRIMARY_PHONE)}
              className="btn-primary hidden sm:inline-flex"
            >
              <Phone size={16} /> Call Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="container-px lg:hidden"
          >
            <div className="glass-light mt-2 rounded-3xl p-4 shadow-card">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-semibold text-ink/80 transition-colors hover:bg-royal-50 hover:text-royal-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={tel(PRIMARY_PHONE)}
                className="btn-primary mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                <Phone size={16} /> Call {SITE.name}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
