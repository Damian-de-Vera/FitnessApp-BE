import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { DailyExercisesService } from './daily-exercises.service';
import { CreateDailyExerciseDto } from './dto/create-daily-exercise.dto';
import { UpdateDailyExerciseDto } from './dto/update-daily-exercise.dto';
import { DailyExercise, DailyProgram, Exercise } from '@prisma/client';
import { DailyProgramsService } from 'src/daily-programs/daily-programs.service';
import { ExercisesService } from 'src/exercises/exercises.service';

@Controller('daily-exercises')
export class DailyExercisesController {
  constructor(
    private readonly dailyExercisesService: DailyExercisesService,
    private readonly dailyProgramService: DailyProgramsService,
    private readonly exerciseService: ExercisesService,
  ) {}

  @Post()
  async create(@Body() createDailyExerciseDto: CreateDailyExerciseDto) {
    const { dailyProgramUUID, exerciseUUID } = createDailyExerciseDto;
    let dailyProgram: DailyProgram =
      await this.dailyProgramService.findOneByUUID(dailyProgramUUID);

    if (!dailyProgram) {
      throw new NotFoundException('Daily Program not found');
    }

    let exercise: Exercise =
      await this.exerciseService.findOneByUUID(exerciseUUID);

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    let dailyExercise = await this.dailyExercisesService.create(
      createDailyExerciseDto,
    );
    return dailyExercise;
  }

  @Get()
  findAll() {
    return this.dailyExercisesService.findAll();
  }

  @Get(':uuid')
  async findOneByUUID(@Param('uuid') uuid: string) {
    let dailyExercise: DailyExercise =
      await this.dailyExercisesService.findOneByUUID(uuid);
    return dailyExercise;
  }

  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateDailyExerciseDto: UpdateDailyExerciseDto,
  ) {
    let dailyExercise: DailyExercise = await this.dailyExercisesService.update(
      uuid,
      updateDailyExerciseDto,
    );

    return dailyExercise;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyExercisesService.remove(+id);
  }
}
