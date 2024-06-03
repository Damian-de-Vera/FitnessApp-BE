import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDailyProgramDto {
  @IsNotEmpty()
  date: Date | string;

  @IsUUID()
  @IsNotEmpty()
  userUUID: string;

  @IsOptional()
  dailyExercisesUUIDs?: string[];
}
