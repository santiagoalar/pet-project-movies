const makeAddMovie = require('./add-movie');
const makeListMovie = require('./list-movie');
const makeListMoviesGenre =  require('./list-movie-genre');
const makeListMovies = require('./list-movies-director');
const makeListTopMovies = require('./list-top-movies');
const makeEditMovie = require('./edit-movie');
const makeEditMovieUrl = require('./edit-movie-url')
const makeRemoveMovie = require('./remove-movie');

const addMovie = makeAddMovie();
const listMovie = makeListMovie();
const listMoviesGenre = makeListMoviesGenre();
const listMoviesDirector = makeListMovies();
const listTopMovies = makeListTopMovies();
const editMovie = makeEditMovie();
const editMovieUrl = makeEditMovieUrl();
const removeMovie = makeRemoveMovie();

const movieService = Object.freeze({
    addMovie,
    listMovie,
    listMoviesDirector,
    listMoviesGenre,
    listTopMovies,
    editMovie,
    editMovieUrl,
    removeMovie
});

module.exports = movieService;
//export {addMovie};