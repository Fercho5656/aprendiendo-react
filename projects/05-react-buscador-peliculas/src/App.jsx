import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'

function App () {
  const movies = useMovies()
  return (
    <div>
      <h1>Buscador de Películas</h1>
      <header>
        <form>
          <input placeholder='John Wick' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <section>
          <h2>Listado de Películas</h2>
          <Movies movies={movies} />
        </section>
      </main>
    </div>
  )
}

export default App
