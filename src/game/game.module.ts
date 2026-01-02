import { Module } from '@nestjs/common';
import { GameGateway } from './game.gateway';
import { MatchmakingModule } from 'src/matchmaking/matchmaking.module';

@Module({
  imports: [MatchmakingModule],
  providers: [GameGateway],
})
export class GameModule {}
