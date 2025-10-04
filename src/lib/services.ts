import { Service } from '@/types'

export const services: Service[] = [
  {
    id: '1',
    title: 'Annual Physical Exams',
    slug: 'annual-physical-exams',
    description: 'Comprehensive check-ups to assess your overall health and detect potential issues early.',
    detailedDescription: 'Our annual physical exams are comprehensive health assessments designed to evaluate your overall well-being, identify potential health risks, and establish a baseline for your health journey. These exams include a thorough medical history review, physical examination, and appropriate screening tests based on your age, gender, and risk factors.',
    image: '/images/services/annual-exam.svg',
    icon: 'Stethoscope',
    features: [
      'Complete health history review',
      'Comprehensive physical examination',
      'Vital signs monitoring (blood pressure, heart rate, temperature)',
      'Laboratory tests and screenings',
      'Immunization review and updates',
      'Health risk assessment',
      'Personalized health recommendations',
      'Preventive care planning'
    ],
    process: [
      {
        title: 'Health History Review',
        description: 'We\'ll discuss your medical history, current symptoms, lifestyle factors, and family health history.'
      },
      {
        title: 'Physical Examination',
        description: 'A thorough physical exam including heart, lungs, abdomen, neurological assessment, and more.'
      },
      {
        title: 'Screening Tests',
        description: 'Age and risk-appropriate screenings such as blood work, mammograms, or colonoscopies.'
      },
      {
        title: 'Results Discussion',
        description: 'Review of findings, health recommendations, and development of a personalized care plan.'
      }
    ],
    benefits: [
      'Early detection of health issues',
      'Prevention of chronic diseases',
      'Peace of mind about your health',
      'Personalized health recommendations',
      'Stronger doctor-patient relationship'
    ],
    duration: '60-90 minutes',
    appointmentType: 'In-person',
    tags: ['preventive care', 'health screening', 'wellness', 'annual checkup']
  },
  {
    id: '2',
    title: 'Chronic Disease Management',
    slug: 'chronic-disease-management',
    description: 'Specialized care for diabetes, hypertension, heart disease, and other chronic conditions.',
    detailedDescription: 'Our chronic disease management program provides comprehensive, coordinated care for patients with long-term health conditions. We focus on optimizing your health outcomes, preventing complications, and improving your quality of life through evidence-based treatments and lifestyle modifications.',
    image: '/images/services/chronic-care.svg',
    icon: 'Heart',
    features: [
      'Personalized treatment plans',
      'Regular health monitoring',
      'Medication management and optimization',
      'Lifestyle counseling and support',
      'Coordination with specialists',
      'Patient education and self-management training',
      'Regular follow-up appointments',
      'Emergency care planning'
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'Comprehensive evaluation of your condition, current treatments, and health goals.'
      },
      {
        title: 'Treatment Planning',
        description: 'Development of a personalized care plan tailored to your specific needs and lifestyle.'
      },
      {
        title: 'Ongoing Monitoring',
        description: 'Regular check-ups to monitor your condition and adjust treatments as needed.'
      },
      {
        title: 'Lifestyle Support',
        description: 'Guidance on diet, exercise, stress management, and other lifestyle factors.'
      }
    ],
    benefits: [
      'Better disease control',
      'Reduced risk of complications',
      'Improved quality of life',
      'Personalized care approach',
      '24/7 support and guidance'
    ],
    duration: '45-60 minutes',
    appointmentType: 'In-person or Telemedicine',
    tags: ['diabetes', 'hypertension', 'heart disease', 'chronic care', 'long-term management']
  },
  {
    id: '3',
    title: 'Preventive Care',
    slug: 'preventive-care',
    description: 'Proactive health maintenance including screenings, vaccinations, and wellness planning.',
    detailedDescription: 'Preventive care is the foundation of good health. Our comprehensive preventive care services focus on maintaining your health and preventing diseases before they develop. We provide age-appropriate screenings, immunizations, and lifestyle counseling to keep you healthy and active.',
    image: '/images/services/preventive-care.svg',
    icon: 'Shield',
    features: [
      'Age-appropriate health screenings',
      'Immunization and vaccination services',
      'Health risk assessments',
      'Lifestyle counseling',
      'Nutrition and exercise guidance',
      'Stress management support',
      'Mental health screening',
      'Wellness planning and goal setting'
    ],
    process: [
      {
        title: 'Risk Assessment',
        description: 'Evaluation of your personal and family health history to identify potential risks.'
      },
      {
        title: 'Screening Schedule',
        description: 'Development of a personalized screening schedule based on your age and risk factors.'
      },
      {
        title: 'Immunization Review',
        description: 'Review and update of vaccinations based on current guidelines and your needs.'
      },
      {
        title: 'Wellness Planning',
        description: 'Creation of a personalized wellness plan with actionable health goals.'
      }
    ],
    benefits: [
      'Prevention of serious diseases',
      'Early detection of health issues',
      'Improved overall wellness',
      'Cost-effective healthcare',
      'Peace of mind'
    ],
    duration: '30-45 minutes',
    appointmentType: 'In-person',
    tags: ['prevention', 'screening', 'vaccinations', 'wellness', 'health maintenance']
  },
  {
    id: '4',
    title: 'Urgent Care',
    slug: 'urgent-care',
    description: 'Same-day appointments for acute illnesses and minor injuries that require immediate attention.',
    detailedDescription: 'When you need immediate medical attention for non-emergency conditions, our urgent care services provide prompt, professional care. We treat a wide range of acute illnesses and minor injuries, offering same-day appointments to address your immediate health concerns.',
    image: '/images/services/urgent-care.svg',
    icon: 'Clock',
    features: [
      'Same-day appointment availability',
      'Treatment of acute illnesses',
      'Minor injury care',
      'Prescription management',
      'Diagnostic testing',
      'Follow-up care coordination',
      'Emergency referrals when needed',
      'Convenient scheduling'
    ],
    process: [
      {
        title: 'Rapid Assessment',
        description: 'Quick evaluation of your symptoms and condition to determine the best course of treatment.'
      },
      {
        title: 'Diagnosis and Treatment',
        description: 'Immediate diagnosis and treatment of your condition with appropriate medications or procedures.'
      },
      {
        title: 'Follow-up Planning',
        description: 'Development of a follow-up plan and coordination of any additional care needed.'
      },
      {
        title: 'Emergency Referral',
        description: 'If needed, immediate referral to emergency services or specialists.'
      }
    ],
    benefits: [
      'Immediate medical attention',
      'Convenient same-day appointments',
      'Comprehensive acute care',
      'Reduced emergency room visits',
      'Continuity of care with your primary physician'
    ],
    duration: '20-40 minutes',
    appointmentType: 'In-person',
    tags: ['urgent care', 'acute illness', 'same-day', 'immediate care', 'minor injuries']
  },
  {
    id: '5',
    title: 'Women\'s Health',
    slug: 'womens-health',
    description: 'Comprehensive women\'s health services including gynecological care and reproductive health.',
    detailedDescription: 'Our women\'s health services provide comprehensive, compassionate care for women at every stage of life. From routine gynecological care to reproductive health services, we focus on your unique health needs with sensitivity and expertise.',
    image: '/images/services/womens-health.svg',
    icon: 'Users',
    features: [
      'Routine gynecological exams',
      'Pap smears and cervical cancer screening',
      'Breast health assessment and mammogram coordination',
      'Contraceptive counseling and management',
      'Menopause management',
      'Reproductive health planning',
      'Sexual health counseling',
      'Pregnancy planning and preconception care'
    ],
    process: [
      {
        title: 'Health History Discussion',
        description: 'Comprehensive discussion of your gynecological and reproductive health history.'
      },
      {
        title: 'Physical Examination',
        description: 'Thorough gynecological examination including breast and pelvic exams.'
      },
      {
        title: 'Screening and Testing',
        description: 'Appropriate screenings including Pap smears, mammograms, and other tests.'
      },
      {
        title: 'Counseling and Education',
        description: 'Discussion of results, health recommendations, and reproductive health options.'
      }
    ],
    benefits: [
      'Comprehensive women\'s healthcare',
      'Early detection of gynecological issues',
      'Personalized reproductive health care',
      'Comfortable, confidential environment',
      'Continuity of care throughout life stages'
    ],
    duration: '45-60 minutes',
    appointmentType: 'In-person',
    tags: ['womens health', 'gynecology', 'reproductive health', 'screening', 'wellness']
  },
  {
    id: '6',
    title: 'Telemedicine Consultations',
    slug: 'telemedicine-consultations',
    description: 'Remote consultations for follow-up visits, medication management, and non-emergency concerns.',
    detailedDescription: 'Telemedicine consultations offer convenient, secure access to healthcare from the comfort of your home. These virtual visits are perfect for follow-up appointments, medication management, minor health concerns, and ongoing care for chronic conditions.',
    image: '/images/services/telemedicine.svg',
    icon: 'Video',
    features: [
      'Secure video consultations',
      'Follow-up visit convenience',
      'Medication management and refills',
      'Minor health concern evaluation',
      'Chronic disease monitoring',
      'Prescription management',
      'Health education and counseling',
      'Care coordination with specialists'
    ],
    process: [
      {
        title: 'Appointment Scheduling',
        description: 'Easy online scheduling with confirmation and reminder notifications.'
      },
      {
        title: 'Pre-Visit Preparation',
        description: 'Receive instructions for your virtual visit and prepare any necessary information.'
      },
      {
        title: 'Virtual Consultation',
        description: 'Secure video consultation with your doctor to discuss your health concerns.'
      },
      {
        title: 'Follow-up Care',
        description: 'Receive prescriptions, referrals, or follow-up instructions as needed.'
      }
    ],
    benefits: [
      'Convenience and accessibility',
      'Reduced travel time and costs',
      'Maintained continuity of care',
      'Safe consultation during illness',
      'Flexible scheduling options'
    ],
    duration: '15-30 minutes',
    appointmentType: 'Telemedicine',
    tags: ['telemedicine', 'virtual care', 'remote consultation', 'convenience', 'follow-up']
  }
]

export function getServices(): Service[] {
  return services
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => 
    service.tags?.some(tag => 
      tag.toLowerCase().includes(category.toLowerCase())
    )
  )
}

export function getRelatedServices(currentServiceId: string, limit: number = 3): Service[] {
  const currentService = services.find(service => service.id === currentServiceId)
  if (!currentService) return []

  return services
    .filter(service => service.id !== currentServiceId)
    .slice(0, limit)
}
