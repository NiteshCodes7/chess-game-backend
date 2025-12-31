/* eslint-disable prettier/prettier */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class GameGateway {
  @WebSocketServer()
  server: Server;

  // 🧠 When a client connects
  handleConnection(socket: Socket) {
    console.log("Client connected:", socket.id);
  }

  // 🧠 When a client disconnects
  handleDisconnect(socket: Socket) {
    console.log("Client disconnected:", socket.id);
  }

  // 🏠 Join a game room
  @SubscribeMessage("join_game")
  handleJoinGame(
    @MessageBody() gameId: string,
    @ConnectedSocket() socket: Socket
  ) {
    socket.join(gameId);
    console.log(
      `Socket ${socket.id} joined game ${gameId}`
    );
  }

  // ♟️ Relay move to opponent
  @SubscribeMessage("move")
  handleMove(
    @MessageBody()
    data: {
      gameId: string;
      from: { row: number; col: number };
      to: { row: number; col: number };
    },
    @ConnectedSocket() socket: Socket
  ) {
    socket
      .to(data.gameId)
      .emit("opponent_move", {
        from: data.from,
        to: data.to,
      });
  }
}
