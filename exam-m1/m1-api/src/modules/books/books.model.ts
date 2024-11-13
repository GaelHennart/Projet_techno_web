import { Author } from '../authors/author.model';

export interface Book {
  id: string;
  title: string;
  yearPublished: number;
  price: number;
  authorId: string;
  average: number;
  author?: Author;
}
