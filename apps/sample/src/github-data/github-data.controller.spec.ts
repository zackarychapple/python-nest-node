import { Test, TestingModule } from '@nestjs/testing';
import { GithubDataController } from './github-data.controller';

describe('GithubDataController', () => {
  let controller: GithubDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubDataController],
    }).compile();

    controller = module.get<GithubDataController>(GithubDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
