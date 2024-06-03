import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    let user = await this.databaseService.user.create({ data: createUserDto });
    return user;
  }

  async findAll() {
    let users = await this.databaseService.user.findMany();
    return users;
  }

  async findOneByEmail(email: string): Promise<User> {
    let user = await this.databaseService.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }

  async findOneByUUID(uuid: string) {
    let user = await this.databaseService.user.findUnique({
      where: {
        uuid: uuid,
      },
    });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
