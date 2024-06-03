import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseService } from 'src/database/database.service';
import { DailyProgramsService } from 'src/daily-programs/daily-programs.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, DatabaseService, DailyProgramsService],
})
export class UsersModule {}
