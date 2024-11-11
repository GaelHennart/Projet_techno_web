import { IsNotEmpty, IsString, IsNumber, Min, Max, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  reviews_description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  mark: number;

  @IsNotEmpty()
  @IsString()
  bookId: string;  
}

export class UpdateReviewDto {
  @IsOptional()
  @IsString()
  reviews_description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  mark?: number;
}
