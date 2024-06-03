import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

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

  @IsNotEmpty()
  @IsNumber()
  @Min(1, { message: 'Series must be greater than or equal to 1' })
  series: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1, { message: 'Repetitions must be greater than or equal to 1' })
  repetitions: number;
}
