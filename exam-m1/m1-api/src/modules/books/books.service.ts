import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { CreateBookDto, UpdateBookDto } from './books.dto';
import { BookPresenter } from './books.presenter';
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

  public async findBookByAuthorId(bookId: string) {
    return await this.booksRepository.findBooksByAuthorId(bookId);
  }

  public async create(createBookDto: CreateBookDto) {
    const { authorId, ...otherData } = createBookDto;
    const author = await this.booksRepository.findAuthorById(authorId) as AuthorEntity;  // Méthode à ajouter si besoin

    if (!author) {
        throw new Error("L'auteur spécifié n'existe pas.");
    }

    const bookData = { ...otherData, author };
    const book = await this.booksRepository.create(bookData);
    return BookPresenter.present(book);
}

  public async update(id: string, updateBookDto: UpdateBookDto) {
    const { authorId, ...otherData } = updateBookDto;
    const bookData = { ...otherData, authorId: Number(authorId) };
    return this.booksRepository.update(id, bookData);
  }

  public async remove(id: string) {
    return this.booksRepository.remove(id);
  }
}
