import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { CreateAuthorDto } from './author.dto';
import { UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async findAll() {
    return await this.authorRepository.findAll();
  }

  async findOne(id: string) {
    const author = await this.authorRepository.findById(id);
    if (!author) throw new NotFoundException('Author not found');
    return author;
  }

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorRepository.createAuthor(createAuthorDto);
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return await this.authorRepository.updateAuthor(id, updateAuthorDto);
  }

  async remove(id: string) {
    return await this.authorRepository.deleteAuthor(id);
  }
}
