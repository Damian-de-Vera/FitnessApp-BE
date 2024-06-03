import { Module } from '@nestjs/common';
import { DailyProgramsService } from './daily-programs.service';
import { DailyProgramsController } from './daily-programs.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [DailyProgramsController],
  providers: [DailyProgramsService, UsersService],
})
export class DailyProgramsModule {}
