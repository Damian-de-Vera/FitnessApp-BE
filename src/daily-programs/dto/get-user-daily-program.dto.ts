// src/daily-programs/dto/get-daily-programs.dto.ts
import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';
import { IsDateString } from 'src/common/validators/is-date-string.validator';

export class GetDailyProgramsDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;

  @IsDateString()
  @IsOptional()
  day?: string;
}
