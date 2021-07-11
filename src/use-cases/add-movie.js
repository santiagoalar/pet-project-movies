const Movie = require('../models/movie.js');
const checkMovieInfo = require('../movie')
const mongoose = require('mongoose');

module.exports = function makeAddComment(){
    return async function addMovie(movieInfo){
      const moderated = checkMovieInfo(movieInfo);
        const movie = new Movie({
            name: moderated.getName(),
            realease_date: moderated.getRealease_date(),
            director: moderated.getDirector(),
            genre: moderated.getGenre(),
            cast: moderated.getCast(),
            url: moderated.getUrl()
        })
        
        value = await movie.save().then(result =>{
            mongoose.connection.close()
            return result
        }).catch(err =>{
            console.log(err);
            throw new Error('Movie was not able to be processed')
        })
        return value
    }
}