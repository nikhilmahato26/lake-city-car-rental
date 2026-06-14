import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { WHY_CHOOSE_US, STATS } from '../../data/services'
import { fadeUp, stagger, viewportOnce } from '../../utils/motion'
import { useCountUp } from '../../hooks/useCountUp'

function StatCard({ stat }) {
  const [count, ref] = useCountUp(stat.value)
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="glass-light rounded-3xl p-6 text-center shadow-soft"
    >
      <div className="font-display text-4xl font-extrabold text-gradient">
        {count}
        {stat.suffix}
      </div>
      <p className="mt-1 text-sm font-semibold text-ink/60">{stat.label}</p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-beige-50">
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-royal-100/70 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
        {/* Left: heading + features */}
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Udaipur Self Drive"
            highlight="Advantage"
            subtitle="Premium vehicles, transparent pricing and round-the-clock support — we make every drive effortless."
            align="left"
          />

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {WHY_CHOOSE_US.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-soft"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-royal-gradient text-white">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-ink/80">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: stats + image */}
        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-[2rem] shadow-card"
          >
            <img
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80"
              alt="Premium car keys handover"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="font-display text-2xl font-extrabold">
                Your keys. Your road.
              </p>
              <p className="text-sm text-beige-100/85">
                Self-drive freedom with total peace of mind.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
