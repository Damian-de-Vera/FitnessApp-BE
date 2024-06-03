import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise, Prisma } from '@prisma/client';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  async create(@Body() createExerciseDto: CreateExerciseDto) {
    let exercise: Exercise =
      await this.exercisesService.create(createExerciseDto);
    return exercise;
  }

  @Get()
  async findAll() {
    let exercises: Exercise[] = await this.exercisesService.findAll();
    return exercises;
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    let exercise: Exercise = await this.exercisesService.findOneByName(name);
    return exercise;
  }

  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    let exerciseUpdated = await this.exercisesService.update(
      uuid,
      updateExerciseDto,
    );
    return exerciseUpdated;
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.exercisesService.remove(uuid);
  }
}
