import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { MatchmakingService } from './matchmaking/matchmaking.service';
import { MatchmakingModule } from './matchmaking/matchmaking.module';

@Module({
  imports: [GameModule, MatchmakingModule],
  providers: [MatchmakingService],
})
export class AppModule {}
