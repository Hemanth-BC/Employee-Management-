const mongoose = require("mongoose");

const DB_URL = process.env.MONGO_URI;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(`MongoDB is Connected...`);
  })
  .catch((err) => {
    console.log(`Error while mongoDB connection`);
  });
