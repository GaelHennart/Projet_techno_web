import { IsInt, IsNotEmpty, IsOptional, IsString, IsNumber, IsUUID, IsUrl } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  yearPublished: number;

  @IsNotEmpty()
  @IsUUID()
  authorId: string;

  @IsOptional()
  @IsNumber()
  averageRating?: number;

  @IsOptional()
  @IsInt()
  price?: number;

  @IsOptional()
  @IsUrl()
  book_image?: string;
}

