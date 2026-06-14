import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import FleetCard from './FleetCard'
import { FLEET } from '../../data/fleet'
import { stagger, viewportOnce } from '../../utils/motion'

export default function Fleet() {
  return (
    <section id="fleet" className="section relative bg-beige-50">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-royal-100/60 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Premium Fleet"
          title="Choose Your"
          highlight="Perfect Ride"
          subtitle="Hand-picked, well-maintained vehicles for every journey — from rugged SUVs to fuel-efficient sedans and crossovers."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FLEET.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
