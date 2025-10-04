import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Testimonials } from '@/components/sections/Testimonials'

export const metadata = {
  title: 'About Dr. Sarah Johnson - Medical Professional',
  description: 'Learn about Dr. Sarah Johnson\'s medical background, education, certifications, and professional experience in internal medicine.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <About />
      <Experience />
      <Testimonials />
    </div>
  )
}
