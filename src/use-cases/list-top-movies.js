const Movie = require('../models/movie');
const mongoose = require('mongoose');

module.exports = function makeListTopMovies(){

    return async function listTopMovies(){
        const topMovies = await Movie.find().sort({realease_date: -1}).limit(10).exec();
        //mongoose.connection.close();
        return topMovies
    }
}