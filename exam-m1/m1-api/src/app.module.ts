import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { BooksModule } from './modules/books/books.module';
import { AuthorsModule } from './modules/authors/author.module';
import { ReviewsModule } from './modules/reviews/reviews.module'; 

@Module({
  imports: [DatabaseModule,BooksModule,AuthorsModule,ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
