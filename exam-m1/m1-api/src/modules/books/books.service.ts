import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { BookPresenter } from './books.presenter';
@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  public async findAll() {
    return this.booksRepository.findAll();
  }

  public async findOne(id: string) {
    return this.booksRepository.findOne(id);
  }

  public async findBookByAuthorId(bookId: string) {
    return await this.booksRepository.findBooksByAuthorId(bookId);
  }

  public async create(createBookDto: CreateBookDto) {
    const book = await this.booksRepository.create(createBookDto);
    return BookPresenter.present(book);
  }

  public async update(id: string, updateBookDto: UpdateBookDto) {
    return this.booksRepository.update(id, updateBookDto);
  }

  public async remove(id: string) {
    return this.booksRepository.remove(id);
  }
}
