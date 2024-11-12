import { IsInt, IsNotEmpty, IsOptional, IsString, IsNumber, IsUUID } from 'class-validator';

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
  average: number;

  @IsOptional()
  @IsInt()
  price?: number;
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
  price?: number;

  @IsOptional()
  @IsUUID()
  authorId?: string;

  @IsOptional()
  @IsNumber()
  average?: number;
}
