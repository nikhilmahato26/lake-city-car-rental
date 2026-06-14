import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, ArrowUp, CalendarCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  PRIMARY_PHONE,
  tel,
  whatsapp,
  WHATSAPP_MESSAGE,
} from '../../data/site'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  const items = [
    {
      key: 'whatsapp',
      href: whatsapp(PRIMARY_PHONE, WHATSAPP_MESSAGE),
      label: 'WhatsApp',
      icon: <FaWhatsapp size={22} />,
      className: 'bg-[#25D366]',
      external: true,
    },
    {
      key: 'call',
      href: tel(PRIMARY_PHONE),
      label: 'Call Now',
      icon: <Phone size={20} />,
      className: 'bg-ink',
    },
    {
      key: 'book',
      href: '#contact',
      label: 'Book Now',
      icon: <CalendarCheck size={20} />,
      className: 'bg-royal-gradient',
    },
  ]

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      {items.map((item, i) => (
        <motion.a
          key={item.key}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          aria-label={item.label}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.12, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className={`group flex items-center gap-2 rounded-full pl-3 pr-3 text-white shadow-card ${item.className}`}
        >
          <span className="grid h-12 w-12 place-items-center">{item.icon}</span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:pr-2 group-hover:opacity-100">
            {item.label}
          </span>
        </motion.a>
      ))}

      <AnimatePresence>
        {showTop && (
          <motion.button
            aria-label="Scroll to top"
            onClick={scrollTop}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-royal-700 shadow-card"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
