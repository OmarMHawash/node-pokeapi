const mongoose = require("mongoose");
require("dotenv").config();

const DB_NAME = 'poke_api'

mongoose
  .connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to database ${DB_NAME}`);
  })
  .catch((err) => console.log("ERROR: Cannot connect to database.\n", err));
