import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { DailyProgramsService } from './daily-programs.service';
import { CreateDailyProgramDto } from './dto/create-daily-program.dto';
import { UpdateDailyProgramDto } from './dto/update-daily-program.dto';
import { DailyProgram } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Controller('daily-programs')
export class DailyProgramsController {
  constructor(
    private readonly dailyProgramsService: DailyProgramsService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(@Body() createDailyProgramDto: CreateDailyProgramDto) {
    let user = await this.userService.findOneByUUID(
      createDailyProgramDto.userUUID,
    );
    if (!user) {
      throw new NotFoundException(
        `User with uuid ${createDailyProgramDto.userUUID} not found`,
      );
    }

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
