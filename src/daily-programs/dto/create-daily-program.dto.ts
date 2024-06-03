import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { IsDateString } from 'src/common/validators/is-date-string.validator';

export class CreateDailyProgramDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsUUID()
  @IsNotEmpty()
  userUUID: string;
}
