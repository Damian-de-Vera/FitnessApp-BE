import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ExercisesModule } from './exercises/exercises.module';
import { DailyProgramsModule } from './daily-programs/daily-programs.module';
import { DailyExercisesModule } from './daily-exercises/daily-exercises.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ExercisesModule,
    DailyProgramsModule,
    DailyExercisesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
