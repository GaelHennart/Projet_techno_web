import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('authors')
export class AuthorEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })  
  lastName: string;

  @Column({ name: 'image_url', type: 'varchar', nullable: true })
  imageUrl: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}
