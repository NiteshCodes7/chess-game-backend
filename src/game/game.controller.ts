import { Controller, Get, Param } from '@nestjs/common';
import { GamePersistenceService } from '../game-persistence/game-persistence.service';

@Controller('game')
export class GameController {
  constructor(private readonly gamePersistence: GamePersistenceService) {}

  @Get(':id')
  getGame(@Param('id') id: string) {
    return this.gamePersistence.getGame(id);
  }
}
