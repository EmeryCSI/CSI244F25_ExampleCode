//step 1 - Import our libraries
const express = require("express");

//step 2 - create an app using the express constructor
const app = express();
const PORT = 3000;

//Define our middleware - functions that run on EVERY requests
app.use(express.json());
//This allows express to get data from the body
app.use(express.urlencoded({ extended: true }));

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

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(typeof id);
  //how can i pull out the course that matches id?
  let course;
  //find() gets the first matching record based on a predicate
  course = courses.find((c) => c.id === id);
  console.log(`course: ${course}`);
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //we know here that we found it
  res.json(courses);
});
//POST request used to create a record
//POST request passes data in the BODY
app.post("/courses", (req, res) => {
  console.log(req.body);
  res.send("Post Working");
});

//step 4 - Listen on a port
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
