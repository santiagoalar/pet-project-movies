module.exports = function makeGetMovie ({ listMovie, listMoviesGenre, listTopMovies }) {
    return async function getMovie (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        if(listMovie){
          const postMovie = await listMovie({
            id: httpRequest.query.id
          })
          return {
            headers,
            statusCode: 200,
            body: postMovie
          }
        }else if(listMoviesGenre){
          const postMovie = await listMoviesGenre({
            genre: httpRequest.query.genre
            //genre: httpRequest.body.genre
          })
          return {
            headers,
            statusCode: 200,
            body: postMovie
          }
        }else if(listTopMovies){
          const postMovie = await listTopMovies({
            //genre: httpRequest.body.genre
          })
          return {
            headers,
            statusCode: 200,
            body: postMovie
          }
        }
      } catch (e) {
        // TODO: Error logging
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  