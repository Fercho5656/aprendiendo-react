import { useEffect, useState } from 'react'
import { fetchNewFact, fetchCatImg } from './services/api'
import { RANDOM_IMG_API_PREFIX } from './services/const'
import './style.css'

function App () {
  const [fact, setFact] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const onNewFact = async () => {
    const fact = await fetchNewFact()
    setFact(fact)
  }

  // fetch random cat fact
  useEffect(() => {
    fetchNewFact().then(fact => setFact(fact))
  }, [])

  // fetch random cat image
  useEffect(() => {
    if (!fact) return
    fetchCatImg(fact).then(url => setImgUrl(url))
  }, [fact])

  return (
    <main>
      <header>
        <h1>Random Cat Fact</h1>
        <button onClick={onNewFact}>Show new fact</button>
      </header>
      <section>
        <p>{fact}</p>
        {imgUrl && <img src={`${RANDOM_IMG_API_PREFIX}${imgUrl}`} alt='Cat image fetched from CATAAS API' />}
      </section>
    </main>
  )
}

export default App
