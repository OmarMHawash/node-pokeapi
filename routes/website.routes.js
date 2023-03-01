const pokeApi = require('../controllers/poke-api.controller')
const PREFIX = "/";

module.exports = (app) => {
  app.get(PREFIX + '',pokeApi.getRandomPokes)
}
