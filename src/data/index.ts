import { Doctor, Service, Testimonial, Experience, Stats, FAQ, BlogPost } from '@/types'

export const doctorData: Doctor = {
  name: 'Dr. Sarah Johnson',
  title: 'MD, Internal Medicine',
  specialty: 'Internal Medicine & Preventive Care',
  bio: 'Dr. Sarah Johnson is a board-certified internal medicine physician with over 15 years of experience in providing comprehensive medical care. She specializes in preventive medicine, chronic disease management, and patient education. Dr. Johnson is committed to building long-term relationships with her patients and providing personalized, evidence-based care.',
  image: '/images/doctors/dr-sarah-johnson.svg',
  experience: 15,
  education: [
    'MD - Harvard Medical School (2008)',
    'BS Biology - Stanford University (2004)',
    'Residency - Johns Hopkins Hospital (2008-2011)',
    'Fellowship - Preventive Medicine (2011-2012)'
  ],
  certifications: [
    'American Board of Internal Medicine',
    'American College of Physicians (FACP)',
    'National Board of Medical Examiners',
    'Advanced Cardiac Life Support (ACLS)',
    'Basic Life Support (BLS)'
  ],
  languages: ['English', 'Spanish', 'French'],
  phone: '(555) 123-4567',
  email: 'dr.sarah.johnson@medicalpractice.com',
  address: {
    street: '123 Medical Plaza, Suite 200',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'USA'
  },
  socialMedia: {
    linkedin: 'https://linkedin.com/in/dr-sarah-johnson',
    twitter: 'https://twitter.com/drsarahjohnson'
  },
  officeHours: [
    { day: 'Monday', open: '8:00 AM', close: '5:00 PM', isOpen: true },
    { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM', isOpen: true },
    { day: 'Wednesday', open: '8:00 AM', close: '5:00 PM', isOpen: true },
    { day: 'Thursday', open: '8:00 AM', close: '5:00 PM', isOpen: true },
    { day: 'Friday', open: '8:00 AM', close: '3:00 PM', isOpen: true },
    { day: 'Saturday', open: '9:00 AM', close: '1:00 PM', isOpen: false },
    { day: 'Sunday', open: 'Closed', close: 'Closed', isOpen: false }
  ]
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Annual Physical Exams',
    description: 'Comprehensive health assessments to monitor your overall wellness and detect potential health issues early.',
    icon: 'Stethoscope',
    price: '$250',
    duration: '60 minutes',
    features: [
      'Complete medical history review',
      'Physical examination',
      'Vital signs monitoring',
      'Blood pressure check',
      'Heart and lung assessment',
      'Preventive health recommendations'
    ],
    image: '/images/services/annual-exam.svg'
  },
  {
    id: '2',
    title: 'Chronic Disease Management',
    description: 'Specialized care for diabetes, hypertension, heart disease, and other chronic conditions.',
    icon: 'Heart',
    price: '$200',
    duration: '45 minutes',
    features: [
      'Medication management',
      'Lifestyle counseling',
      'Regular monitoring',
      'Treatment optimization',
      'Coordination with specialists',
      'Patient education'
    ],
    image: '/images/services/chronic-care.svg'
  },
  {
    id: '3',
    title: 'Preventive Care',
    description: 'Proactive health maintenance including screenings, vaccinations, and wellness planning.',
    icon: 'Shield',
    price: '$180',
    duration: '30 minutes',
    features: [
      'Health screenings',
      'Immunizations',
      'Cancer screenings',
      'Health risk assessment',
      'Lifestyle modifications',
      'Wellness planning'
    ],
    image: '/images/services/preventive-care.svg'
  },
  {
    id: '4',
    title: 'Urgent Care',
    description: 'Same-day appointments for acute illnesses and minor injuries that require immediate attention.',
    icon: 'Clock',
    price: '$150',
    duration: '30 minutes',
    features: [
      'Same-day appointments',
      'Acute illness treatment',
      'Minor injury care',
      'Prescription management',
      'Follow-up care planning',
      'Emergency referrals when needed'
    ],
    image: '/images/services/urgent-care.svg'
  },
  {
    id: '5',
    title: 'Women\'s Health',
    description: 'Comprehensive women\'s health services including gynecological care and reproductive health.',
    icon: 'Users',
    price: '$220',
    duration: '45 minutes',
    features: [
      'Annual gynecological exams',
      'Pap smears',
      'Breast health screening',
      'Contraceptive counseling',
      'Menopause management',
      'Reproductive health planning'
    ],
    image: '/images/services/womens-health.svg'
  },
  {
    id: '6',
    title: 'Telemedicine Consultations',
    description: 'Remote consultations for follow-up visits, medication management, and non-emergency concerns.',
    icon: 'Video',
    price: '$120',
    duration: '20 minutes',
    features: [
      'Video consultations',
      'Prescription refills',
      'Follow-up visits',
      'Medication adjustments',
      'Health education',
      'Convenient scheduling'
    ],
    image: '/images/services/telemedicine.svg'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Rodriguez',
    role: 'Patient',
    content: 'Dr. Johnson has been my primary care physician for over 5 years. Her thorough approach and genuine care for her patients make her exceptional. She always takes the time to explain everything clearly and makes me feel comfortable.',
    rating: 5,
    image: '/images/patients/emily-rodriguez.svg',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Patient',
    content: 'I was diagnosed with diabetes last year, and Dr. Johnson has been instrumental in helping me manage my condition. Her expertise in chronic disease management and her supportive approach have made a significant difference in my quality of life.',
    rating: 5,
    image: '/images/patients/michael-chen.svg',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    role: 'Patient',
    content: 'Dr. Johnson\'s preventive care approach caught my hypertension early. Her comprehensive annual exams and proactive recommendations have helped me maintain excellent health. I highly recommend her to anyone looking for a caring, knowledgeable physician.',
    rating: 5,
    image: '/images/patients/sarah-williams.svg',
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Patient',
    content: 'The telemedicine consultations have been a game-changer for my busy schedule. Dr. Johnson\'s remote care is just as thorough as in-person visits, and the convenience is unmatched. Her professionalism shines through even in virtual settings.',
    rating: 5,
    image: '/images/patients/david-thompson.svg',
    date: '2024-01-05'
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    role: 'Patient',
    content: 'Dr. Johnson\'s women\'s health services are comprehensive and comfortable. She creates a safe space for discussing sensitive health topics and provides excellent care. Her attention to detail and patient-centered approach are outstanding.',
    rating: 5,
    image: '/images/patients/lisa-martinez.svg',
    date: '2024-01-03'
  },
  {
    id: '6',
    name: 'Robert Kim',
    role: 'Patient',
    content: 'I\'ve been seeing Dr. Johnson for urgent care needs for several years. Her quick diagnosis and effective treatment have saved me multiple trips to the emergency room. Her expertise and efficiency are remarkable.',
    rating: 5,
    image: '/images/patients/robert-kim.svg',
    date: '2023-12-28'
  }
]

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Senior Internal Medicine Physician',
    company: 'San Francisco Medical Group',
    location: 'San Francisco, CA',
    startDate: '2015-01-01',
    endDate: undefined,
    description: 'Lead physician providing comprehensive internal medicine care with focus on preventive medicine and chronic disease management.',
    achievements: [
      'Managed over 2,000 patients with chronic conditions',
      'Implemented telemedicine program serving 500+ patients',
      'Achieved 98% patient satisfaction rating',
      'Mentored 12 medical residents and fellows'
    ]
  },
  {
    id: '2',
    title: 'Internal Medicine Physician',
    company: 'California Medical Center',
    location: 'Los Angeles, CA',
    startDate: '2012-07-01',
    endDate: '2014-12-31',
    description: 'Provided primary care services with emphasis on preventive medicine and patient education.',
    achievements: [
      'Developed comprehensive diabetes management program',
      'Reduced hospital readmission rates by 25%',
      'Led quality improvement initiatives',
      'Published research on preventive care outcomes'
    ]
  },
  {
    id: '3',
    title: 'Internal Medicine Resident',
    company: 'Johns Hopkins Hospital',
    location: 'Baltimore, MD',
    startDate: '2008-07-01',
    endDate: '2011-06-30',
    description: 'Completed comprehensive internal medicine residency training with focus on evidence-based medicine.',
    achievements: [
      'Chief Resident in final year',
      'Published 3 peer-reviewed research papers',
      'Received Excellence in Patient Care Award',
      'Led resident education committee'
    ]
  }
]

