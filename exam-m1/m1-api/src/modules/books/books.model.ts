import { Author } from '../authors/author.model';

export interface Book {
  id: string;
  title: string;
  yearPublished: number;
  price: number;
  authorId: string;
  averageRating: number;
  author?: Author;
  book_image?: string;
}
