const fs = require("fs");
const path = require("path");
//http module is used to setup a webserver
//its just a server which responds to requests (http)
const http = require("http");
//To start a server create variable by calling http.createServer((req, res)=>{})

const server = http.createServer((req, res) => {
  //lets try to send back an html file
  console.log(req.url);
  if (req.url === "/") {
    //we want to send an html file
    const filePath = path.join(__dirname, "index.html");
    //give that path to fs.readFile()
    fs.readFile(filePath, "utf8", (error, data) => {
      res.end(data);
    });
  }
  //This is an endpoint
  if (req.url === "/test") {
    res.end("Test Working");
    console.log(req.url);
  }
  //if a request goes to /api
  if (req.url === "/api") {
    //We can put information in the HEADER of the response
    //include a status code of 200 (OK) - Im sending you JSON data
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ name: "Josh Emery", age: 43 }));
  }
});

//start the server
//your server starts at 127.0.0.1 : localhost
//it also runs on port number
server.listen(3000, () => {
  console.log(`Server started on http://127.0.0.1:3000`);
});
