/**
 * Application constants and configuration
 */

export const PORTFOLIO_CONFIG = {
  // Personal Info
  PERSONAL: {
    NAME: 'Muhammad Faizan',
    TITLE: 'Web Developer & SEO Expert',
    BIO: 'Full-stack web developer specializing in modern technologies and search engine optimization. Currently pursuing BBA degree while building high-performance web applications.',
  },

  // Canvas Settings
  CANVAS: {
    FRAME_COUNT: 240,
    SCROLL_MULTIPLIER: 5, // Height multiplier for scroll distance (500vh)
    PRELOAD_TIMEOUT: 30000, // 30 seconds
  },

  // Colors
  COLORS: {
    BACKGROUND: '#121212',
    SURFACE: '#1a1a1a',
    BORDER: 'rgba(255, 255, 255, 0.1)',
    BORDER_HOVER: 'rgba(255, 255, 255, 0.2)',
    TEXT_PRIMARY: '#ffffff',
    TEXT_SECONDARY: '#a0a0a0',
    TEXT_MUTED: '#666666',
    ACCENT_BLUE: '#3b82f6',
    ACCENT_PURPLE: '#9333ea',
  },

  // Animation Timings
  ANIMATION: {
    TRANSITION_SHORT: 300, // ms
    TRANSITION_MEDIUM: 500, // ms
    TRANSITION_LONG: 800, // ms
    STAGGER_DELAY: 100, // ms
  },

  // Scroll Sections
  SCROLL: {
    HERO_FADE_END: 0.2, // 20% of scroll
    MESSAGE_START: 0.3, // 30% of scroll
    MESSAGE_END: 0.5, // 50% of scroll
    VALUE_START: 0.6, // 60% of scroll
    VALUE_END: 1, // 100% of scroll
  },

  // Typography
  TYPOGRAPHY: {
    FONT_FAMILY: 'Inter, system-ui, sans-serif',
    FONT_WEIGHTS: {
      LIGHT: 300,
      NORMAL: 400,
      SEMIBOLD: 600,
      BOLD: 700,
    },
  },

  // Education
  EDUCATION: {
    DEGREE: 'Bachelor of Business Administration (BBA)',
    FIELD: 'Business Administration',
  },

  // Analytics (if needed)
  ANALYTICS: {
    ENABLED: false,
    TRACKING_ID: '',
  },
};

export const PROJECTS_SAMPLE = [
  {
    id: 1,
    title: 'Motion Design System',
    description: 'A comprehensive design system with scroll-triggered animations and component library built with Framer Motion.',
    tags: ['React', 'Framer Motion', 'Design System', 'TypeScript'],
    category: 'Design System',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'High-performance e-commerce platform with advanced filtering, real-time updates, and smooth micro-interactions.',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'Performance'],
    category: 'Web App',
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard with real-time data visualization, smooth animations, and responsive design.',
    tags: ['D3.js', 'React', 'Canvas', 'Analytics'],
    category: 'Dashboard',
  },
];
