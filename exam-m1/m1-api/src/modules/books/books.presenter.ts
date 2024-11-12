import { Book } from './books.model';

export class BookPresenter {
  static toResponseDto(book: Book) {
    return {
      id: book.id,
      title: book.title,
      yearPublished: book.yearPublished,
      price: book.price,
      authorId: book.authorId,
      average: book.average,
    };
  }

  static toResponseListDto(books: Book[]) {
    return books.map((book) => this.toResponseDto(book));
  }
}
