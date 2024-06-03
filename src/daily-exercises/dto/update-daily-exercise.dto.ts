import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyExerciseDto } from './create-daily-exercise.dto';

export class UpdateDailyExerciseDto extends PartialType(CreateDailyExerciseDto) {}
