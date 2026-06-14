import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { SERVICES } from '../../data/services'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden bg-ink">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-royal-600/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-beige-500/10 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="What We Offer"
          title="Premium"
          highlight="Services"
          subtitle="Everything you need to move — self drive, transfers, outstation and two-wheelers, all in one place."
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative h-72 overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-3 inline-grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-beige-100 backdrop-blur-md transition-colors group-hover:bg-royal-gradient group-hover:text-white">
                  <service.icon size={22} />
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-beige-100/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
