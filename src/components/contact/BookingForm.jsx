import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  PRIMARY_PHONE,
  tel,
  whatsapp,
} from '../../data/site'
import { FLEET, RENTALS } from '../../data/fleet'

const vehicleOptions = [
  ...FLEET.map((f) => f.name),
  ...RENTALS.map((r) => r.name),
  'Other / Not Sure',
]

const durations = [
  '12 Hours',
  '24 Hours',
  '2 - 3 Days',
  'Weekly',
  'Monthly',
  'Outstation Trip',
]

const inputBase =
  'w-full rounded-2xl border border-ink/10 bg-beige-50 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-all focus:border-royal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-royal-100'

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const message = `*New Booking Request — Udaipur Self Drive*%0A
*Name:* ${data.name}
*Phone:* ${data.phone}
*Vehicle:* ${data.vehicle}
*Travel Date:* ${data.date}
*Duration:* ${data.duration}
*Message:* ${data.message || '—'}`
    window.open(whatsapp(PRIMARY_PHONE, message.replace(/%0A/g, '\n')), '_blank')
    reset()
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/60 bg-white p-6 shadow-card sm:p-8"
    >
      <h3 className="font-display text-2xl font-extrabold text-ink">
        Book Your Ride
      </h3>
      <p className="mt-1 text-sm text-ink/60">
        Fill the form and we’ll confirm your booking instantly on WhatsApp.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className={inputBase}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
            Phone
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            className={inputBase}
            {...register('phone', {
              required: 'Phone is required',
              pattern: {
                value: /^[0-9+\s-]{10,15}$/,
                message: 'Enter a valid phone number',
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Vehicle */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
            Vehicle
          </label>
          <select
            className={inputBase}
            defaultValue=""
            {...register('vehicle', { required: 'Please select a vehicle' })}
          >
            <option value="" disabled>
              Select a vehicle
            </option>
            {vehicleOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
          {errors.vehicle && (
            <p className="mt-1 text-xs text-red-500">{errors.vehicle.message}</p>
          )}
        </div>

        {/* Travel date */}
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
            Travel Date
          </label>
          <input
            type="date"
            className={inputBase}
            {...register('date', { required: 'Travel date is required' })}
          />
          {errors.date && (
            <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
          )}
        </div>

        {/* Duration */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
            Rental Duration
          </label>
          <select
            className={inputBase}
            defaultValue=""
            {...register('duration', { required: 'Select duration' })}
          >
            <option value="" disabled>
              Select duration
            </option>
            {durations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.duration && (
            <p className="mt-1 text-xs text-red-500">
              {errors.duration.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink/60">
            Message
          </label>
          <textarea
            rows={3}
            placeholder="Pickup location, special requests, etc."
            className={`${inputBase} resize-none`}
            {...register('message')}
          />
        </div>
      </div>

      {isSubmitSuccessful && (
        <p className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
          ✓ Opening WhatsApp with your booking details…
        </p>
      )}

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="btn-primary flex-1 min-w-[150px]">
          <Send size={16} /> Book Now
        </button>
        <a href={tel(PRIMARY_PHONE)} className="btn-dark">
          <Phone size={16} /> Call
        </a>
        <a
          href={whatsapp(PRIMARY_PHONE, 'Hi! I want to book a vehicle.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp size={16} /> WhatsApp
        </a>
      </div>
    </motion.form>
  )
}
