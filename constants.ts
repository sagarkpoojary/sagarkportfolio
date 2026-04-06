import { Project, NavItem, Skill, SocialLinks } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    description: 'A high-precision Machine Learning model designed to identify and prevent fraudulent transactions in real-time. Implemented using advanced anomaly detection algorithms to enhance financial security systems.',
    tags: ['Python', 'Scikit-Learn', 'Security', 'MLOps'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'scam-detection',
    title: 'Email Scam Detection System',
    description: 'NLP-driven security solution for analyzing email patterns to detect phishing and scam attempts. Focuses on protecting corporate communication channels from social engineering attacks.',
    tags: ['NLP', 'Cybersecurity', 'Python', 'Flask'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'ai-appointment',
    title: 'AI Appointment Booker',
    description: 'An automated scheduling agent built with n8n and LLMs. Handles natural language inquiries to book, reschedule, and manage appointments without human intervention, streamlining operational workflows.',
    tags: ['n8n', 'OpenAI API', 'Automation', 'Workflow'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'web-chatbot',
    title: 'Contextual Web Chatbot',
    description: 'A custom chatbot solution integrated into web platforms using n8n and Webhooks. Provides instant customer support and data collection, significantly reducing response times.',
    tags: ['n8n', 'JavaScript', 'Webhooks', 'Integration'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'b2b-workflow-automation',
    title: 'B2B Workflow Automation',
    description: 'Built an enterprise-grade B2B automation platform that streamlines partner onboarding, order routing, and invoice reconciliation with intelligent workflow orchestration.',
    tags: ['Odoo', 'Automation', 'API', 'B2B'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'ivms-platform',
    title: 'IVMS Fleet Monitoring System',
    description: 'Delivered a real-time Intelligent Vehicle Monitoring System for fleet operations, complete with telematics, alerting, and dashboard analytics for safer, smarter transportation.',
    tags: ['Telematics', 'IoT', 'Monitoring', 'Fleet'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'odoo-report-bot',
    title: 'Odoo Report Generation Bot',
    description: 'Created an automated reporting bot that generates Odoo performance reports and dispatches them through WhatsApp, email, or other communication channels on schedule.',
    tags: ['Odoo', 'Bot', 'Reports', 'Automation'],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'odoo-multichannel-alerts',
    title: 'Multi-Channel Odoo Alerts',
    description: 'Implemented a notification engine that pushes Odoo updates and alerts to WhatsApp, SMS, email, and messaging apps so stakeholders receive critical business updates instantly.',
    tags: ['Odoo', 'Notifications', 'WhatsApp', 'Media'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'odoo-whatsapp',
    title: 'Odoo & WhatsApp Integration',
    description: 'Developed a seamless bridge between Odoo ERP and WhatsApp Business API. Enables automated invoicing, order updates, and CRM communication directly through WhatsApp.',
    tags: ['Odoo', 'Python', 'API Integration', 'ERP'],
    image: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  },
  {
    id: 'house-price',
    title: 'House Price Prediction',
    description: 'Data Science project utilizing regression analysis to predict real estate market trends. Involves complex data cleaning, feature engineering, and predictive modeling.',
    tags: ['Data Science', 'Pandas', 'Statistics', 'Visualization'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/sagarkpoojary',
    liveUrl: '#',
  }
];

export const SKILLS: Skill[] = [
  { name: 'n8n (Self-Hosted)', category: 'ai-automation', highlight: true },
  { name: 'MLOps', category: 'ai-automation', highlight: true },
  { name: 'Odoo ERP', category: 'ai-automation' },
  { name: 'Python', category: 'ai-automation' },
  { name: 'Machine Learning', category: 'ai-automation' },
  { name: 'Email Automation', category: 'ai-automation' },
  { name: 'Flask', category: 'backend-infra' },
  { name: 'GCP Serverless', category: 'backend-infra', highlight: true },
  { name: 'AWS (S3/EC2)', category: 'backend-infra' },
  { name: 'Docker', category: 'backend-infra' },
  { name: 'TypeScript', category: 'frontend-ux', highlight: true },
  { name: 'React', category: 'frontend-ux' },
  { name: 'Framer Motion', category: 'frontend-ux', highlight: true },
  { name: 'Tailwind CSS', category: 'frontend-ux' },
];

export const PERSONAL_INFO = {
  name: "Sagar K Poojary",
  role: "AI & Business Automation Executive at Conceptgrps.com",
  tagline: "Driving intelligent automation and enterprise AI systems for modern businesses.",
  location: "United Kingdom",
  socials: {
    github: "https://github.com/sagarkpoojary",
    linkedin: "https://www.linkedin.com/in/sagarkpoojary/",
    instagram: "https://www.instagram.com/sagarrpoojaryy/",
    email: "sagarkpoojary@hotmail.com",
    phone: "+919497321352"
  }
};