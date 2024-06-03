import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyProgramDto } from './create-daily-program.dto';

export class UpdateDailyProgramDto extends PartialType(CreateDailyProgramDto) {}
