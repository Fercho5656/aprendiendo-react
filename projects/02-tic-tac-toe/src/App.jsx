import './App.css'
import confetti from 'canvas-confetti'
import { useState } from 'react'
import { TURNS } from './services/const'
import { Square } from './components/Square'
import { EndgameModal } from './components/EndgameModal'
import { checkWinner, checkTie, resetState, saveGame } from './services/board'

function App () {
  const [board, setBoard] = useState(() => JSON.parse(window.localStorage.getItem('board')) ?? Array(9).fill(null))
  const [turn, setTurn] = useState(() => window.localStorage.getItem('turn') ?? TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetState()
  }

  const updateBoard = (index) => {
    if (board[index] !== null || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGame(newBoard, newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    }

    if (!newWinner && checkTie(newBoard)) {
      setWinner(false) // tie
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <EndgameModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
