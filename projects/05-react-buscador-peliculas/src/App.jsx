import './App.css'

import { useEffect, useState } from 'react'
import withResults from './mock/withResults.json'
import noResults from './mock/noResults.json'
import { Movies } from './components/Movies'
import { getMovies } from './services/movies'

function App () {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getMovies(search)
      .then(movies => {
        setMovies(movies)
      })
      .catch(err => {
        console.log(err)
        setMovies([])
      })
  }, [search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { movieName } = e.target
    console.log(movieName.value)
    if (movieName.value === '') return setMovies([])
    const movies = await getMovies(movieName.value)
    console.log(movies)
    // setMovies(withResults.Search)
  }

  return (
    <main>
      <h1>Buscador de Peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input name='movieName' placeholder='John Wick' />
        <button>Buscar</button>
      </form>
      <section>
        {movies.length > 0
          ? <Movies movies={movies} />
          : <p>Pelicula no encontrada</p>}
      </section>
    </main>
  )
}

export default App
