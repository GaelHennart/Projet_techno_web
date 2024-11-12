import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ReviewsRepository } from './reviews.repository';
import { ReviewEntity } from '../database/entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from '../database/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity,BookEntity])],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewsRepository],
})
export class ReviewsModule {}

