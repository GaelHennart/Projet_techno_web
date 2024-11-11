import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorsRepository } from './author.repository';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorPresenter } from './author.presenter';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorsRepository: AuthorsRepository) {}

  public async findAll() {
    const authors = await this.authorsRepository.findAll();
    return authors.map(AuthorPresenter.present);
  }

  public async findOne(id: string) {
    const author = await this.authorsRepository.findOne(id);
    if (!author) throw new NotFoundException('Author not found');
    return AuthorPresenter.present(author);
  }

  public async create(createAuthorDto: CreateAuthorDto) {
    const author = await this.authorsRepository.create(createAuthorDto);
    return AuthorPresenter.present(author);
  }

  public async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorsRepository.update(id, updateAuthorDto);
    if (!author) throw new NotFoundException('Author not found');
    return AuthorPresenter.present(author);
  }

  public async remove(id: string) {
    return this.authorsRepository.remove(id);
  }
}
