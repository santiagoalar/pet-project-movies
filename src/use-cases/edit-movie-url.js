const Movie = require('../models/movie');

module.exports = function makeEditMovieUrl(){
    return async function editMovieUrl({ id, ...changes }){
        if (!id) {
            throw new Error('You must supply an id.')
        }
        if (!changes.url) {
            throw new Error('You must supply a url.')
        }

        const movie = await Movie.findByIdAndUpdate(id, {url : changes.url}, {new: true}, (err, doc)=>{
            if(err) console.log(err);
        });
        return movie._doc
    }
}