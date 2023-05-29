import { Square } from './components/Square'
import { TURNS } from './services/consts'
import { useState } from 'react'
import './App.css'

function App () {
  const [board, setBoard] = useState(Array.from({ length: 7 }, () => Array(6).fill(null)))
  const [turn, setTurn] = useState(TURNS.x)

  const updateBoard = (col, row) => {
    const newBoard = [...board]

    for (let i = newBoard[col].length - 1; i >= 0; i--) {
      if (newBoard[col][i] === null) {
        newBoard[col][i] = turn
        break
      }
    }

    setTurn(turn === TURNS.x ? TURNS.o : TURNS.x)
    setBoard(newBoard)
  }

  return (
    <>
      <div className='board'>
        <h1>Connect 4</h1>
        <div className='game'>
          {
            board.map((col, i) => {
              return (
                <div className='col' key={i}>
                  {col.map((cell, j) => {
                    return (
                      <Square key={`${j}`} col={i} row={j} handleClick={updateBoard}>
                        {board[i][j]}
                      </Square>
                    )
                  })}
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
