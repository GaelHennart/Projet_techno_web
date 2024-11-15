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



@Entity('books')
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'year_published', type: 'int' })
  yearPublished: number;

  @Column({ name: 'average', type: 'float', nullable: true })
  average: number;

  @Column({ name: 'price', type: 'int', nullable: true })
  price: number;

  @Column({ name: 'book_image', type: 'varchar', nullable: true })
  book_image: string;

  @ManyToOne(() => AuthorEntity, (author) => author.books, { nullable: false, onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'author' })
  author: AuthorEntity;

  @OneToMany(() => ReviewEntity, (review) => review.book)
  reviews: ReviewEntity[];


}
