import { AuthorEntity } from '../database/entities/author.entity';

export class AuthorPresenter {
  static present(author: AuthorEntity) {
    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      imageUrl: author.imageUrl,
      bookCount: author.books?.length || 0,
      averageRating: author.books?.reduce((sum, book) => sum + (book.average || 0), 0) / (author.books?.length || 1),
    };
  }
}
