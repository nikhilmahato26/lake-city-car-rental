import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { GALLERY } from '../../data/gallery'
import { scaleIn, stagger, viewportOnce } from '../../utils/motion'

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-beige-100">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments on the"
          highlight="Road"
          subtitle="SUVs, sedans, crossovers, bikes and scooties — captured across highways and city travels."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {GALLERY.map((item) => (
            <motion.figure
              key={item.id}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${item.span}`}
            >
              <img
                src={item.src}
                alt={`${item.category} — Lakecity Car Rental`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
