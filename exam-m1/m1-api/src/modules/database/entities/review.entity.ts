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
  
    @Column({ type: 'int', width: 1 })
    rating: number;
  
    @Column({ type: 'text', nullable: true })
    comment: string;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @ManyToOne(() => BookEntity, (book) => book.reviews, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    book: BookEntity;
  }
  