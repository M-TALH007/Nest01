import { Module } from '@nestjs/common';
import { UserController} from './user.controller';
import { albumController } from './album.controller';
import { UsersController1 } from './user1.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [UserController,albumController,UsersController1],
})
export class AppModule {}
