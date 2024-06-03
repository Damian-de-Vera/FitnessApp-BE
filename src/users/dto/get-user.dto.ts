import { IsEmail, IsString } from 'class-validator';

export class GetUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  name?: string;

  @IsString()
  username?: string;
}
