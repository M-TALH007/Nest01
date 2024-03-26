// src/users/user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.schema';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { promises } from 'dns';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,private readonly authService:AuthService) {}

  @Post('signUp')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.usersService.create(createUserDto);
    return createdUser;
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // @UseGuards(AuthGuard('local'))
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
   const user = await  this.usersService.findOne(id);
     return user;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.update(id, updateUserDto);
    return user;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.usersService.remove(id);
  }

  @Delete()
  async deletAllUser(){
    await this.usersService.deleteAllUsers();
    return 'All users deleted successfully';
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }):Promise<any> {
    const { email, password } = body;
    // console.log('body is' , body);
    
    const user = await this.usersService.findUserCredientials(email, password);

    // console.log(user);
    
    if (user) {
      const token = await this.authService.generateToken(user.id, user.email);
      return { token };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
    
  }

  @Post('private')
  @UseGuards( AuthGuard('jwt'))
  async protected(): Promise<string> {
    return 'protected';
  }

}
