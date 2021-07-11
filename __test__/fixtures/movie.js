const faker = require('faker');
/*const cuid = require('cuid');
const crypto = require('crypto'); */

/*const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
})

function md5 (text) {
  return crypto
    .createHash('md5')
    .update(text, 'utf-8')
    .digest('hex')
}*/

module.exports = function makeFakeMovie (overrides) {
  const movie = {
    name: faker.name.title,
    realease_date: Date.now(),
    director: faker.name.findName(),
    genre: faker.music.genre(),
    cast: faker.name.findName(),
    url: faker.internet.url,
    source: {
      ip: faker.internet.ip(),
      browser: faker.internet.userAgent(),
      referrer: faker.internet.url()
    }
  }
  /*comment.hash = md5(
    comment.text +
      comment.published +
      (comment.author || '') +
      (comment.postId || '') +
      (comment.replyToId || '')
  )*/

  return {
    ...movie,
    ...overrides
  }
}
