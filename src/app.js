const express = require('express');
const app = express();
require('./config/conexion');
const port = process.env.PORT || '3000';
const makeCallback = require('./express-callback')
const dotenv = require('dotenv');

const {postMovie, 
  getMovie, 
  getMoviesDirector, 
  getMoviesGenre,
  patchMovie,
  patchMovieUrl, 
  deleteMovie
} = require('./controllers');

dotenv.config();

const apiRoot = process.env.DM_API_ROOT || ""

app.use(express.json())
// Revisar su funcionalidad
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})

/*
 * Server startup
 */
app.set('port', port);
app.listen()

app.post(`${apiRoot}/movie`, makeCallback(postMovie));
app.get(`${apiRoot}/movie`, makeCallback(getMovie));
app.get(`${apiRoot}/all-movies/`, makeCallback(getMovie));
app.get(`${apiRoot}/movies-director/`, makeCallback(getMoviesDirector));
app.get(`${apiRoot}/movies-genre/`, makeCallback(getMoviesGenre)); // get by genre
app.patch(`${apiRoot}/movie/:id`, makeCallback(patchMovie)); //patch name
app.patch(`${apiRoot}/movie-url/:id`, makeCallback(patchMovieUrl)); //patch url
app.delete(`${apiRoot}/movie/:id`, makeCallback(deleteMovie));


// listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

module.exports = app;