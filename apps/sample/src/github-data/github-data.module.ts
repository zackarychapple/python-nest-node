import { Module } from '@nestjs/common';
import { GithubDataController } from './github-data.controller';
import { GithubDataService } from './github-data.service';

@Module({
  controllers: [GithubDataController],
  providers: [GithubDataService],
})
export class GithubDataModule {}
