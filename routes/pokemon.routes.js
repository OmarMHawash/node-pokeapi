const pokeCon = require("../controllers/pokemons.controller");
const pokeApi = require("../controllers/poke-api.controller");

const WA = "/"; // webApp prefix
const AP = "/api/poke"; // JSON API prefix

module.exports = (app) => {
  // JSON response routes
  app.get(AP + "/all", pokeCon.allPokes);
  app.get(AP + "/random", pokeApi.getRandomPokesJSON);
  app.post(AP + "/new", pokeCon.addPoke);
  app.delete(AP + "/delete/all", pokeCon.deletePokes);

  // webApp Routes
  app.get(WA + "", pokeApi.getRandomPokes);
};
