// Script to generate placeholder images for the template
// Run with: node scripts/generate-placeholders.js

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

// Generate SVG placeholders
const generateSVG = (width, height, text, bgColor = '#f3f4f6', textColor = '#6b7280') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
};

// Create placeholder images
const placeholders = [
  {
    path: 'public/images/doctor-sarah.jpg',
    svg: generateSVG(600, 800, 'Doctor Photo', '#e0f2fe', '#0369a1')
  },
  {
    path: 'public/images/services/annual-exam.jpg',
    svg: generateSVG(400, 300, 'Annual Exam', '#f0f9ff', '#0ea5e9')
  },
  {
    path: 'public/images/services/chronic-care.jpg',
    svg: generateSVG(400, 300, 'Chronic Care', '#fef2f2', '#dc2626')
  },
  {
    path: 'public/images/services/preventive-care.jpg',
    svg: generateSVG(400, 300, 'Preventive Care', '#f0fdf4', '#16a34a')
  },
  {
    path: 'public/images/services/urgent-care.jpg',
    svg: generateSVG(400, 300, 'Urgent Care', '#fffbeb', '#d97706')
  },
  {
    path: 'public/images/services/womens-health.jpg',
    svg: generateSVG(400, 300, 'Women\'s Health', '#fdf2f8', '#db2777')
  },
  {
    path: 'public/images/services/telemedicine.jpg',
    svg: generateSVG(400, 300, 'Telemedicine', '#f8fafc', '#64748b')
  },
  {
    path: 'public/images/testimonials/emily-rodriguez.jpg',
    svg: generateSVG(150, 150, 'E.R.', '#f3f4f6', '#6b7280')
  },
  {
    path: 'public/images/testimonials/michael-chen.jpg',
    svg: generateSVG(150, 150, 'M.C.', '#f3f4f6', '#6b7280')
  },
  {
    path: 'public/images/testimonials/sarah-williams.jpg',
    svg: generateSVG(150, 150, 'S.W.', '#f3f4f6', '#6b7280')
  },
  {
    path: 'public/images/testimonials/david-thompson.jpg',
    svg: generateSVG(150, 150, 'D.T.', '#f3f4f6', '#6b7280')
  },
  {
    path: 'public/images/testimonials/lisa-martinez.jpg',
    svg: generateSVG(150, 150, 'L.M.', '#f3f4f6', '#6b7280')
  },
  {
    path: 'public/images/testimonials/robert-kim.jpg',
    svg: generateSVG(150, 150, 'R.K.', '#f3f4f6', '#6b7280')
  },
  {
    path: 'public/images/blog/annual-physical-exam.jpg',
    svg: generateSVG(400, 250, 'Blog Post 1', '#f8fafc', '#64748b')
  },
  {
    path: 'public/images/blog/diabetes-management.jpg',
    svg: generateSVG(400, 250, 'Blog Post 2', '#f8fafc', '#64748b')
  },
  {
    path: 'public/images/blog/telemedicine-benefits.jpg',
    svg: generateSVG(400, 250, 'Blog Post 3', '#f8fafc', '#64748b')
  }
];

// Write SVG files
placeholders.forEach(placeholder => {
  const dir = path.dirname(placeholder.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(placeholder.path.replace('.jpg', '.svg'), placeholder.svg);
});

console.log('✅ Generated placeholder images');
console.log('📁 Created directories:', directories);
console.log('🖼️ Generated SVG placeholders for:', placeholders.length, 'images');
console.log('\nNote: Replace these SVG files with actual images before deployment.');
