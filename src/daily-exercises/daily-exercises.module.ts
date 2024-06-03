import { Module } from '@nestjs/common';
import { DailyExercisesService } from './daily-exercises.service';
import { DailyExercisesController } from './daily-exercises.controller';
import { DailyProgramsService } from 'src/daily-programs/daily-programs.service';
import { ExercisesService } from 'src/exercises/exercises.service';

@Module({
  controllers: [DailyExercisesController],
  providers: [DailyExercisesService, DailyProgramsService, ExercisesService],
})
export class DailyExercisesModule {}
