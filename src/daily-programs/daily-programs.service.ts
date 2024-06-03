import { Injectable } from '@nestjs/common';
import { CreateDailyProgramDto } from './dto/create-daily-program.dto';
import { UpdateDailyProgramDto } from './dto/update-daily-program.dto';
import { DatabaseService } from 'src/database/database.service';
import { DailyExercise, DailyProgram, Prisma, User } from '@prisma/client';

@Injectable()
export class DailyProgramsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    createDailyProgramDto: CreateDailyProgramDto,
  ): Promise<DailyProgram> {
    const { date, userUUID, dailyExercisesUUIDs } = createDailyProgramDto;

    const dailyExercises = dailyExercisesUUIDs.map((exerciseUuid) => ({
      exercise: {
        connect: { uuid: exerciseUuid },
      },
    }));
    let dailyProgram: DailyProgram =
      await this.databaseService.dailyProgram.create({
        data: {
          uuid: userUUID,
          date: date,
          dailyExercises: {
            create: dailyExercises,
          },
          user: { connect: { uuid: userUUID } },
        },
      });

    return dailyProgram;
  }

  async findAll(): Promise<DailyProgram[]> {
    let dailyPrograms: DailyProgram[] =
      await this.databaseService.dailyProgram.findMany();
    return dailyPrograms;
  }

  async findOneByUUID(uuid: string): Promise<DailyProgram> {
    let dailyProgram: DailyProgram =
      await this.databaseService.dailyProgram.findUnique({
        where: {
          uuid: uuid,
        },
      });
    return dailyProgram;
  }

  async findUsersDailyPrograms(
    user: User,
    day: string,
  ): Promise<DailyProgram[]> {
    //TODO: refactorize filter
    let filter = day
      ? { date: new Date(day), userUUID: user.uuid }
      : { userUUID: user.uuid };
    let dailyPrograms: DailyProgram[] =
      await this.databaseService.dailyProgram.findMany({
        where: filter,
        include: {
          user: true,
          dailyExercises: {
            include: {
              exercise: true,
            },
          },
        },
      });
    return dailyPrograms;
  }

  async update(id: number, updateDailyProgramDto: UpdateDailyProgramDto) {
    return `This action updates a #${id} dailyProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyProgram`;
  }
}
