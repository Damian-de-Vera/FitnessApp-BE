import { Test, TestingModule } from '@nestjs/testing';
import { DailyProgramsController } from './daily-programs.controller';
import { DailyProgramsService } from './daily-programs.service';

describe('DailyProgramsController', () => {
  let controller: DailyProgramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyProgramsController],
      providers: [DailyProgramsService],
    }).compile();

    controller = module.get<DailyProgramsController>(DailyProgramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
