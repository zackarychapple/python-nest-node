import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GithubDataModule} from "../github-data/github-data.module";

@Module({
  imports: [GithubDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
