import { useEffect, useState } from 'react'
import './style.css'

function App () {
  const RANDOM_FACT_API = 'https://catfact.ninja/fact'
  const RANDOM_IMG_API = 'https://cataas.com/cat/says/'
  const RANDOM_IMG_API_PREFIX = 'https://cataas.com'

  const [fact, setFact] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  // fetch random cat fact
  useEffect(() => {
    fetch(RANDOM_FACT_API)
      .then(res => res.json())
      .then(({ fact }) => setFact(fact.split(' ', 1).join(' ')))
  }, [])

  // fetch random cat image
  useEffect(() => {
    if (!fact) return
    fetch(`${RANDOM_IMG_API}${fact}?json=true`)
      .then(res => res.json())
      .then(({ url }) => setImgUrl(`${RANDOM_IMG_API_PREFIX}${url}`))
  }, [fact])

  return (
    <main>
      <h1>Random Cat Fact</h1>
      <section>
        <p>{fact}</p>
        {imgUrl && <img src={imgUrl} alt='Cat image fetched from CATAAS API' />}
      </section>
    </main>
  )
}

export default App
