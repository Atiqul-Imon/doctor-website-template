import { Contact } from '@/components/sections/Contact'

export const metadata = {
  title: 'Contact Dr. Sarah Johnson - Get in Touch',
  description: 'Contact Dr. Sarah Johnson for appointments, medical questions, or general inquiries. Office hours, location, phone number, and email contact information.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Contact />
    </div>
  )
}
