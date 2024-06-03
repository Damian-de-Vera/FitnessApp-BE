import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDailyExerciseDto {
  @IsUUID()
  @IsNotEmpty()
  dailyProgramUUID: string;

  @IsUUID()
  @IsNotEmpty()
  exerciseUUID: string;
}
