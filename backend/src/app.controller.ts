// // src/users/user.controller.ts
// import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards ,Request, UnauthorizedException} from '@nestjs/common';
// import { UsersService } from './users/users.service';
// import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from './auth/auth.service';

// @Controller('app')
// export class appController {
//   constructor(private readonly authService:AuthService) {}

// //   @UseGuards(AuthGuard('local'))
// @Post('login')
// async login(@Body() credentials: any):Promise<string>{
//   // Validate user credentials and get user data
//   const user = await this UsersService.(credentials.username, credentials.password);
//   console.log(user);
//   return  `user is correct${user}`
// }
  // if (user) {
  //   const token = await this.authService.generateToken({ username: user.username, sub: user.password });
  //   return { token };
  // } else {
  //   throw new UnauthorizedException('Invalid credentials');
  // }
  // }

  // @Get('jwt')
  // // @UseGuards(AuthGuard('jwt')) 
  // async validateJwt(@Request() req): Promise<string> {
  //   const token =this.authService.generateToken(req.user)
  //   console.log('hdfha',req);
  //    return token;
  // }


 
// }
