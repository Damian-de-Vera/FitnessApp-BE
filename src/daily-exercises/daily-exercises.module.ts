import { Module } from '@nestjs/common';
import { DailyExercisesService } from './daily-exercises.service';
import { DailyExercisesController } from './daily-exercises.controller';

@Module({
  controllers: [DailyExercisesController],
  providers: [DailyExercisesService],
})
export class DailyExercisesModule {}
