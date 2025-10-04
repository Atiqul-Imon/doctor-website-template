// Enhanced script to create better placeholder images
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images',
  'public/images/services',
  'public/images/testimonials',
  'public/images/blog'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate high-quality SVG placeholders with better design
const generateDoctorImage = (width, height) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e0f2fe;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="icon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0284c7;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="50%" cy="35%" r="80" fill="url(#icon)" opacity="0.1"/>
    <g transform="translate(50%, 50%)">
      <!-- Doctor Icon -->
      <g transform="translate(-40, -40)">
        <path d="M20 10h-6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" 
              fill="url(#icon)" opacity="0.3"/>
        <circle cx="40" cy="25" r="15" fill="url(#icon)" opacity="0.2"/>
        <rect x="30" y="35" width="20" height="25" rx="2" fill="url(#icon)" opacity="0.2"/>
      </g>
    </g>
    <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="16" fill="#0369a1" text-anchor="middle" dy=".3em">Doctor Photo</text>
  </svg>`;
};

const generateServiceImage = (width, height, title, color) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${color}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color}20;stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color}10;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg-${color})"/>
    <circle cx="50%" cy="40%" r="60" fill="${color}" opacity="0.1"/>
    <g transform="translate(50%, 50%)">
      <g transform="translate(-30, -30)">
        <rect x="20" y="20" width="20" height="20" rx="3" fill="${color}" opacity="0.3"/>
        <circle cx="30" cy="15" r="8" fill="${color}" opacity="0.4"/>
        <rect x="15" y="25" width="30" height="4" rx="2" fill="${color}" opacity="0.3"/>
        <rect x="15" y="32" width="25" height="4" rx="2" fill="${color}" opacity="0.3"/>
      </g>
    </g>
    <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="14" fill="${color}" text-anchor="middle" dy=".3em">${title}</text>
  </svg>`;
};

const generateTestimonialImage = (width, height, initials) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="avatar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0284c7;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#f8fafc"/>
    <circle cx="50%" cy="50%" r="60" fill="url(#avatar)"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em" font-weight="bold">${initials}</text>
  </svg>`;
};

const generateBlogImage = (width, height, title) => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blog-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#blog-bg)"/>
    <rect x="20" y="20" width="80" height="60" rx="4" fill="#64748b" opacity="0.1"/>
    <rect x="25" y="25" width="70" height="4" rx="2" fill="#64748b" opacity="0.3"/>
    <rect x="25" y="35" width="60" height="4" rx="2" fill="#64748b" opacity="0.3"/>
    <rect x="25" y="45" width="65" height="4" rx="2" fill="#64748b" opacity="0.3"/>
    <rect x="25" y="55" width="55" height="4" rx="2" fill="#64748b" opacity="0.3"/>
    <circle cx="30" cy="70" r="8" fill="#0ea5e9" opacity="0.3"/>
    <text x="50%" y="90%" font-family="Arial, sans-serif" font-size="12" fill="#64748b" text-anchor="middle" dy=".3em">${title}</text>
  </svg>`;
};

// Create all placeholder images
const images = [
  // Doctor main image
  {
    path: 'public/images/doctor-sarah.jpg',
    svg: generateDoctorImage(600, 800)
  },
  
  // Service images
  {
    path: 'public/images/services/annual-exam.jpg',
    svg: generateServiceImage(400, 300, 'Annual Exam', '#0ea5e9')
  },
  {
    path: 'public/images/services/chronic-care.jpg',
    svg: generateServiceImage(400, 300, 'Chronic Care', '#dc2626')
  },
  {
    path: 'public/images/services/preventive-care.jpg',
    svg: generateServiceImage(400, 300, 'Preventive Care', '#16a34a')
  },
  {
    path: 'public/images/services/urgent-care.jpg',
    svg: generateServiceImage(400, 300, 'Urgent Care', '#d97706')
  },
  {
    path: 'public/images/services/womens-health.jpg',
    svg: generateServiceImage(400, 300, 'Women\'s Health', '#db2777')
  },
  {
    path: 'public/images/services/telemedicine.jpg',
    svg: generateServiceImage(400, 300, 'Telemedicine', '#64748b')
  },
  
  // Testimonial images
  {
    path: 'public/images/testimonials/emily-rodriguez.jpg',
    svg: generateTestimonialImage(150, 150, 'ER')
  },
  {
    path: 'public/images/testimonials/michael-chen.jpg',
    svg: generateTestimonialImage(150, 150, 'MC')
  },
  {
    path: 'public/images/testimonials/sarah-williams.jpg',
    svg: generateTestimonialImage(150, 150, 'SW')
  },
  {
    path: 'public/images/testimonials/david-thompson.jpg',
    svg: generateTestimonialImage(150, 150, 'DT')
  },
  {
    path: 'public/images/testimonials/lisa-martinez.jpg',
    svg: generateTestimonialImage(150, 150, 'LM')
  },
  {
    path: 'public/images/testimonials/robert-kim.jpg',
    svg: generateTestimonialImage(150, 150, 'RK')
  },
  
  // Blog images
  {
    path: 'public/images/blog/annual-physical-exam.jpg',
    svg: generateBlogImage(400, 250, 'Annual Physical Exam')
  },
  {
    path: 'public/images/blog/diabetes-management.jpg',
    svg: generateBlogImage(400, 250, 'Diabetes Management')
  },
  {
    path: 'public/images/blog/telemedicine-benefits.jpg',
    svg: generateBlogImage(400, 250, 'Telemedicine Benefits')
  }
];

// Write all images
images.forEach(image => {
  const dir = path.dirname(image.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(image.path.replace('.jpg', '.svg'), image.svg);
});

console.log('✅ Generated high-quality placeholder images');
console.log('📁 Created directories:', directories);
console.log('🖼️ Generated SVG placeholders for:', images.length, 'images');
console.log('\nNote: These are professional placeholder images. Replace with actual photos before deployment.');
