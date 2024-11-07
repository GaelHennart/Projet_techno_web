import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './author.controller';
import { AuthorsService } from './author.service';
import { AuthorRepository } from './author.repository';
import { AuthorEntity } from '../entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorRepository],
  exports: [AuthorsService],
})
export class AuthorsModule {}
