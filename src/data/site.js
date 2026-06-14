// Central business / site configuration for Lakecity Car Rental

export const SITE = {
  name: 'Lakecity Car Rental',
  tagline: 'Drive Your Journey Your Way',
  description:
    'Premium self-drive cars, city rides, airport transfers, bikes and scooty rentals.',
  location: {
    line1: 'Pratap Nagar',
    line2: 'Old RTO',
    region: 'Rajasthan',
    full: 'Pratap Nagar, Old RTO, Rajasthan',
    mapShareUrl: 'https://share.google/wAgkcR57wAfv9pU0X',
    // Generic embeddable map pointed at Pratap Nagar, Old RTO area
    mapEmbedUrl:
      'https://www.google.com/maps?q=Pratap%20Nagar%20Old%20RTO%20Rajasthan&output=embed',
  },
}

export const CONTACTS = [
  { name: 'Shivin', phone: '+919351036449', display: '+91 93510 36449' },
  { name: 'Raj', phone: '+919509485216', display: '+91 95094 85216' },
]

// Primary number used for quick CTAs
export const PRIMARY_PHONE = CONTACTS[0].phone

export const tel = (phone) => `tel:${phone.replace(/\s+/g, '')}`

export const whatsapp = (phone, message) =>
  `https://wa.me/${phone.replace(/[^0-9]/g, '')}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`

export const WHATSAPP_MESSAGE =
  "Hi Lakecity Car Rental! I'd like to book a vehicle. Please share availability & pricing.";

export const NAV_LINKS = [
  { label: 'Home', to: '#home' },
  { label: 'Fleet', to: '#fleet' },
  { label: 'Services', to: '#services' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Reviews', to: '#testimonials' },
  { label: 'Contact', to: '#contact' },
]
