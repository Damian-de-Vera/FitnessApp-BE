import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DailyProgram, Prisma, User } from '@prisma/client';
import { GetDailyProgramsDto } from 'src/daily-programs/dto/get-user-daily-program.dto';
import { DailyProgramsService } from 'src/daily-programs/daily-programs.service';
import { IsDateString } from 'src/common/validators/is-date-string.validator';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly dailyProgramsSerivce: DailyProgramsService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    let user = await this.usersService.create(createUserDto);
    return user;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':uuid/daily-programs')
  async findUserDailyPrograms(
    @Param(new ValidationPipe({ transform: true })) params: GetDailyProgramsDto,
    @Query('date') date?: string, //TODO: añadir validación de fecha
  ) {
    const { uuid } = params;
    let user: User = await this.usersService.findOneByUUID(uuid);
    let dailyPrograms: DailyProgram[] =
      await this.dailyProgramsSerivce.findUsersDailyPrograms(user, date);

    return dailyPrograms;
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    let user = await this.usersService.findOneByEmail(email);
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
