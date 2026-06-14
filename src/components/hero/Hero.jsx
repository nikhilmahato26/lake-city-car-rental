import { motion } from 'framer-motion'
import { Phone, CalendarCheck, ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Car, Building2, Plane, Bike } from 'lucide-react'
import {
  SITE,
  PRIMARY_PHONE,
  tel,
  whatsapp,
  WHATSAPP_MESSAGE,
} from '../../data/site'
import { fadeUp, stagger } from '../../utils/motion'

const BADGES = [
  { icon: Car, label: 'Self Drive' },
  { icon: Building2, label: 'City Rides' },
  { icon: Plane, label: 'Airport Transfer' },
  { icon: Bike, label: 'Bike & Scooty Rental' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-0 flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://blog.droom.in/droomassets/uploads/2026/06/ahmedabad-to-udaipur-distance-by-road.jpg"
          alt="Luxury SUV on a premium highway"
          className="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-transparent" />

      {/* Decorative floating glass orbs */}
      <div className="pointer-events-none absolute -left-20 top-24 -z-10 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-beige-400/20 blur-3xl" />

      <div className="container-px relative w-full pt-28 pb-16 lg:pt-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-beige-100 backdrop-blur-md"
          >
            ⚡ Premium Self-Drive Experience
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Drive Your Journey
            <br />
            Your Way{' '}
            <span className="bg-gradient-to-r from-beige-200 via-royal-300 to-royal-400 bg-clip-text text-transparent">
              {SITE.name}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-beige-100/85"
          >
            {SITE.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              <CalendarCheck size={18} /> Book Now
            </a>
            <a href={tel(PRIMARY_PHONE)} className="btn-outline bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Phone size={18} /> Call Now
            </a>
            <a
              href={whatsapp(PRIMARY_PHONE, WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp size={18} /> WhatsApp
            </a>
          </motion.div>

          {/* Floating badges */}
          <motion.ul
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-3"
          >
            {BADGES.map((badge, i) => (
              <motion.li
                key={badge.label}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md"
              >
                <badge.icon size={16} className="text-beige-200" />
                {badge.label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#fleet"
        aria-label="Scroll to fleet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 lg:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Explore Fleet
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  )
}
