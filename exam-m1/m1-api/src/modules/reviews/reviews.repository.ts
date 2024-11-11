import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewEntity } from '../database/entities/review.entity';
import { CreateReviewDto, UpdateReviewDto } from './reviews.dto';

@Injectable()
export class ReviewsRepository {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
  ) {}

  async create(review: ReviewEntity) {
    const newReview = this.reviewRepository.create(review);
    return await this.reviewRepository.save(newReview);

  }

  async findOne(id: string) {
    return await this.reviewRepository.findOne({ where: { id } });
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    await this.reviewRepository.update(id, updateReviewDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.reviewRepository.delete(id);
  }

  async findAllByBook(bookId: string) {
    return await this.reviewRepository.find({ where: { book:{id:bookId} } });
  }
}
