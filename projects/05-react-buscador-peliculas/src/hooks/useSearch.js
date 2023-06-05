import { useEffect, useRef, useState } from 'react'

export default function useSearch () {
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = input === ''
      return
    }

    if (input === ' ') return
    if (input === '') return setError('El campo no puede estar vacío')
    if (input.length < 3) return setError('La búsqueda debe tener al menos 3 caracteres')
    setError(null)
  }, [input])

  return { input, setInput, error }
}
