// Premium fleet — the visual centerpiece of the site
import { Users, Gauge, Fuel, Cog, Snowflake, Luggage } from 'lucide-react'

export const FLEET = [
  {
    id: 'scorpio-s11',
    name: 'Mahindra Scorpio S11',
    category: 'Premium SUV',
    price: 4000,
    priceUnit: '/ 24 Hours',
    description:
      'Premium SUV for long journeys, family trips and adventure travel. Commanding road presence with rugged comfort.',
    image:
      'https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-0-1767930945.png?w=560&q=40',
    badge: 'Most Popular',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Diesel',
    features: [
      { icon: Users, label: '7 Seater' },
      { icon: Cog, label: 'Manual' },
      { icon: Fuel, label: 'Diesel' },
      { icon: Snowflake, label: 'Climate AC' },
    ],
  },
  {
    id: 'swift-dzire-cng',
    name: 'Maruti Swift Dzire CNG',
    category: 'Sedan',
    price: 2000,
    priceUnit: '/ 24 Hours',
    description:
      'Affordable, fuel-efficient and perfect for city rides. Smooth handling with low running cost on CNG.',
    image:
      'https://imgd-ct.aeplcdn.com/664x415/n/p7uvk9b_1794597.jpg?q=80',
    badge: 'Best Value',
    seats: 5,
    transmission: 'Manual',
    fuel: 'CNG',
    features: [
      { icon: Users, label: '5 Seater' },
      { icon: Cog, label: 'Manual' },
      { icon: Fuel, label: 'CNG' },
      { icon: Gauge, label: 'High Mileage' },
    ],
  },
  {
    id: 'fronx-cng',
    name: 'Maruti Fronx CNG',
    category: 'Crossover',
    price: 2000,
    priceUnit: '/ 24 Hours',
    description:
      'Modern crossover with premium comfort and great mileage. Stylish design built for city and highway.',
    image:
      'https://static.caronphone.com/public/brands/21/107/931/931_1709013699.webp',
    badge: 'New Arrival',
    seats: 5,
    transmission: 'Manual',
    fuel: 'CNG',
    features: [
      { icon: Users, label: '5 Seater' },
      { icon: Cog, label: 'Manual' },
      { icon: Fuel, label: 'CNG' },
      { icon: Luggage, label: 'Spacious Boot' },
    ],
  },
]

// Additional two-wheeler rentals
export const RENTALS = [
  {
    id: 'bike-rental',
    name: 'Bike Rental',
    tagline: 'Sports & commuter bikes',
    description:
      'Powerful sports and reliable commuter bikes for the perfect ride across the city and beyond.',
    image:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'scooty-rental',
    name: 'Scooty Rental',
    tagline: 'Stylish & easy to ride',
    description:
      'Stylish, lightweight scooters — the smart way to navigate the city with comfort and great mileage.',
    image:
      'https://asset.autocarindia.com/static/models/colors/20260420_101622_06764f2b.jpg?w=640',
  },
]
