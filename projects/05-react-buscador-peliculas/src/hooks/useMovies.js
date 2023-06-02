import withMovies from '../mock/withMovies.json'
import noMovies from '../mock/noMovies.json'

export default function useMovies () {
  const movies = withMovies.Search

  return movies.map(movie => (
    {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    })
  )
}
