import useCatImg from './hooks/useCatImg'
import useFact from './hooks/useFact'
import './style.css'

function App () {
  const { fact, onNewFact } = useFact()
  const { imgUrl } = useCatImg({ fact })

  return (
    <main>
      <header>
        <h1>Random Cat Fact</h1>
        <button onClick={onNewFact}>Show new fact</button>
      </header>
      <section>
        <p>{fact}</p>
        {imgUrl && <img src={imgUrl} alt='Cat image fetched from CATAAS API' />}
      </section>
    </main>
  )
}

export default App
