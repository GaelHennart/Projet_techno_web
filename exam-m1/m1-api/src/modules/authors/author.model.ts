import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { AuthorRepository } from './author.repository';
import { AuthorEntity } from '../entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity]), // Import de l'entity pour TypeORM
  ],
  controllers: [
    AuthorsController,  // Déclaration du contrôleur
  ],
  providers: [
    AuthorsService,     // Déclaration du service
    AuthorRepository,   // Déclaration du repository
  ],
  exports: [
    AuthorsService,     // Export du service si utilisé dans d'autres modules
  ],
})
export class AuthorsModule {}
