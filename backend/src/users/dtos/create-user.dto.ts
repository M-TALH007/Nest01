// src/users/dtos/create-user.dto.ts
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly age: number;

  @IsString()
  @IsNotEmpty()
  readonly cnic: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsOptional()
  readonly pic: string;

  @IsOptional()
  readonly hobbies: string;

  @IsOptional()
  readonly interests: string;

  @IsString()
  @IsNotEmpty()
  readonly role?: string;
}
