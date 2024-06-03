import { Injectable } from '@nestjs/common';
import { CreateDailyExerciseDto } from './dto/create-daily-exercise.dto';
import { UpdateDailyExerciseDto } from './dto/update-daily-exercise.dto';
import { DatabaseService } from 'src/database/database.service';
import { DailyExercise, DailyProgram } from '@prisma/client';

@Injectable()
export class DailyExercisesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    createDailyExerciseDto: CreateDailyExerciseDto,
  ): Promise<DailyExercise> {
    const { dailyProgramUUID, exerciseUUID } = createDailyExerciseDto;
    let dailyExercise: DailyExercise =
      await this.databaseService.dailyExercise.create({
        data: {
          dailyProgramUUID: dailyProgramUUID,
          exerciseUUID: exerciseUUID,
        },
      });

    await this.databaseService.dailyProgram.update({
      where: { uuid: dailyProgramUUID },
      data: { dailyExercises: { connect: { uuid: dailyExercise.uuid } } },
    });
    return dailyExercise;
  }

  findAll() {
    return `This action returns all dailyExercises`;
  }

  async findOneByUUID(uuid: string): Promise<DailyExercise> {
    let dailyExercise: DailyExercise =
      await this.databaseService.dailyExercise.findUnique({
        where: { uuid: uuid },
      });
    return dailyExercise;
  }

  async update(uuid: string, updateDailyExerciseDto: UpdateDailyExerciseDto) {
    let dailyExercise: DailyExercise =
      await this.databaseService.dailyExercise.update({
        where: { uuid: uuid },
        data: updateDailyExerciseDto,
      });
    return dailyExercise;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyExercise`;
  }
}
