const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "poke name is required!"],
    minlength: [3, "poke name must be atleast 3 letters long!"],
    maxlength: [50, "poke name must be at max 50 letters long!"]
  }
}, { timestamps: true })

const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon