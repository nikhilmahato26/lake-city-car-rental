import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import BookingForm from './BookingForm'
import MapCard from './MapCard'
import {
  SITE,
  CONTACTS,
  tel,
  whatsapp,
  WHATSAPP_MESSAGE,
} from '../../data/site'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'

export default function Contact() {
  return (
    <section id="contact" className="section relative bg-beige-50">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your"
          highlight="Journey Today"
          subtitle="Reach out anytime — our team is available 24/7 to help you find the perfect ride."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: contact info + map */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {/* Phone cards */}
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
              {CONTACTS.map((c) => (
                <div
                  key={c.phone}
                  className="rounded-3xl border border-white/60 bg-white p-5 shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-royal-gradient text-white">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-ink/50">
                        {c.name}
                      </p>
                      <a
                        href={tel(c.phone)}
                        className="font-display text-lg font-extrabold text-ink hover:text-royal-600"
                      >
                        {c.display}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={tel(c.phone)} className="btn-dark flex-1 !py-2 text-xs">
                      <Phone size={14} /> Call
                    </a>
                    <a
                      href={whatsapp(c.phone, WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex-1 !py-2 text-xs"
                    >
                      <FaWhatsapp size={14} /> Chat
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Location + hours */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 rounded-3xl border border-white/60 bg-white p-5 shadow-soft"
            >
              <div className="flex flex-1 items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-beige-200 text-royal-700">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">
                    Location
                  </p>
                  <p className="font-semibold text-ink">{SITE.location.line1}</p>
                  <p className="text-sm text-ink/60">
                    {SITE.location.line2}, {SITE.location.region}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-beige-200 text-royal-700">
                  <Clock size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">
                    Availability
                  </p>
                  <p className="font-semibold text-ink">Open 24/7</p>
                  <p className="text-sm text-ink/60">Booking assistance anytime</p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp}>
              <MapCard />
            </motion.div>
          </motion.div>

          {/* Right: booking form */}
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
