import { Appointment } from '@/components/sections/Appointment'

export const metadata = {
  title: 'Book Appointment - Dr. Sarah Johnson',
  description: 'Schedule your medical appointment with Dr. Sarah Johnson. Online booking system for annual physicals, consultations, urgent care, and telemedicine visits.',
}

export default function AppointmentPage() {
  return (
    <div className="min-h-screen pt-20">
      <Appointment />
    </div>
  )
}
