export interface Doctor {
  name: string
  title: string
  specialty: string
  bio: string
  image: string
  experience: number
  education: string[]
  certifications: string[]
  languages: string[]
  phone: string
  email: string
  address: Address
  socialMedia: SocialMedia
  officeHours: OfficeHours[]
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface SocialMedia {
  linkedin?: string
  twitter?: string
  facebook?: string
  instagram?: string
}

export interface OfficeHours {
  day: string
  open: string
  close: string
  isOpen: boolean
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  detailedDescription?: string
  icon: string
  price?: string
  duration?: string
  appointmentType?: string
  features: string[]
  process?: ProcessStep[]
  benefits?: string[]
  image?: string
  tags?: string[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image?: string
  date: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string
  achievements: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  year: string
  gpa?: string
  honors?: string
}

export interface Certification {
  id: string
  name: string
  issuingOrganization: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  category: string
  readTime: number
}

export interface AppointmentFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface Stats {
  patientsServed: number
  yearsExperience: number
  successfulTreatments: number
  satisfactionRate: number
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  specialty: string
  image: string
  bio: string
  education: string[]
  certifications: string[]
}

export interface InsuranceProvider {
  name: string
  logo: string
  accepted: boolean
}

export interface EmergencyContact {
  name: string
  phone: string
  available: string
  description: string
}
