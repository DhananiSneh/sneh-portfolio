// Skills data with icons and proficiency
export const skills = [
  // Programming
  { name: 'Python', level: 85, category: 'programming', icon: '🐍' },
  { name: 'Java', level: 80, category: 'programming', icon: '☕' },
  { name: 'JavaScript', level: 70, category: 'programming', icon: '💛' },
  { name: 'PHP', level: 75, category: 'programming', icon: '🐘' },
  // AI/ML
  { name: 'Machine Learning', level: 75, category: 'ai', icon: '🤖' },
  { name: 'Data Science', level: 70, category: 'ai', icon: '📊' },
  { name: 'NumPy/Pandas', level: 75, category: 'ai', icon: '🔢' },
  { name: 'TensorFlow', level: 60, category: 'ai', icon: '🔮' },
  // Frontend
  { name: 'HTML/CSS', level: 90, category: 'frontend', icon: '🌐' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: '🅱️' },
  { name: 'React', level: 65, category: 'frontend', icon: '⚛️' },
  // Backend
  { name: 'Laravel', level: 75, category: 'backend', icon: '🔶' },
  { name: 'SQL', level: 80, category: 'backend', icon: '🗄️' },
  // Tools
  { name: 'Git', level: 80, category: 'tools', icon: '📦' },
  { name: 'Docker', level: 50, category: 'tools', icon: '🐳' },
]

// Projects data
export const projects = [
  {
    title: 'House Price Predictor',
    description: 'ML model predicting house prices using linear regression with 92% accuracy on test data.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Student Management System',
    description: 'Full-stack web app for managing student records, attendance, and grades. Built with Laravel.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Titanic Survival Classifier',
    description: 'Binary classification model predicting passenger survival on the Titanic dataset using Random Forest.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
    gradient: 'from-green-500 to-cyan-500',
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio! A futuristic 3D-enhanced site showcasing AI/ML projects and skills.',
    tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
    gradient: 'from-orange-500 to-red-500',
  },
]

// Social links
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/sneh', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sneh', icon: 'LinkedIn' },
  { name: 'Twitter', url: 'https://twitter.com/sneh', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:sneh@email.com', icon: 'Email' },
]

// Navigation links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
