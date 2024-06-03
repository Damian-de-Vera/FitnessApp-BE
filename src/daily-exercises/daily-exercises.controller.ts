import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyExercisesService } from './daily-exercises.service';
import { CreateDailyExerciseDto } from './dto/create-daily-exercise.dto';
import { UpdateDailyExerciseDto } from './dto/update-daily-exercise.dto';

@Controller('daily-exercises')
export class DailyExercisesController {
  constructor(private readonly dailyExercisesService: DailyExercisesService) {}

  @Post()
  create(@Body() createDailyExerciseDto: CreateDailyExerciseDto) {
    return this.dailyExercisesService.create(createDailyExerciseDto);
  }

  @Get()
  findAll() {
    return this.dailyExercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyExercisesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyExerciseDto: UpdateDailyExerciseDto) {
    return this.dailyExercisesService.update(+id, updateDailyExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyExercisesService.remove(+id);
  }
}
