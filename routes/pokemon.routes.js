// const router = express.Router() //* not used
const pokeCon = require('../controllers/pokemons.controller')
const pokeApi = require('../controllers/poke-api.controller')
const PREFIX = "/api/poke";

module.exports = (app) => {
  app.get(PREFIX + '/all', pokeCon.allPokes)
  app.get(PREFIX + '/random',pokeApi.getRandomPokesJSON)
  app.post(PREFIX + '/new', pokeCon.addPoke)
  app.delete(PREFIX + '/delete/all', pokeCon.deletePokes)
}
