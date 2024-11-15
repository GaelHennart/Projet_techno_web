import { IsNotEmpty, IsString, IsNumber, Min, Max, IsOptional, IsUUID } from 'class-validator';

export class CreateReviewDto {
  @IsOptional()
  @IsString()
  reviews_description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  mark: number;

  @IsNotEmpty()
  @IsUUID()
  bookId: string;
  
  @IsOptional()
  @IsString()
  date: string;
}

export class UpdateReviewDto {
  @IsOptional()
  @IsString()
  reviews_description?: string;

  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  mark?: number;
}
