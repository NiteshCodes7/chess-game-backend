import { GameState } from './game.state';
import { initialBoard } from '../chess/initialBoard';

export const games = new Map<string, GameState>();

export function createGame(
  gameId: string,
  players: { white: string; black: string },
) {
  games.set(gameId, {
    board: initialBoard,
    turn: 'white',
    players,
  });
}

export function getGame(gameId: string) {
  return games.get(gameId);
}
