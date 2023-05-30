import { useEffect, useState } from 'react'
import { fetchNewFact } from '../services/api'

export default function useFact () {
  const [fact, setFact] = useState('')

  const onNewFact = async () => {
    const fact = await fetchNewFact()
    setFact(fact)
  }
  useEffect(() => { fetchNewFact().then(fact => setFact(fact)) }, [])

  return { fact, onNewFact }
}
