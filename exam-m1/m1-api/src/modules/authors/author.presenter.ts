import { AuthorEntity } from '../database/entities/author.entity';

export class AuthorPresenter {
  static present(author: AuthorEntity) {
    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      imageUrl: author.imageUrl,
      biography: author.biography,
      bookCount: author.books?.length || 0,
      averageRating: author.books?.filter(book => book.average > 0).reduce((sum, book) => sum + book.average, 0) / (author.books?.filter(book => book.average > 0).length || 1)
    };
  }
}
