# Sneh's AI/ML Portfolio

A futuristic, 3D-enhanced portfolio showcasing AI/ML projects and skills. Built with React, Three.js, and Tailwind CSS.

## Features

- **3D Neural Network Visualization** - Interactive particle system responding to mouse movement
- **Floating Geometric Shapes** - Animated wireframe 3D objects
- **Cyberpunk Theme** - Neon cyan, purple, and green color palette
- **Smooth Animations** - Framer Motion powered transitions
- **Responsive Design** - Works on all devices
- **Terminal-style About Section** - Unique bio presentation
- **3D Skill Constellation** - Interactive skill visualization

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **React Three Fiber** - 3D in React
- **Three.js** - 3D engine
- **Drei** - React Three Fiber helpers
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/      # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── 3d/              # Three.js components
│   ├── NeuralNetwork.jsx
│   ├── FloatingShapes.jsx
│   ├── ParticleField.jsx
│   ├── SkillOrb.jsx
│   └── ProjectCard3D.jsx
└── utils/
    └── constants.js  # Skills, projects data
```

## Customization

Update `src/utils/constants.js` with your own:
- Skills and proficiency levels
- Project details
- Social links
- Navigation items

## Deployment

Deploy to Vercel or GitHub Pages:

```bash
# Build
npm run build

# Preview
npm run preview
```

## License

MIT - Feel free to use and customize!
