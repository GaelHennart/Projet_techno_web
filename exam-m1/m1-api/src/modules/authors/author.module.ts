import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './author.controller';
import { AuthorsService } from './author.service';
import { AuthorsRepository } from './author.repository';
import { AuthorEntity } from '../database/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorsRepository],
  exports: [AuthorsService],
})
export class AuthorsModule {}
