const {listMovie, 
    addMovie, 
    listMoviesDirector,
    listMoviesGenre,
    listTopMovies,
    editMovie,
    editMovieUrl,
    removeMovie
} = require('../use-cases');

const makePostMovie = require('./post-movie');
const makeGetMovie = require('./get-movie');
const makeGetMovieDirector = require('./get-movies-director');
const makePatchMovie = require('./patch-movie');
const makeDeleteMovie = require('./delete-movie');

const postMovie = makePostMovie({addMovie});
const getMovie = makeGetMovie({listMovie});
const getMoviesDirector = makeGetMovieDirector({listMoviesDirector});
const getMoviesGenre = makeGetMovie({listMoviesGenre})
const getTopMovies = makeGetMovie({listTopMovies});
const patchMovie = makePatchMovie({editMovie});
const patchMovieUrl = makePatchMovie({editMovieUrl});
const deleteMovie = makeDeleteMovie({removeMovie});

const movieController = Object.freeze({
    postMovie,
    getMovie,
    getMoviesDirector,
    getMoviesGenre,
    getTopMovies,
    patchMovie,
    patchMovieUrl,
    deleteMovie
})

module.exports = movieController;
//export {postMovie} 