import { Book } from './books.model';
import { BookEntity } from '../database/entities/book.entity';
export class BookPresenter {
  static toResponseDto(book: Book) {
    return {
      id: book.id,
      title: book.title,
      yearPublished: book.yearPublished,
      price: book.price,
      authorId: book.authorId,
      average: book.averageRating,
      book_image: book.book_image,
    };
  }

  static present(book: BookEntity) {
    return {
      id: book.id,
      title: book.title,
      yearPublished: book.yearPublished,
      price: book.price,
      authorId: book.author,
      average: book.average,
      book_image: book.book_image,
    };
  }

  static toResponseListDto(books: Book[]) {
    return books.map((book) => this.toResponseDto(book));
  }
}
