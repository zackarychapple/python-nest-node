import { Test, TestingModule } from '@nestjs/testing';
import { GithubDataService } from './github-data.service';

describe('GithubDataService', () => {
  let service: GithubDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubDataService],
    }).compile();

    service = module.get<GithubDataService>(GithubDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
