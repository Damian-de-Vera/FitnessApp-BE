import { Injectable } from '@nestjs/common';
import { CreateDailyProgramDto } from './dto/create-daily-program.dto';
import { UpdateDailyProgramDto } from './dto/update-daily-program.dto';

@Injectable()
export class DailyProgramsService {
  create(createDailyProgramDto: CreateDailyProgramDto) {
    return 'This action adds a new dailyProgram';
  }

  findAll() {
    return `This action returns all dailyPrograms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyProgram`;
  }

  update(id: number, updateDailyProgramDto: UpdateDailyProgramDto) {
    return `This action updates a #${id} dailyProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyProgram`;
  }
}
