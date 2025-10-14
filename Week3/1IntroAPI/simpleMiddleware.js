//Middleware is a function that side between the request and your endpoint
// It has access to the req and res
// It also has a next function
const simpleMiddleware = (req, res, next) => {
  console.log("Simple Middleware is running");
  //next() is the next function to run in the reqest response chain
  next();
};

//export to the function to module
module.exports = simpleMiddleware;
