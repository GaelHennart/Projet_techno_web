import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    
} from 'typeorm';
  import { BookEntity } from './book.entity';
  
  @Entity('reviews')
  export class ReviewEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'reviews_description', type: 'varchar' })
    reviews_description: string;

    @Column({ name: 'mark', type: 'float' })
    mark: number;
    
    @Column({ name: 'date', type: 'varchar' })
    date: string;

  
    @ManyToOne(() => BookEntity, (book) => book.reviews, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    book: BookEntity;
  }
  