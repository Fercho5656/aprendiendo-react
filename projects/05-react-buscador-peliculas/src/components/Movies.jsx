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
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <p className='movie-title'>{movie.title}</p>
          <p className='movie-year'>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
