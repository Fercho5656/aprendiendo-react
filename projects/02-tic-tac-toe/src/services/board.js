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
  window.localStorage.setItem('board', JSON.stringify(boardToSave))
  window.localStorage.setItem('turn', turn)
}

export const resetState = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
