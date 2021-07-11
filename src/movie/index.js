module.exports = function buildMakeComment (movieInfo) {
     
      if (!movieInfo.director) {
        throw new Error('La pelicula debe tener un director.')
      }
      if (movieInfo.director.length < 2) {
        throw new Error("El nombre del director debe contener mas de 2 caracteres.");
      }
      if (!movieInfo.name || movieInfo.name.length < 1) {
        throw new Error('El nombre de la pelicula debe incluir al menos un caracter como texto.');
      }
      if (!movieInfo.realease_date) {
        throw new Error('La pelicula debe tener una fecha de estreno.');
      }
      if (!movieInfo.genre || movieInfo.genre.length < 3) {
        throw new Error('El genero de la pelicula debe incluir al menos tres caracteres como texto.');
      }
      if (!movieInfo.cast || movieInfo.cast.length < 3) {
        throw new Error('El reparto de la pelicula debe incluir al menos tres caracteres como texto.');
      }
      if (!movieInfo.url || movieInfo.url.length < 20) {
        throw new Error('La url de la pelicula debe incluir al menos 20 caracteres como texto.');
      }

      try {
        new Date(movieInfo.realease_date);
      } catch (error) {
        throw new Error("La fecha es inválida")
      }
    
      return Object.freeze({
        getName: () => movieInfo.name,
        getDirector: () => movieInfo.director,
        getCreatedOn: () => movieInfo.createdOn,
        getModifiedOn: () => movieInfo.modifiedOn,
        getRealease_date: () => movieInfo.realease_date,
        getGenre: () => movieInfo.genre,
        getCast: () => movieInfo.cast,
        getUrl: () => movieInfo.url
      })
    
  }
  