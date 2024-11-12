import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BooksRepository } from './books.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from '../database/entities/book.entity';
import { AuthorEntity } from '../database/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
  controllers: [BooksController],
  providers: [BooksService, BooksRepository],
})
export class BooksModule {}
