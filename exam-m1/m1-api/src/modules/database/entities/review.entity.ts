import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    CreateDateColumn,
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
    
    @Column({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
    @ManyToOne(() => BookEntity, (book) => book.reviews, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    book: BookEntity;
  }
  