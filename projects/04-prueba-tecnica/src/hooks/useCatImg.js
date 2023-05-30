import { useEffect, useState } from 'react'
import { fetchCatImg } from '../services/api'
import { RANDOM_IMG_API_PREFIX } from '../services/const'

export default function useCatImg ({ fact }) {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    fetchCatImg(fact).then(url => setImgUrl(url))
  }, [fact])

  return { imgUrl: `${RANDOM_IMG_API_PREFIX}${imgUrl}` }
}
