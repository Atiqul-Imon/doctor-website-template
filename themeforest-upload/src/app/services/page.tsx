import { Services } from '@/components/sections/Services'
import { Appointment } from '@/components/sections/Appointment'

export const metadata = {
  title: 'Medical Services - Dr. Sarah Johnson',
  description: 'Comprehensive medical services including annual physicals, chronic disease management, preventive care, urgent care, women\'s health, and telemedicine consultations.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <Services />
      <Appointment />
    </div>
  )
}
