import { motion } from 'framer-motion'
import { Phone, CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp } from '../../utils/motion'
import {
  PRIMARY_PHONE,
  tel,
  whatsapp,
} from '../../data/site'

export default function FleetCard({ vehicle }) {
  const bookMsg = `Hi Lakecity Car Rental! I'd like to book the ${vehicle.name} (₹${vehicle.price} ${vehicle.priceUnit}). Please confirm availability.`

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white shadow-card"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

        {/* Badge */}
        {vehicle.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-royal-gradient px-3 py-1.5 text-xs font-bold text-white shadow-glow">
            {vehicle.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          {vehicle.category}
        </span>

        {/* Glass price overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="font-display text-xl font-extrabold text-white drop-shadow">
            {vehicle.name}
          </h3>
          <div className="glass rounded-2xl px-3 py-1.5 text-right text-white">
            <span className="block text-lg font-extrabold leading-none">
              ₹{vehicle.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] font-medium opacity-80">
              {vehicle.priceUnit}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-ink/60">
          {vehicle.description}
        </p>

        {/* Features */}
        <ul className="mt-4 grid grid-cols-2 gap-2.5">
          {vehicle.features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-2 rounded-xl bg-beige-100 px-3 py-2 text-xs font-semibold text-ink/70"
            >
              <f.icon size={15} className="text-royal-600" />
              {f.label}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          <a href="#contact" className="btn-primary flex-1">
            <CalendarCheck size={16} /> Book Now
          </a>
          <a
            href={tel(PRIMARY_PHONE)}
            aria-label={`Call to book ${vehicle.name}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Phone size={17} />
          </a>
          <a
            href={whatsapp(PRIMARY_PHONE, bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp to book ${vehicle.name}`}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
