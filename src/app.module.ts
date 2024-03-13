import { Module } from '@nestjs/common';
import { UserController} from './user.controller';
import { albumController } from './album.controller';

@Module({
  controllers: [UserController,albumController],
})
export class AppModule {}
