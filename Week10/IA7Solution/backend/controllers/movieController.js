//This will be our mongoose controller
//This handles all CRUD operations for Movie
//It uses the movie model to talk to mongodb

//Import the movie model
const Movie = require("../models/movie");

//GET All Movies
//GET /api/movies
const getAllMovies = async (req, res) => {
  try {
    //query the database for all movies
    const movies = await Movie.find();

    if (!movies) {
      return res.status(404).json({ message: "Movies not found" });
    }
    //send back the movies as json
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get a movie by ID
//GET /api/movies/:id
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    //see if we got a movie
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    //return the movie as json
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create a Movie
//POST /api/movies
const createMovie = async (req, res) => {
  //post request gets its data from the body
  const movie = new Movie(req.body);
  //try to save the movie
  try {
    //save the movie to the database
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a movie
//PUT /api/movies/:id
const updateMovie = async (req, res) => {
  console.log(req.params);
  req.body.year = parseInt(req.body.year);
  console.log(req.body);
  try {
    //id comes in through params, movie data from the body
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    console.log(movie);
    //return the updated movie
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a movie
//DELETE /api/movies/:id
const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
