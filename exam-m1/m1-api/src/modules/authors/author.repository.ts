import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../entities/author.entity';
import { CreateAuthorDto } from './author.dto';
import { UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repository: Repository<AuthorEntity>,
  ) {}

  async findAll(): Promise<AuthorEntity[]> {
    return this.repository.find({ relations: ['books'] });
  }

  async findById(id: string): Promise<AuthorEntity | undefined> {
    return this.repository.findOne({ where: { id }, relations: ['books'] });
  }

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<AuthorEntity> {
    const author = this.repository.create(createAuthorDto);
    return this.repository.save(author);
  }

  async updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto): Promise<AuthorEntity> {
    await this.repository.update(id, updateAuthorDto);
    return this.findById(id);
  }

  async deleteAuthor(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
