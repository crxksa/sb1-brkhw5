export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'Kinetic Art' | 'Interactive Displays' | 'Interactive Games';
  videoUrl: string;
  image: string;
}