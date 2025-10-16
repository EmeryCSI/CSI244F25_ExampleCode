// I need express, dotenv, mongoose
//dotenv is a library that lets us create ENVIRONMENT VARIABLES
//Variable that is available to the whole project
require("dotenv").config();
console.log(process.env.CONNECTION_STRING);
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//mongoose.connect
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});
