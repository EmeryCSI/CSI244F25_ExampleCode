require("dotenv").config();
//log the connection string to the console
//console.log(process.env.CONNECTION_STRING);
const mongoose = require("mongoose");
const express = require("express");
//they are creating a port variable
//IF there is a PORT in .env USE IT, if not use 3000
const PORT = process.env.PORT || 3000;

//create an app from express
const app = express();

//we add middleware

//Establish a connection with mongoose
//a promise is an async function - A function that wont return right away - The application can do something
//else while it waits
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("connected to mongoose"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
