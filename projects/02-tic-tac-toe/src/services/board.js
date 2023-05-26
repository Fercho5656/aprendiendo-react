import { WINNING_COMBINATIONS } from './const'

export const checkWinner = (boardToCheck) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  return null
}

export const checkTie = (boardToCheck) => boardToCheck.every(square => square !== null)

export const saveGame = (boardToSave, turn) => {
  localStorage.setItem('board', JSON.stringify(boardToSave))
  localStorage.setItem('turn', turn)
}

export const resetState = () => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}