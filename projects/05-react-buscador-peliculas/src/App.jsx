import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App () {
  const movies = useMovies()
  const { input, setInput, error } = useSearch()

  const handleSubmit = e => {
    e.preventDefault()
    const { query } = Object.fromEntries(new FormData(e.target))
    if (error) return
    console.log(query)
  }

  const handleChange = e => {
    const { value } = e.target
    if (value === ' ') return
    setInput(e.target.value)
  }

  return (
    <div>
      <h1>Buscador de Películas</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input style={{ border: '1px solid', borderColor: error ? 'red' : '' }} name='query' value={input} onChange={handleChange} placeholder='John Wick' />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
