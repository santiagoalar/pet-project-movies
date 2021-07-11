const Movie = require('../models/movie.js');
//const checkMovieInfo = require('../movie')
const mongoose = require('mongoose');

module.exports = function makeListMovie () {
    return async function listMovie ({ id } = {}) {
        if(!id){
            const movies = await Movie.find().exec();
            return movies
        }else{
            const movie = await Movie.findById(id).exec();
            return movie._doc
        }
      //console.log("El tamaño de los comentarios es : " + postId);
      /*if (!postId) {
        //throw new Error('You must supply a post id.');
        const comments = await commentsDb.findAll({
          publishedOnly: false
        })
        const nestedComments = nest(comments)
        return nestedComments
      }else{*/
        /*const comments = await commentsDb.findByPostId({
          postId,
          omitReplies: false
        })
        const nestedComments = nest(comments)
        return nestedComments*/
      //}
  
  
      // If this gets slow introduce caching.
      /*function nest (comments) {
        if (comments.length === 0) {
          return comments
        }
        return comments.reduce((nested, comment) => {
          comment.replies = comments.filter(
            reply => reply.replyToId === comment.id
          )
          nest(comment.replies)
          if (comment.replyToId == null) {
            nested.push(comment)
          }
          return nested
        }, [])
      }*/
    }
  }
  