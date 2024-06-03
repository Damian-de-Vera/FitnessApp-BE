import { Test, TestingModule } from '@nestjs/testing';
import { DailyProgramsService } from './daily-programs.service';

describe('DailyProgramsService', () => {
  let service: DailyProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyProgramsService],
    }).compile();

    service = module.get<DailyProgramsService>(DailyProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
