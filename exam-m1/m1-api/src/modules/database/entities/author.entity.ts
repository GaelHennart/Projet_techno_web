import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('authors')
export class AuthorEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })  // Correction du type
  lastName: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
