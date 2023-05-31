export const getMovies = async (search) => {
  if (search === '') return []
  try {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=f4d06691`
    const response = await fetch(url)
    const json = await response.json()
    const movies = json.Search

    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error(error)
  }
}
