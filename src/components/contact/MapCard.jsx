import { MapPin, ExternalLink } from 'lucide-react'
import { SITE } from '../../data/site'

export default function MapCard({ className = '' }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/50 bg-white shadow-card ${className}`}
    >
      <div className="relative h-64 w-full sm:h-72">
        <iframe
          title="Lakecity Car Rental location map"
          src={SITE.location.mapEmbedUrl}
          className="h-full w-full grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-royal-gradient text-white">
            <MapPin size={18} />
          </span>
          <div>
            <p className="font-display font-bold text-ink">{SITE.name}</p>
            <p className="text-sm text-ink/60">{SITE.location.full}</p>
          </div>
        </div>
        <a
          href={SITE.location.mapShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline shrink-0 !px-4 !py-2 text-xs"
        >
          Directions <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
