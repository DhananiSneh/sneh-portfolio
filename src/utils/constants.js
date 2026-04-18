// Skills data with icons and proficiency
export const skills = [
  { name: 'Python', level: 90, category: 'programming', icon: '🐍' },
  { name: 'Machine Learning', level: 85, category: 'ai', icon: '🤖' },
  { name: 'Deep Learning', level: 80, category: 'ai', icon: '🧠' },
  { name: 'TensorFlow', level: 75, category: 'framework', icon: '🔮' },
  { name: 'PyTorch', level: 70, category: 'framework', icon: '🔥' },
  { name: 'Data Science', level: 85, category: 'data', icon: '📊' },
  { name: 'HTML/CSS', level: 90, category: 'frontend', icon: '🌐' },
  { name: 'JavaScript', level: 75, category: 'frontend', icon: '💛' },
  { name: 'React', level: 70, category: 'frontend', icon: '⚛️' },
  { name: 'SQL', level: 80, category: 'database', icon: '🗄️' },
  { name: 'Git', level: 85, category: 'tools', icon: '📦' },
  { name: 'Linux', level: 70, category: 'tools', icon: '🐧' },
]

// Projects data
export const projects = [
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural network architectures. Watch data flow through layers in real-time.',
    tech: ['Python', 'TensorFlow', 'Three.js', 'React'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
    gradient: 'from-cyan-500 to-purple-500',
  },
  {
    title: 'ML Model Deployment API',
    description: 'RESTful API for deploying and serving machine learning models with auto-scaling capabilities.',
    tech: ['Python', 'FastAPI', 'Docker', 'AWS'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'Interactive dashboard for analyzing datasets with beautiful visualizations and insights.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
    gradient: 'from-green-500 to-cyan-500',
  },
  {
    title: 'Image Classification System',
    description: 'CNN-based image classifier trained on custom datasets with high accuracy.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Flask'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: false,
    gradient: 'from-orange-500 to-red-500',
  },
]

// Social links
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'GitHub' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'LinkedIn' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { name: 'Email', url: 'mailto:sneh@example.com', icon: 'Email' },
]

// Navigation links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
