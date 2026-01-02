import { BoardState } from '../types/chess';
import { findKing } from './findKing';
import { isSquareAttacked } from './isSquareAttacked';
import { simulateMove } from './simulateMove';

export function isMoveLegal(
  board: BoardState,
  fromRow: number,
  fromCol: number,
  toRow: number,
  toCol: number,
  color: 'white' | 'black',
): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const simulatedBoard = simulateMove(board, fromRow, fromCol, toRow, toCol);

  const kingPos = findKing(simulatedBoard, color);
  if (!kingPos) return false;

  const opponent = color === 'white' ? 'black' : 'white';

  return !isSquareAttacked(simulatedBoard, kingPos.row, kingPos.col, opponent);
}
