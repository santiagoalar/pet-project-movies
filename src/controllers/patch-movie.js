module.exports = function makePatchMovie ({ editMovie, editMovieUrl }) {
    return async function patchMovie (httpRequest) {
      try {
        const { source = {}, ...movieInfo } = httpRequest.body
        source.ip = httpRequest.ip
        source.browser = httpRequest.headers['User-Agent']
        if (httpRequest.headers['Referer']) {
          source.referrer = httpRequest.headers['Referer']
        }
        const toEdit = {
          ...movieInfo,
          source,
          id: httpRequest.params.id
        }
        const patched = (editMovie)? await editMovie(toEdit): await editMovieUrl(toEdit);

        return {
          headers: {
            'Content-Type': 'application/json',
            //'Last-Modified': new Date(patched.modifiedOn).toUTCString()
          },
          statusCode: 200,
          body: { patched }
        }
      } catch (e) {
        // TODO: Error logging
        console.log(e)
        if (e.name === 'RangeError') {
          return {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 404,
            body: {
              error: e.message
            }
          }
        }
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }
  