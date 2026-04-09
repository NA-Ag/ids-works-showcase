export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface AcademicStage {
  title: string;
  description: string;
  ageRange: string;
  imageUrl: string;
  link: string;
}