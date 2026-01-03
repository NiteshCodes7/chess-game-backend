import { Module } from '@nestjs/common';
import { MatchmakingService } from './matchmaking.service';
import { GamePersistenceModule } from '../game-persistence/game-persistence.module';

@Module({
  imports: [GamePersistenceModule],
  providers: [MatchmakingService],
  exports: [MatchmakingService],
})
export class MatchmakingModule {}
