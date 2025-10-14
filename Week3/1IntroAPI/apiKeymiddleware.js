const apiKeymiddleware = (req, res, next) => {
  //we also have access to the req res in our middleware
  //inside of the request there is an object called header
  //we are going to check the header for a property called
  //"x-api-key"
  const apiKey = req.header("x-api-key");
  console.log(apiKey);
  if (apiKey !== "1234") {
    //lets send back a 401 (unauthorized)
    return res.status(401).json({ error: "Invalid API Key" });
  }
  //Here I know the apiKey was valid
  //call the next function in the chain
  next();
};

//export the function
module.exports = apiKeymiddleware;
