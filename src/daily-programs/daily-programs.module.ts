import { Module } from '@nestjs/common';
import { DailyProgramsService } from './daily-programs.service';
import { DailyProgramsController } from './daily-programs.controller';

@Module({
  controllers: [DailyProgramsController],
  providers: [DailyProgramsService],
})
export class DailyProgramsModule {}
