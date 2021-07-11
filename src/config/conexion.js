const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin2:QtC5e4bxxw!tJJL@cluster0.pqco8.mongodb.net/moviesDatabase?retryWrites=true&w=majority';
mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(()=>{
    console.log("Database connected");
})
.catch(err => console.log(err));

/*
const Movie = require('../models/movie.js');
const movie = new Movie({
    name: "Luca",
    realease_date: new Date(),
    director: "Enrico Casarosa",
    genre: "Adventure, Comedy, Animated Cartoon",
    cast: "Jack Dylan Grazer, Jacob Tremblay, Giacomo Gianniotti "
})

movie.save().then(result =>{
    console.log(result);
    mongoose.connection.close()
}).catch(err =>{
    console.log(err);
})*/