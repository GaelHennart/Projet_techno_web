import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repository';
import { CreateReviewDto, UpdateReviewDto } from './reviews.dto';
import { ReviewEntity } from '../database/entities/review.entity';
import { BookEntity } from '../database/entities/book.entity';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository) {}

  public async create(createReviewDto: CreateReviewDto) {
    const book = new BookEntity();
    book.id = createReviewDto.bookId; 
    const review = new ReviewEntity();
    review.reviews_description = createReviewDto.reviews_description;
    review.mark = createReviewDto.mark;
    review.created_at = new Date();
    review.book = book; 
    return await this.reviewsRepository.create(review);
  }

  public async findAll() {
    return this.reviewsRepository.findAll();
  }

  public async findOne(id: string) {
    return await this.reviewsRepository.findOne(id);
  }
  
  public async findReviewsByBookId(bookId: string) {
    return await this.reviewsRepository.findReviewsByBookId(bookId);
  }

  public async update(id: string, updateReviewDto: UpdateReviewDto) {
    return await this.reviewsRepository.update(id, updateReviewDto);
  }

  public async remove(id: string) {
    return await this.reviewsRepository.remove(id);
  }

  public async findAllByBook(bookId: string) {
    return await this.reviewsRepository.findAllByBook(bookId);
  }
}
