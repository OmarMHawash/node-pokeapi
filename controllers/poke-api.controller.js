const axios = require('axios')

const getRandomPokies = async () => {
  let pokes = [];
  for (let i = 0; i < 3; i++) {
    let randomInt = Math.ceil(Math.random() * 100);
    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt}`)
    let newPoke = { name: poke.data.name, moves: poke.data.moves }
    pokes = [...pokes, newPoke]
  }
  return pokes
}

module.exports.getRandomPokes = async (req, res) => {
  res.render("home", { pokes: await getRandomPokies() })
}

module.exports.getRandomPokesJSON = async (req, res) => {
  res.json({ message: "list of 3 random pokes", data: await getRandomPokies() });
}