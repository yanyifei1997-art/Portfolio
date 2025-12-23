
export type Category = 'All' | 'Urban' | 'Architecture' | 'Landscape' | 'Interior';

export interface Project {
  id: string;
  title: string;
  category: Category;
  mainImage: string;
  detailImages?: string[];
  location: string;
  time: string;
  designer: string;
  description: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  turnaround: string;
  icon: string;
}
