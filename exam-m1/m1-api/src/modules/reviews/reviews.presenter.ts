import { Review } from './reviews.model';

export class ReviewPresenter {
  static toResponseObject(review: Review) {
    return {
      id: review.id,
      reviews_description: review.reviews_description,
      mark: review.mark,
      date: review.date,
      bookId: review.bookId,
    };
  }

  static toResponseArray(reviews: Review[]) {
    return reviews.map(this.toResponseObject);
  }
}
