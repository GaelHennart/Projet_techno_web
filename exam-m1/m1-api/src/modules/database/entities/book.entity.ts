import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
  import { AuthorEntity } from './author.entity';
  import { ReviewEntity } from './review.entity';
  
  export type BookId = string & { __brand: 'Book' };
  
  @Entity('books')
  export class BookEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: BookId;
  
    @Column({ name: 'title', type: 'varchar' })
    title: string;
  
    @Column({ name: 'year_published', type: 'int' })
    yearPublished: number;
  
    @ManyToOne(() => AuthorEntity, (author) => author.books, { nullable: false })
    @JoinColumn({ name: 'author_id' })
    author: AuthorEntity;

    @OneToMany(() => ReviewEntity, (review) => review.book)
    reviews: ReviewEntity[];
  }
  