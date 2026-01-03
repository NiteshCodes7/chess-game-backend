import { Module } from '@nestjs/common';
import { GamePersistenceService } from './game-persistence.service';

@Module({
  providers: [GamePersistenceService],
  exports: [GamePersistenceService],
})
export class GamePersistenceModule {}
