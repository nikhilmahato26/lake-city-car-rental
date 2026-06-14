import { motion } from 'framer-motion'
import Hero from '../components/hero/Hero'
import Fleet from '../components/fleet/Fleet'
import Services from '../components/services/Services'
import AdditionalRentals from '../components/fleet/AdditionalRentals'
import WhyChooseUs from '../components/services/WhyChooseUs'
import Gallery from '../components/gallery/Gallery'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import { pageTransition } from '../utils/motion'

export default function Home() {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Fleet />
      <AdditionalRentals />
      <Services />

      <WhyChooseUs />
      {/* <Gallery /> */}
      <Testimonials />
      <Contact />
    </motion.main>
  )
}
