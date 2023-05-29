import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('mounting effect')
    const onPointerMove = (e) => {
      const { clientX, clientY } = e
      setMousePos({ x: clientX, y: clientY })
    }

    if (enable) {
      console.log('add event listener')
      window.addEventListener('pointermove', onPointerMove)
    }

    return () => {
      console.log('cleanup effect')
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [enable])
  return (
    <main>
      <div className='follow-mouse' style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} />
      <h3>Mouse Follower</h3>
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'}
      </button>
    </main>
  )
}

export default App
