import { Square } from './components/Square'
import { TURNS } from './services/consts'
import { useState } from 'react'
import { checkDraw, checkWinner } from './services/board'
import './App.css'
import { EndgameModal } from './components/EndgameModal'

function App () {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (winner) return

    const newBoard = [...board]
    const col = index % 7

    // Fills the last empty square in the column
    for (let i = 6; i >= 0; i--) {
      if (newBoard[col + i * 7] === null) {
        newBoard[col + i * 7] = turn
        break
      }
    }

    // Check for winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      return setWinner(newWinner)
    }

    if (checkDraw(newBoard)) {
      setWinner(false)
    }

    setTurn(turn === TURNS.x ? TURNS.o : TURNS.x)
    setBoard(newBoard)
  }

  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  return (
    <>
      <main className='board'>
        <h1>Connect 4</h1>
        <section className='game'>
          {board.map((col, i) => (
            <Square key={i} index={i} handleClick={updateBoard}>
              {col}
            </Square>
          ))}
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.x}>
            {TURNS.x}
          </Square>
          <Square isSelected={turn === TURNS.o}>
            {TURNS.o}
          </Square>
        </section>
        <EndgameModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  )
}

export default App
