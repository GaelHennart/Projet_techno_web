import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from '../database/entities/book.entity';
import { AuthorEntity } from '../database/entities/author.entity';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  public async findAll() {
    return this.bookRepository.find();
  }

  public async findOne(id: string) {
    return this.bookRepository.findOne({ where: { id } });
  }

  public async findBooksByAuthorId(authorId: string): Promise<BookEntity[]> {
    return this.bookRepository.find({ where: { author: { id: authorId } } });
  }

  public async findAuthorById(authorId: string): Promise<AuthorEntity | null> {
    return this.bookRepository.manager.findOne(AuthorEntity, { where: { id: authorId } });
}

  public async create(bookData: Partial<BookEntity>) {
    const book = this.bookRepository.create(bookData);
    return this.bookRepository.save(book);
  }

  public async update(id: string, bookData: Partial<BookEntity>) {
    return this.bookRepository.update(id, bookData);
  }

  public async remove(id: string) {
    return this.bookRepository.delete(id);
  }
}
