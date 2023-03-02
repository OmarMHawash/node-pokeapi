const express = require('express');
const path = require("path");

// Configuration
const app = express(); // express init
require('./config/mongoose.config') // database connection
require('dotenv').config() // enviroment variables

// setting up EJS
app.set("view engine","ejs")
app.set('views',path.join(__dirname,'/views/pages'))
app.use(express.static(path.join(__dirname,'/public')));

// Enabling JSON and forms handeling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/pokemon.routes')(app) // api routes

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});