import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { randomUUID } from 'crypto';
import { createGame } from 'src/game/game.store';

type QueuedPlayer = {
  socket: Socket;
};

@Injectable()
export class MatchmakingService {
  private queue: QueuedPlayer[] = [];

  async addPlayer(socket: Socket) {
    // If someone is already waiting → match
    if (this.queue.length > 0) {
      const opponent = this.queue.shift()!;
      await this.createGame(opponent.socket, socket);
    } else {
      this.queue.push({ socket });
    }
  }

  removePlayer(socketId: string) {
    this.queue = this.queue.filter((p) => p.socket.id !== socketId);
  }

  private async createGame(p1: Socket, p2: Socket) {
    const gameId = randomUUID();

    const white = Math.random() < 0.5 ? p1 : p2;
    const black = white === p1 ? p2 : p1;

    createGame(gameId, {
      white: white.id,
      black: black.id,
    });

    await white.join(gameId);
    await black.join(gameId);

    white.emit('match_found', {
      gameId,
      color: 'white',
    });

    black.emit('match_found', {
      gameId,
      color: 'black',
    });

    console.log(`Game ${gameId} created`);
  }
}
