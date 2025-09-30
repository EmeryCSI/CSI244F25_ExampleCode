const fs = require("fs");
//fs is used manage files in node
//writefile() takes 3 arguments
//first is a filename
//second is the data you want to write
//3rd is callback function that will be called when it is done
//--That callback function will be given an error IF one occurred

fs.writeFile("example.txt", "Hello Node!", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("File Written");
});

//readfile
fs.readFile("example.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
