const Movie = require('../models/movie.js');
const mongoose = require('mongoose');

module.exports = function makeListMoviesGenre(){

    return async function listMoviesGenre({ genre } = {}){
        
        const movies = await Movie.find({ genre: { $regex: genre}}).exec();
        return movies
    }
}