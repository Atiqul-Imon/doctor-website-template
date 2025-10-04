import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Experience } from '@/components/sections/Experience'
import { Statistics } from '@/components/sections/Statistics'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Statistics />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  )
}
