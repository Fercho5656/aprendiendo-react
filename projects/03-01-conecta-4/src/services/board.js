import { WINNER_COMBINATIONS } from './consts'

export const checkWinner = (board) => {
  for (const combo of WINNER_COMBINATIONS) {
    const [a, b, c, d] = combo
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      return board[a]
    }
  }

  return null
}

export const checkDraw = (board) => board.every(cell => cell != null)
