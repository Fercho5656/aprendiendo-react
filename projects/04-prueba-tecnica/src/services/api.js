import { RANDOM_FACT_API, RANDOM_IMG_API } from './const'

export const fetchNewFact = async () => {
  const res = await fetch(RANDOM_FACT_API)
  const { fact } = await res.json()
  return fact.split(' ', 1).join(' ')
}

export const fetchCatImg = async (fact) => {
  const res = await fetch(`${RANDOM_IMG_API}${fact}?json=true`)
  const { url } = await res.json()
  return url
}
