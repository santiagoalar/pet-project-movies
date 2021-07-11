const Movie = require('../models/movie');

module.exports = function makeEditMovie(){
    return async function editMovie({ id, ...changes }){
        if (!id) {
            throw new Error('You must supply an id.')
        }
        if (!changes.name) {
            throw new Error('You must supply a name.')
        }

        const movie = await Movie.findByIdAndUpdate(id, {name : changes.name}, {new: true}, (err, doc)=>{
            if(err) console.log(err);
        });
        return movie._doc
    }
}