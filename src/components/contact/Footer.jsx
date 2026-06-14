import { Car, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from 'react-icons/fa6'
import {
  SITE,
  CONTACTS,
  NAV_LINKS,
  tel,
  whatsapp,
  WHATSAPP_MESSAGE,
} from '../../data/site'
import { FLEET } from '../../data/fleet'
import { SERVICES } from '../../data/services'

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  {
    icon: FaWhatsapp,
    href: whatsapp(CONTACTS[0].phone, WHATSAPP_MESSAGE),
    label: 'WhatsApp',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-beige-100">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-royal-600/20 blur-3xl" />

      <div className="container-px relative pt-16 pb-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal-gradient text-white">
                <Car size={20} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">
                  Lakecity
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-royal-300">
                  Car Rental
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige-100/70">
              {SITE.description} Premium self-drive experience across Rajasthan.
            </p>

            {/* Socials */}
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-beige-100 transition-colors hover:bg-royal-gradient hover:text-white"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <a
                    href={l.to}
                    className="text-sm text-beige-100/70 transition-colors hover:text-royal-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet + Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Fleet & Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {FLEET.map((f) => (
                <li key={f.id}>
                  <a
                    href="#fleet"
                    className="text-sm text-beige-100/70 transition-colors hover:text-royal-300"
                  >
                    {f.name}
                  </a>
                </li>
              ))}
              {SERVICES.slice(1, 4).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-beige-100/70 transition-colors hover:text-royal-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + map */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              {CONTACTS.map((c) => (
                <li key={c.phone}>
                  <a
                    href={tel(c.phone)}
                    className="flex items-center gap-2 text-sm text-beige-100/80 transition-colors hover:text-royal-300"
                  >
                    <Phone size={14} className="text-royal-300" />
                    {c.name}: {c.display}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-sm text-beige-100/80">
                <MapPin size={14} className="mt-0.5 text-royal-300" />
                <span>{SITE.location.full}</span>
              </li>
            </ul>

            {/* Mini map embed */}
            <a
              href={SITE.location.mapShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block overflow-hidden rounded-2xl border border-white/15"
            >
              <iframe
                title="Lakecity Car Rental map"
                src={SITE.location.mapEmbedUrl}
                className="pointer-events-none h-28 w-full opacity-90"
                style={{ border: 0 }}
                loading="lazy"
              />
              <span className="flex items-center justify-between bg-white/5 px-3 py-2 text-xs font-semibold text-beige-100">
                Open in Google Maps <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-beige-100/60">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-beige-100/50">
            Self Drive · City Rides · Airport Transfer · Bike & Scooty Rental
          </p>
        </div>
      </div>
    </footer>
  )
}
