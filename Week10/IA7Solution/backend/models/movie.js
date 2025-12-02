//This will be our mongoose movie model
//import mongoose
//create a movie schema
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number,
  genre: String,
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
