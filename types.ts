export interface CurriculumItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
  lessons: string[];
  iconName: 'geometry' | 'algebra' | 'statistics' | 'trigonometry' | 'functions' | 'financial';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}