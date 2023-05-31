export const Movies = ({ movies }) => {
  const isMovies = movies.length > 0
  return (
    <>
      {
        isMovies
          ? movies.map(movie => {
            return (
              <article key={movie.imdbID}>
                <h3>{movie.Title} - {movie.Year}</h3>
                <img src={movie.Poster} alt={movie.Title} />
              </article>
            )
          })
          : <p>Pelicula no encontrada</p>
      }
    </>
  )
}
