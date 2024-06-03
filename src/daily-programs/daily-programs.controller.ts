import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { DailyProgramsService } from './daily-programs.service';
import { CreateDailyProgramDto } from './dto/create-daily-program.dto';
import { UpdateDailyProgramDto } from './dto/update-daily-program.dto';
import { DailyProgram, User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { IsDateString } from 'src/common/validators/is-date-string.validator';
import { GetDailyProgramsDto } from './dto/get-user-daily-program.dto';

@Controller('daily-programs')
export class DailyProgramsController {
  constructor(
    private readonly dailyProgramsService: DailyProgramsService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(@Body() createDailyProgramDto: CreateDailyProgramDto) {
    let dailyProgram: DailyProgram = await this.dailyProgramsService.create(
      createDailyProgramDto,
    );
    return dailyProgram;
  }

  @Get()
  findAll() {
    return this.dailyProgramsService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    let dailyProgram: DailyProgram =
      await this.dailyProgramsService.findOneByUUID(uuid);

    return dailyProgram;
  }

  @Get('user/:uuid/daily-programs/:day')
  async findUserDailyPrograms(
    @Param(new ValidationPipe({ transform: true })) params: GetDailyProgramsDto,
  ) {
    const { uuid, day } = params;
    let user: User = await this.userService.findOneByUUID(uuid);
    let dailyPrograms: DailyProgram[] =
      await this.dailyProgramsService.findUsersDailyPrograms(user, day);

    return dailyPrograms;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyProgramDto: UpdateDailyProgramDto,
  ) {
    return this.dailyProgramsService.update(+id, updateDailyProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyProgramsService.remove(+id);
  }
}
