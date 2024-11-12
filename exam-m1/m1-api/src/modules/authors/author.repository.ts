import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorsRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepo: Repository<AuthorEntity>,
  ) {}

  async findAll(): Promise<AuthorEntity[]> {
    return this.authorRepo.find({ relations: ['books'] });
  }

  async findOne(id: string): Promise<AuthorEntity | null> {
    return this.authorRepo.findOne({ where: { id }, relations: ['books'] });
  }

  async create(createAuthorDto: CreateAuthorDto): Promise<AuthorEntity> {
    const author = this.authorRepo.create(createAuthorDto);
    return this.authorRepo.save(author);
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<AuthorEntity> {
    await this.authorRepo.update(id, updateAuthorDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.authorRepo.delete(id);
  }
}
