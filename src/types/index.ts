export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'pro';
}

export interface Project {
  id: string;
  name: string;
  thumbnail: string;
  lastModified: Date;
  collaborators: User[];
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType;
  current: boolean;
}