import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.usersService.create(createUserDto);
    return createdUser;
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<String> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.usersService.remove(id);
  }
}
