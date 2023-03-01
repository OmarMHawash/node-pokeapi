//imports
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

// const pokeRoutes = require('./routes/pokemon.routes') //not used
require('dotenv').config();

// express init
const app = express();

// EJS
app.set("view engine","ejs")
app.set('views',path.join(__dirname,'/views/pages'))
app.use(express.static(path.join(__dirname,'/public')));

// mongodb connection
mongoose
  .connect(process.env.MONGODB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to database ${process.env.DB_NAME}`);
      console.log(`server running on port ${process.env.PORT}`);
    });
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/pokemon.routes')(app)
require('./routes/website.routes')(app)