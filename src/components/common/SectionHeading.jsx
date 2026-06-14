import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/motion'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? 'text-beige-100/80' : 'text-ink/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
