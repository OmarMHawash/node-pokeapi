const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to database ${process.env.DB_NAME}`);
  })
  .catch((err) => console.log("ERROR: Cannot connect to database.\n", err));
