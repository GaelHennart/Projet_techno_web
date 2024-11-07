import { AuthorEntity } from '../entities/author.entity';

export class AuthorPresenter {
  static present(author: AuthorEntity) {
    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      biography: author.biography,
      averageRating: author.averageRating,
    };
  }
}
