import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { BookEntity } from '../database/entities/book.entity';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { AuthorEntity } from '../database/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  public async findAll() {
    return this.booksRepository.findAll();
  }

  public async findOne(id: string) {
    return this.booksRepository.findOne(id);
  }

  public async create(createBookDto: CreateBookDto) {
    const book = new BookEntity();
    book.title = createBookDto.title;
    book.yearPublished = createBookDto.yearPublished;
    const author = new AuthorEntity();
    author.id = createBookDto.authorId;
    book.author = author;
    book.average = createBookDto.average || 0;
    
    return this.booksRepository.create(book);
  }

  public async update(id: string, updateBookDto: UpdateBookDto) {
    return this.booksRepository.update(id, updateBookDto);
  }

  public async remove(id: string) {
    return this.booksRepository.remove(id);
  }
}
