import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { MatchmakingModule } from '../matchmaking/matchmaking.module';
import { GamePersistenceModule } from '../game-persistence/game-persistence.module';
import { GameController } from './game.controller';

@Module({
  imports: [MatchmakingModule, GamePersistenceModule],
  providers: [GameGateway],
  controllers: [GameController],
})
export class GameModule {}
