console.log("Hello Express");
console.log("Hello Nodemon");
//Now we can use express
const express = require("express");
const os = require("os");

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

//listen on a port
app.listen(5001, () => {
  console.log(`Server started on http://localhost:5001`);
});