export const stats: Stats = {
  patientsServed: 2500,
  yearsExperience: 15,
  successfulTreatments: 98,
  satisfactionRate: 98
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact our office to verify your specific plan coverage.',
    category: 'Insurance'
  },
  {
    id: '2',
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling our office at (555) 123-4567, using our online booking system, or through the patient portal. We offer same-day appointments for urgent care needs.',
    category: 'Appointments'
  },
  {
    id: '3',
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your insurance card, photo ID, list of current medications, medical records from previous providers, and any relevant test results or imaging studies.',
    category: 'Appointments'
  },
  {
    id: '4',
    question: 'Do you offer telemedicine consultations?',
    answer: 'Yes, we offer telemedicine consultations for follow-up visits, medication management, and non-emergency concerns. These appointments are convenient and provide the same quality care as in-person visits.',
    category: 'Telemedicine'
  },
  {
    id: '5',
    question: 'What are your office hours?',
    answer: 'Our office hours are Monday through Friday from 8:00 AM to 5:00 PM, with extended hours until 3:00 PM on Fridays. We are closed on weekends except for emergency consultations.',
    category: 'Office Hours'
  },
  {
    id: '6',
    question: 'How long are typical appointments?',
    answer: 'Appointment lengths vary by service type: annual physicals are 60 minutes, routine visits are 30-45 minutes, urgent care visits are 30 minutes, and telemedicine consultations are 20 minutes.',
    category: 'Appointments'
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Importance of Annual Physical Exams',
    slug: 'importance-annual-physical-exams',
    excerpt: 'Regular physical exams are crucial for maintaining good health and catching potential issues early. Learn why annual check-ups are essential for your wellbeing.',
    content: 'Annual physical exams are a cornerstone of preventive healthcare...',
    image: '/images/blog-images/annual-exam.svg',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-15',
    tags: ['preventive care', 'health screening', 'annual exam'],
    category: 'Preventive Care',
    readTime: 5
  },
  {
    id: '2',
    title: 'Managing Diabetes Through Lifestyle Changes',
    slug: 'managing-diabetes-lifestyle-changes',
    excerpt: 'Discover effective lifestyle modifications that can help manage diabetes and improve your overall quality of life.',
    content: 'Diabetes management goes beyond medication...',
    image: '/images/blog-images/diabetes-management.svg',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-10',
    tags: ['diabetes', 'lifestyle', 'chronic disease'],
    category: 'Chronic Disease Management',
    readTime: 7
  },
  {
    id: '3',
    title: 'The Benefits of Telemedicine for Healthcare',
    slug: 'benefits-telemedicine-healthcare',
    excerpt: 'Explore how telemedicine is revolutionizing healthcare delivery and making medical care more accessible to patients.',
    content: 'Telemedicine has transformed the way we deliver healthcare...',
    image: '/images/blog-images/telemedicine.svg',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-05',
    tags: ['telemedicine', 'digital health', 'accessibility'],
    category: 'Technology',
    readTime: 6
  }
]
