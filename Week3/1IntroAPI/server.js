//step 1 - Import our libraries
const express = require("express");
const path = require("path");
const simpleMiddleware = require("./simpleMiddleware");
const apiKeymiddleware = require("./apiKeymiddleware");

//step 2 - create an app using the express constructor
const app = express();
const PORT = 3000;

//Define our middleware - functions that run on EVERY requests
app.use(express.json());
//This allows express to get data from the body
app.use(express.urlencoded({ extended: true }));
//add simple middle ware
app.use(simpleMiddleware);
//lets add our api key middleware
app.use(apiKeymiddleware);

//sample data
let courses = [
  { id: 1, name: "CSI-140", teacher: "Lhoucine" },
  { id: 2, name: "CSI-144", teacher: "Will" },
  { id: 3, name: "CSI-240", teacher: "Dimpy" },
];

//step 3 - define endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});
//send the user the html form
app.get("/courseform", (req, res) => {
  //what do i need to do here?
  let fullPath = path.join(__dirname, "public", "course-form.html");
  res.sendFile(fullPath);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(typeof id);
  //how can i pull out the course that matches id?
  let course;
  //find() gets the first matching record based on a predicate
  course = courses.find((c) => c.id == id);
  console.log(`course: ${course}`);
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //we know here that we found it
  res.json(course);
});
//POST request used to create a record
//POST request passes data in the BODY
app.post("/courses", (req, res) => {
  console.log(req.body);
  const course = {
    id: courses.length + 1,
    name: req.body.name,
    teacher: req.body.teacher,
  };
  courses.push(course);
  res.status(201).json(course);
  //res.send("Post Working");
});

//What is a put request
//put is like a combination of get by id and create
//you take in an ID in the query string
//and the data in the body
app.put("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(typeof id);
  //how can i pull out the course that matches id?
  let course;
  //find() gets the first matching record based on a predicate
  course = courses.find((c) => c.id == id);
  console.log(`course: ${course}`);
  if (!course) {
    return res.status(404).send("Course not found");
  }
  const { name, teacher } = req.body;
  course.name = name;
  course.teacher = teacher;
  //sends back a 200 with the updated course
  res.json(course);
});

//step 4 - Listen on a port
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
