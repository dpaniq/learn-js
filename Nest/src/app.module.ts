import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'


@Module({
  imports: [CatsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
