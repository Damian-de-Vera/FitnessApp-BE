import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
