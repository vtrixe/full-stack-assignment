const express = require('express')
const app = express()
const port = 3001

const USERS = [];
app.get('/', function(req, res) {
  res.send('Hello from the root route!');
});

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];


const SUBMISSION = [

]

app.post('/signup', function(req, res) {
  // Decode the request body
  const { email, password } = req.body;

  // Check if the user with the given email already exists
  const existingUser = USERS.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).send('User already exists');
  }

  // Create a new user object
  const newUser = { email, password };

  // Add the new user to the USERS array
  USERS.push(newUser);

  // Return a 200 status code and a success message to the client
  res.status(200).send('User created successfully!');
});


app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client


  res.send('Hello World from route 2!')
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!")
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})