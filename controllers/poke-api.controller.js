const helpers = require('../helpers/fetch')
const pokeAPI = require('../utils/pokeAPI')

module.exports.getRandomPokes = async (req, res) => {
  const pokemons_count = pokeAPI.fetch_count;
  res.render("home", { pokes: await helpers.generateRandomPokies(pokemons_count) })
}

module.exports.getRandomPokesJSON = async (req, res) => {
  const pokemons_count = pokeAPI.fetch_count;
  res.json({ message: `list of ${pokemons_count} random pokies`, data: await helpers.generateRandomPokies(pokemons_count) });

}