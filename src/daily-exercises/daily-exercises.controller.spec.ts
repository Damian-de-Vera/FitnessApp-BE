import { Test, TestingModule } from '@nestjs/testing';
import { DailyExercisesController } from './daily-exercises.controller';
import { DailyExercisesService } from './daily-exercises.service';

describe('DailyExercisesController', () => {
  let controller: DailyExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyExercisesController],
      providers: [DailyExercisesService],
    }).compile();

    controller = module.get<DailyExercisesController>(DailyExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
