import { Square } from './Square'

export const EndgameModal = ({ winner, resetGame }) => {
  if (winner == null) return
  const winnerText = !winner ? 'Empate' : '¡Ganador!'
  return (
    <section className='winner'>
      <div className='text'>
        <h2> {winnerText} </h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Jugar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
