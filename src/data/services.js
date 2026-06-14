import {
  Car,
  Plane,
  MapPinned,
  Building2,
  Bike,
  Footprints,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'self-drive',
    title: 'Self Drive Cars',
    icon: Car,
    description:
      'Take the wheel. Premium, well-maintained cars on flexible self-drive rentals.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'airport',
    title: 'Airport Pickup & Drop',
    icon: Plane,
    description:
      'On-time, hassle-free airport transfers with professional support, day or night.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'outstation',
    title: 'Outstation Trips',
    icon: MapPinned,
    description:
      'Comfortable long-distance journeys to any destination across Rajasthan and beyond.',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'city-rides',
    title: 'City Rides',
    icon: Building2,
    description:
      'Quick, affordable rides around the city — perfect for daily errands and meetings.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bike',
    title: 'Bike Rental',
    icon: Bike,
    description:
      'Sports and commuter bikes available on demand for solo riders and quick trips.',
    image:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'scooty',
    title: 'Scooty Rental',
    icon: Footprints,
    description:
      'Lightweight, stylish scooters for an effortless and economical city commute.',
    image:
      'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80',
  },
]

export const WHY_CHOOSE_US = [
  'Well Maintained Vehicles',
  'Affordable Pricing',
  'Self Drive Option',
  'Clean & Sanitized Cars',
  'Professional Support',
  'Flexible Rental',
  'Bike & Scooty Available',
  '24/7 Booking Assistance',
]

export const STATS = [
  { value: 500, suffix: '+', label: 'Happy Customers' },
  { value: 25, suffix: '+', label: 'Vehicles in Fleet' },
  { value: 50, suffix: 'K+', label: 'KMs Driven' },
  { value: 24, suffix: '/7', label: 'Booking Support' },
]
