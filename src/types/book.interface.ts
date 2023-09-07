export interface Book {
  id: string;
  cover: string;
  title: string;
  categories?: string[];
  authors: string[];
  description: string;
}
