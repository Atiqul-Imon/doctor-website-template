const fs = require('fs');
const path = require('path');

// Create professional placeholder images
const images = [
  // Doctor images
  {
    path: 'public/images/doctors/dr-sarah-johnson.svg',
    type: 'doctor',
    name: 'Dr. Sarah Johnson',
    specialty: 'Internal Medicine'
  },
  
  // Patient testimonials
  {
    path: 'public/images/patients/emily-rodriguez.svg',
    type: 'patient',
    name: 'Emily Rodriguez',
    age: '35'
  },
  {
    path: 'public/images/patients/michael-chen.svg',
    type: 'patient',
    name: 'Michael Chen',
    age: '42'
  },
  {
    path: 'public/images/patients/sarah-williams.svg',
    type: 'patient',
    name: 'Sarah Williams',
    age: '28'
  },
  {
    path: 'public/images/patients/david-thompson.svg',
    type: 'patient',
    name: 'David Thompson',
    age: '55'
  },
  {
    path: 'public/images/patients/lisa-martinez.svg',
    type: 'patient',
    name: 'Lisa Martinez',
    age: '31'
  },
  {
    path: 'public/images/patients/robert-kim.svg',
    type: 'patient',
    name: 'Robert Kim',
    age: '48'
  },

  // Blog images
  {
    path: 'public/images/blog-images/annual-exam.svg',
    type: 'blog',
    title: 'Annual Physical Exam',
    category: 'Preventive Care'
  },
  {
    path: 'public/images/blog-images/diabetes-management.svg',
    type: 'blog',
    title: 'Diabetes Management',
    category: 'Chronic Care'
  },
  {
    path: 'public/images/blog-images/telemedicine.svg',
    type: 'blog',
    title: 'Telemedicine Benefits',
    category: 'Technology'
  }
];

function createDoctorSVG(name, specialty) {
  return `<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="doctorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0284c7;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#00000020"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#doctorGradient)"/>
  
  <!-- Medical Cross -->
  <g transform="translate(300, 200)" filter="url(#shadow)">
    <rect x="-15" y="-40" width="30" height="80" fill="white" rx="4"/>
    <rect x="-40" y="-15" width="80" height="30" fill="white" rx="4"/>
  </g>
  
  <!-- Doctor Name -->
  <text x="50%" y="350" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">${name}</text>
  
  <!-- Specialty -->
  <text x="50%" y="390" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.9">${specialty}</text>
  
  <!-- Professional Badge -->
  <g transform="translate(300, 450)">
    <circle cx="0" cy="0" r="40" fill="white" opacity="0.2"/>
    <text x="0" y="5" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle" font-weight="bold">MD</text>
  </g>
</svg>`;
}

function createPatientSVG(name, age) {
  const colors = ['#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4', '#84cc16'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return `<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="patientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background Circle -->
  <circle cx="75" cy="75" r="75" fill="url(#patientGradient)"/>
  
  <!-- Patient Icon -->
  <g transform="translate(75, 75)">
    <circle cx="0" cy="-10" r="15" fill="white"/>
    <path d="M-20 25 Q-20 35 -10 35 L10 35 Q20 35 20 25 L20 45 Q20 55 10 55 L-10 55 Q-20 55 -20 45 Z" fill="white"/>
  </g>
</svg>`;
}

function createBlogSVG(title, category) {
  const colors = {
    'Preventive Care': '#10b981',
    'Chronic Care': '#f59e0b',
    'Technology': '#8b5cf6'
  };
  const color = colors[category] || '#0ea5e9';
  
  return `<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="blogGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#blogGradient)"/>
  
  <!-- Medical Icon -->
  <g transform="translate(200, 100)">
    <circle cx="0" cy="0" r="40" fill="white" opacity="0.2"/>
    <rect x="-15" y="-25" width="30" height="50" fill="white" rx="4"/>
    <rect x="-25" y="-15" width="50" height="30" fill="white" rx="4"/>
  </g>
  
  <!-- Category Badge -->
  <rect x="20" y="20" width="120" height="30" fill="white" opacity="0.9" rx="15"/>
  <text x="80" y="38" font-family="Arial, sans-serif" font-size="12" fill="${color}" text-anchor="middle" font-weight="bold">${category}</text>
</svg>`;
}

// Create all images
images.forEach(img => {
  const dir = path.dirname(img.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  let svgContent = '';
  
  switch (img.type) {
    case 'doctor':
      svgContent = createDoctorSVG(img.name, img.specialty);
      break;
    case 'patient':
      svgContent = createPatientSVG(img.name, img.age);
      break;
    case 'blog':
      svgContent = createBlogSVG(img.title, img.category);
      break;
  }
  
  fs.writeFileSync(img.path, svgContent);
  console.log(`Created: ${img.path}`);
});

console.log('\n✅ All professional placeholder images created successfully!');
console.log('📝 These images are:');
console.log('   - Self-contained (no external dependencies)');
console.log('   - ThemeForest compliant');
console.log('   - Professional looking');
console.log('   - High quality SVG format');
