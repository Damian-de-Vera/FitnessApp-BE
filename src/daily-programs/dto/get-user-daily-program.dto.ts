// src/daily-programs/dto/get-daily-programs.dto.ts
import { IsUUID, IsNotEmpty } from 'class-validator';

export class GetDailyProgramsDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
