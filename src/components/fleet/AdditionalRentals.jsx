import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { RENTALS } from '../../data/fleet'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'
import { PRIMARY_PHONE, whatsapp } from '../../data/site'

export default function AdditionalRentals() {
  return (
    <section className="section relative bg-beige-100">
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Two-Wheeler Rentals"
          title="Bikes &"
          highlight="Scooty"
          subtitle="Beat the traffic in style. Premium bikes and stylish scooters available on flexible rentals."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-7 md:grid-cols-2"
        >
          {RENTALS.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative h-80 overflow-hidden rounded-[2rem] shadow-card sm:h-96"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-beige-200">
                    {item.tagline}
                  </span>
                  <h3 className="mt-1 font-display text-3xl font-extrabold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-beige-100/85">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover CTA */}
              <a
                href={whatsapp(
                  PRIMARY_PHONE,
                  `Hi! I'm interested in ${item.name}. Please share availability & pricing.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-7 top-7 grid h-14 w-14 place-items-center rounded-full bg-white/90 text-royal-700 shadow-glow transition-all duration-300 group-hover:bg-royal-gradient group-hover:text-white"
                aria-label={`Enquire about ${item.name}`}
              >
                <ArrowRight size={22} className="-rotate-45 transition-transform group-hover:rotate-0" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex justify-center"
        >
          <a
            href={whatsapp(PRIMARY_PHONE, 'Hi! I want to rent a bike/scooty.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp size={18} /> Enquire on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
