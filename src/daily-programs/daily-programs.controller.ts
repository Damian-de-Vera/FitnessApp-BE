import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyProgramsService } from './daily-programs.service';
import { CreateDailyProgramDto } from './dto/create-daily-program.dto';
import { UpdateDailyProgramDto } from './dto/update-daily-program.dto';

@Controller('daily-programs')
export class DailyProgramsController {
  constructor(private readonly dailyProgramsService: DailyProgramsService) {}

  @Post()
  create(@Body() createDailyProgramDto: CreateDailyProgramDto) {
    return this.dailyProgramsService.create(createDailyProgramDto);
  }

  @Get()
  findAll() {
    return this.dailyProgramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyProgramsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyProgramDto: UpdateDailyProgramDto) {
    return this.dailyProgramsService.update(+id, updateDailyProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyProgramsService.remove(+id);
  }
}
