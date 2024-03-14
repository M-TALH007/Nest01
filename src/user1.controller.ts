import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from "@nestjs/common";
  import { CreateUserDTO } from "./dto";
  
  let USERS = [];

  // using DTOs in Nest.js helps in writing cleaner, more maintainable, and robust code by providing 
  //a clear and standardized way to handle data transfer within your application.
  
  @Controller("/users")
  export class UsersController1 {
    @Post()
    createUser(@Body() createUserDto: CreateUserDTO) {
      USERS.push(createUserDto);
      return { message: "User created" };
    }
  
    @Get()
    findAllUsers() {
      return USERS;
    }
  
    @Get(":id")
    findUserById(@Param("id") id: number) {
      const user = USERS.find((user) => user.id === id);
  
      if (!user) {
        return { message: "User not found" };
      }
  
      return user;
    }
  
    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO) {
      const userIdx = USERS.findIndex((user) => user.id === id);
  
      if (!userIdx) {
        return { message: "User not found" };
      }
  
      USERS[userIdx] = updateUserDto;
  
      return { message: "User updated" };
    }
  
    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        const index = USERS.findIndex(user => user.id === id);
    
        if (index !== -1) {
            USERS.splice(index, 1); 
            return { message: "User deleted" };
        } else {
            return { message: "User not found" };
        }
    }
    
  }