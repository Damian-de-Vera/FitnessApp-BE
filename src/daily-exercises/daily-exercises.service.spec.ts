import { Test, TestingModule } from '@nestjs/testing';
import { DailyExercisesService } from './daily-exercises.service';

describe('DailyExercisesService', () => {
  let service: DailyExercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyExercisesService],
    }).compile();

    service = module.get<DailyExercisesService>(DailyExercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
