const movies = []

async function getAllMovies(){
 return movies
}

async function getMovieById(){
  movies[0]._id = id 
  return movies[0]
}

async function getMoviePremieres(){
  movies[0].dataLancamento = new Date()
  return [movies[0]]
}

module.exports = { getAllMovies, getMovieById, getMoviePremieres }