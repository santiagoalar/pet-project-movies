const { Schema, model} = require('mongoose');

const movieSchema = new Schema({
    name: { type: String },
    realease_date: { type: Date },
    director: { type: String },
    genre: { type: String },
    cast: { type: String },
    url: { type: String}
});

const Movie = model('Movies', movieSchema);

module.exports = Movie;



