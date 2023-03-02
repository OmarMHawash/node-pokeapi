const axios = require("axios");
const pokeAPI = require('../utils/pokeAPI')
const axiosFetch = async (method, url_params) => {

  const axiosConfig = {
    method: method,
    url: pokeAPI.pokemons_url + url_params,
  };

  try {
    let result = await axios(axiosConfig);
    return result;
  } catch {
    console.log("couldnt fetch API\n", axiosConfig);
  }
};

module.exports.generateRandomPokies = async (pokies_count) => {
  let pokes = [];
  for (let i = 0; i < pokies_count; i++) {
    let randomInt = Math.ceil(Math.random() * 100);
    let API_Poke = await axiosFetch("get",`${randomInt}`)
    let customPoke = { name: API_Poke.data.name, moves: API_Poke.data.moves };
    pokes = [...pokes, customPoke];
  }
  return pokes;
};
