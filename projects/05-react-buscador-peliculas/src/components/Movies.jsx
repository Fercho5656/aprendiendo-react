export default function Movies ({ movies }) {
  const canRender = movies?.length > 0

  return (
    canRender
      ? <MoviesList movies={movies} />
      : <p>No hay películas para mostrar</p>
  )
}

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <p>{movie.title} - {movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
