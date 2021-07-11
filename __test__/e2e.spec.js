const axios = require('axios');
//import commentsDb, { makeDb } from '../src/data-access'
require('../src/config/conexion');
const Movie = require('../src/models/movie');
const mongoose = require('mongoose');
const makeFakeMovie = require('./fixtures/movie');
const dotenv = require('dotenv');
dotenv.config()

describe('Movie API', () => {
  beforeAll(() => {
    //axios.defaults.baseURL = process.env.DM_BASE_URL + process.env.DM_API_ROOT
    axios.defaults.baseURL = process.env.DM_BASE_URL;
    console.log("************************** " + axios.defaults.baseURL)
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.validateStatus = function (status) {
      // Throw only if the status code is greater than or equal to 500
      return status < 500
    }
  })
  afterAll(async () => {
    //require('../src/config/conexion');
    return mongoose.connection.close()
    //const db = await makeDb()
    //return db.collection('comments').drop()
  })

  describe('adding movies', () => {
    // Content moderator API only allows 1 request per second.
    //beforeEach(done => setTimeout(() => done(), 1100))
    /*it('adds a movie to the database', async () => {
      const response = await axios.post(
        '/movie/',
        makeFakeMovie({
            name: "Juan",
            realease_date: "2021-05-27",
            director: "Craig Gillespie",
            genre: "Comedy, Drama, Adventure, Crime",
            cast: "Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser, Emily Beecham,                            Kirby Howell-Baptiste, Mark Strong",
            url: "https://t.me/joinchat/F3WvJoOjzAY2NDMx"
        })
      )
      expect(response.status).toBe(201)
      //const { posted } = response.data
      //console.log("posted")
      //console.log(posted)
      //const doc = await Movie.findById(id).exec()
      //expect(doc).toEqual(posted)
      //expect(doc.published).toBe(true)
      //return commentsDb.remove(posted)
    })*/
    it('requires movie to contain an director', async () => {
      const response = await axios.post(
        '/movie',
        makeFakeMovie({ 
            name: "Luca",
            realease_date: "2021-05-25",
            director: undefined,
            genre: "Comedy, Drama, Adventure, Crime",
            cast: "Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser, Emily Beecham,                            Kirby Howell-Baptiste, Mark Strong",
            url: "https://t.me/joinchat/F3WvJoOjzAY2NDMx"
        })
      )
      expect(response.status).toBe(400)
      expect(response.data.error).toBeDefined()
    })
    it('requires movie to contain a name', async () => {
      const response = await axios.post(
        '/movie',
        makeFakeMovie({            
            name: undefined,
            realease_date: "2021-05-25",
            director: "Enrico Casarosa",
            genre: "Comedy, Drama, Adventure, Crime",
            cast: "Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser, Emily Beecham,                            Kirby Howell-Baptiste, Mark Strong",
            url: "https://t.me/joinchat/F3WvJoOjzAY2NDMx"
        })
      )
      expect(response.status).toBe(400)
      expect(response.data.error).toBeDefined()
    })
    it('requires movie to contain a valid realease_date', async () => {
      const response = await axios.post(
        '/movie',
        makeFakeMovie({ 
            name: "Luca",
            realease_date: "2021-05-2s5",
            director: "Enrico Casarosa",
            genre: "Comedy, Drama, Adventure, Crime",
            cast: "Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser, Emily Beecham,                            Kirby Howell-Baptiste, Mark Strong",
            url: "https://t.me/joinchat/F3WvJoOjzAY2NDMx"
         })
      )
      expect(response.status).toBe(400)
      expect(response.data.error).toBeDefined()
    })
    /*it('scrubs malicious content', async () => {
      const response = await axios.post(
        '/comments',
        makeFakeComment({
          id: undefined,
          text: '<script>attack!</script><p>hello!</p>'
        })
      )
      expect(response.status).toBe(201)
      expect(response.data.posted.text).toBe('<p>hello!</p>')
      return commentsDb.remove(response.data.posted)
    })
    it("won't publish profanity", async () => {
      const profane = makeFakeComment({ id: undefined, text: 'You suck!' })
      const response = await axios.post('/comments', profane)
      expect(response.status).toBe(201)
      expect(response.data.posted.published).toBe(false)
      return commentsDb.remove(response.data.posted)
    })
    it.todo("won't publish spam")*/
  })
  describe('modifying movies', () => {
    // Content moderator API only allows 1 request per second.
    //beforeEach(done => setTimeout(() => done(), 6100))
    it('modifies a movie', async () => {
        const fakeMovie = makeFakeMovie({
            name: 'Anaconda'
        })
        const movie = new Movie(fakeMovie);
        await movie.save().then(result =>{
            mongoose.connection.close()
        })
        const response = await axios.patch(`/movie/${movie._id}`, movie)
        expect(response.status).toBe(200)
        expect(response.data.patched.name).toBe('Anaconda')
        //return Movie.deleteOne({name: "Anaconda"})
    })
  })
  /*describe('modifying movies url', () => {
    // Content moderator API only allows 1 request per second.
    //beforeEach(done => setTimeout(() => done(), 6100))
    it('modifies a movie url', async () => {
        const fakeMovie = makeFakeMovie({
            url: 'http://new-url.com'
        })
        const movie = new Movie(fakeMovie);
        value = await movie.save().then(result =>{
            mongoose.connection.close()
        })
        const response = await axios.patch(`/movie-url/${movie._id}`, movie)
        expect(response.status).toBe(200)
        expect(response.data.patched.url).toBe('http://new-url.com')
    })
  })*/
    describe('deleting movie', () => {
        it('hard deletes', async () => {
            const fakeMovie = makeFakeMovie();
            const movie = new Movie(fakeMovie);
            await movie.save().then(result =>{
                mongoose.connection.close()
            })
            const result = await axios.delete(`/movie/${movie._id}`)
            expect(result.data.deleted.deletedCount).toBe(1)
            expect(result.data.deleted.softDelete).toBe(false)
        })
        /*it('soft deletes', async () => {
            const comment = makeFakeComment()
            const reply = makeFakeComment({ replyToId: comment.id })
            await commentsDb.insert(comment)
            await commentsDb.insert(reply)
            const result = await axios.delete(`/comments/${comment.id}`)
            expect(result.data.deleted.deletedCount).toBe(1)
            expect(result.data.deleted.softDelete).toBe(true)
        })*/
    })
})