const Movie = require('../models/movie');

module.exports = function makeRemoveMovie(){

    return async function removeMovie({ id } = {}){

        if (!id) {
            throw new Error('You must supply a movie id.')
        }

        const deletedMovie = await Movie.findByIdAndRemove(id, {new: true});
        return deletedMovie._doc
    }
}