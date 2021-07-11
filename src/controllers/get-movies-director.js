module.exports = function makeGetMovie ({ listMoviesDirector }) {
    return async function getMovie (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const postMovie = await listMoviesDirector({
          director: httpRequest.query.director
        })
        return {
          headers,
          statusCode: 200,
          body: postMovie
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
  