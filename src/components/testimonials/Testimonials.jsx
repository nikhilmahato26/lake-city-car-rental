import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from '../common/SectionHeading'
import { TESTIMONIALS } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden bg-royal-950"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-royal-600/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-beige-500/10 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by"
          highlight="Our Riders"
          subtitle="Real stories from customers who trust Lakecity Car Rental for every journey."
          light
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <figure className="glass flex h-full flex-col rounded-3xl p-7 text-white">
                  <Quote className="text-beige-200/60" size={34} />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-beige-100/90">
                    “{t.quote}”
                  </blockquote>

                  <div className="mt-5 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-beige-300 text-beige-300"
                      />
                    ))}
                  </div>

                  <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full border-2 border-white/30 object-cover"
                    />
                    <div>
                      <p className="font-display font-bold">{t.name}</p>
                      <p className="text-xs text-beige-200/70">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
