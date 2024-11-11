import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  yearPublished: number;

  @IsNotEmpty()
  @IsInt()
  authorId: string;

  @IsOptional()
  @IsInt()
  average: number;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  yearPublished?: number;

  @IsOptional()
  @IsInt()
  authorId?: string;

  @IsOptional()
  @IsInt()
  average?: number;
}
