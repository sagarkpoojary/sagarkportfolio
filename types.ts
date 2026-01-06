export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'ai-automation' | 'backend-infra' | 'frontend-ux';
  highlight?: boolean;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  phone: string;
}