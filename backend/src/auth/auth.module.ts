// src/auth/auth.module
import { Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { passportJwtStrategy } from './jwt.strategy';
// import { passportJwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,passportJwtStrategy],
  imports : [UsersModule,PassportModule,    
  JwtModule.register({
    global: true,
    secret: 'My secret key is learn jwt',
    signOptions: { expiresIn: '600s' },
  }),],
  exports:[]
})
export class AuthModule {}
