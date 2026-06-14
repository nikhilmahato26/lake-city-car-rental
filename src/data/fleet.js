// Premium fleet — the visual centerpiece of the site
import { Users, Gauge, Fuel, Cog, Snowflake, Luggage } from 'lucide-react'

export const FLEET = [
  {
    id: 'scorpio-s11',
    name: 'Mahindra Scorpio S11',
    category: 'Premium SUV',
    price: 5000,
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
    price: 2500,
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
    price: 3500,
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
  {
    id: 'scorpio-n',
    name: 'Mahindra Scorpio N',
    category: 'Premium SUV',
    price: 6000,
    priceUnit: '/ 24 Hours',
    description:
      'The all-new Scorpio N — bold, powerful and loaded with comfort. Ideal for long highway drives and group travel.',
    image:
      'https://images.drivespark.com/webp/fit-in/328x185/car-image/car/5081408-mahindra_scorpio_n.jpg',
    badge: 'Premium',
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
    id: 'thar-black',
    name: 'Mahindra Thar (Black)',
    category: 'Off-Road SUV',
    price: 4500,
    priceUnit: '/ 24 Hours',
    description:
      'Iconic black Thar built for adventure. Rugged off-road capability with head-turning style for every trip.',
    image:
      'https://stimg.cardekho.com/images/car-images/930x620/Mahindra/Thar/12264/1759493860311/STEALTH-BLACK_111111.jpg?tr=w-420',
    badge: 'Adventure',
    seats: 4,
    transmission: 'Manual',
    fuel: 'Diesel',
    features: [
      { icon: Users, label: '4 Seater' },
      { icon: Cog, label: 'Manual' },
      { icon: Fuel, label: 'Diesel' },
      { icon: Gauge, label: '4x4 Ready' },
    ],
  },
  {
    id: 'venue-black',
    name: 'Hyundai Venue (Black)',
    category: 'Compact SUV',
    price: 3000,
    priceUnit: '/ 24 Hours',
    description:
      'Stylish black compact SUV with premium features. Comfortable, fuel-efficient and perfect for city and highway.',
    image:
      'https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Venue/12694/1762319291173/Abyss-Black_151515.jpg?tr=w-420',
    badge: 'Comfort',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    features: [
      { icon: Users, label: '5 Seater' },
      { icon: Cog, label: 'Manual' },
      { icon: Fuel, label: 'Petrol' },
      { icon: Snowflake, label: 'Climate AC' },
    ],
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    category: 'Luxury SUV',
    price: 'On Demand',
    priceUnit: 'Contact for price',
    description:
      'The ultimate luxury SUV for special occasions and premium travel. Available on demand — contact us for pricing.',
    image:
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80',
    badge: 'On Demand',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    features: [
      { icon: Users, label: '7 Seater' },
      { icon: Cog, label: 'Automatic' },
      { icon: Fuel, label: 'Diesel' },
      { icon: Snowflake, label: 'Climate AC' },
    ],
  },
  {
    id: 'alto',
    name: 'Maruti Alto',
    category: 'Hatchback',
    price: 2000,
    priceUnit: '/ 24 Hours',
    description:
      'Compact, economical and easy to drive. The smart choice for budget city rides with great mileage.',
    image:
      'https://imgd-ct.aeplcdn.com/664x415/n/6gouesa_1463328.jpg?q=80',
    badge: 'Budget',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    features: [
      { icon: Users, label: '5 Seater' },
      { icon: Cog, label: 'Manual' },
      { icon: Fuel, label: 'Petrol' },
      { icon: Gauge, label: 'High Mileage' },
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
