console.log("Hello Express");
console.log("Hello Nodemon");
//Now we can use express
const express = require("express");
const os = require("os");
const path = require("path");

//step 2 - we call the express constructor to create an app
const app = express();

//we create our endpoints with app.get()
//This is an endpoints at the root http://mywebhost.com
app.get("/", (req, res) => {
  console.log("Hit the root endpoint");
  res.send("Hello from the root");
});
app.get("/system", (req, res) => {
  const sysObject = {
    platform: os.platform(),
    freemem: os.freemem(),
    release: os.release(),
  };
  res.send(sysObject);
});
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//A GET REQUEST: The default request, it sends its data in a query object
//The query is passed in the URL
app.get("/form-submit", (req, res) => {
  //console.log(req.query);
  const { fName, lName, phone } = req.query;
  res.send(`Your first name is ${fName}, last name: ${lName}, phone: ${phone}`);
});

//listen on a port
app.listen(5001, () => {
  console.log(`Server started on http://localhost:5001`);
});
