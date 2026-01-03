import { Test, TestingModule } from '@nestjs/testing';
import { GamePersistenceService } from './game-persistence.service';

describe('GamePersistenceService', () => {
  let service: GamePersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamePersistenceService],
    }).compile();

    service = module.get<GamePersistenceService>(GamePersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
