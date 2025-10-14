//bring in express
const express = require("express");

const app = express();

//middleware

//endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});
