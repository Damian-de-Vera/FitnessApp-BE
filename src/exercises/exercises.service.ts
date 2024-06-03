import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { DatabaseService } from 'src/database/database.service';
import { Exercise, Prisma } from '@prisma/client';

@Injectable()
export class ExercisesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(
    createExerciseDto: Prisma.ExerciseCreateInput,
  ): Promise<Exercise> {
    let exercise = await this.databaseService.exercise.create({
      data: createExerciseDto,
    });
    return exercise;
  }

  async findAll(): Promise<Exercise[]> {
    let exercises: Exercise[] = await this.databaseService.exercise.findMany();
    return exercises;
  }

  async findOneByName(name: string): Promise<Exercise> {
    let exercise: Exercise = await this.databaseService.exercise.findFirst({
      where: {
        name: name,
      },
    });
    return exercise;
  }

  async update(
    uuid: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    let exercise = await this.databaseService.exercise.update({
      where: {
        uuid: uuid,
      },
      data: updateExerciseDto,
    });
    return exercise;
  }

  async remove(uuid: string): Promise<void> {
    await this.databaseService.exercise.delete({
      where: {
        uuid: uuid,
      },
    });
  }
}
