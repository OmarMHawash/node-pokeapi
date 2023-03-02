const Pokemon = require('../models/pokemon.model');

module.exports.allPokes = (req, res) => {
  Pokemon.find()
    .then(pokes => res.json({ message: "list of all pokemons", data: pokes }))
    .catch(err => res.status(400).json({ message: "cannot get pokemons", error: err }))
}

module.exports.addPoke = (req, res) => {
  const { name } = req.body;

  Pokemon.create({ name: name })
    .then(poke => res.json({ message: "added poke successfully ", data: poke }))
    .catch(err => res.status(400).json({ message: "cannot add pokemon", error: err }))
}

module.exports.deletePokes = (req, res) => {
  Pokemon.deleteMany()
    .then(result => res.json({ message: "deleted all pokemons", data: result }))
    .catch(err => res.status(400).json({ message: "cannot delete pokemons", error: err }))
}
