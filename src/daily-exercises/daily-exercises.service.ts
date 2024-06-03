import { Injectable } from '@nestjs/common';
import { CreateDailyExerciseDto } from './dto/create-daily-exercise.dto';
import { UpdateDailyExerciseDto } from './dto/update-daily-exercise.dto';

@Injectable()
export class DailyExercisesService {
  create(createDailyExerciseDto: CreateDailyExerciseDto) {
    return 'This action adds a new dailyExercise';
  }

  findAll() {
    return `This action returns all dailyExercises`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyExercise`;
  }

  update(id: number, updateDailyExerciseDto: UpdateDailyExerciseDto) {
    return `This action updates a #${id} dailyExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyExercise`;
  }
}
