const Movie = require('../models/movie.js');
const mongoose = require('mongoose');

module.exports = function makeListMoviesDirector(){

    return async function listMoviesDirector({ director } = {}){
        
        const movies = await Movie.find({ director: { $regex: director}}).exec();
        return movies
    }
}