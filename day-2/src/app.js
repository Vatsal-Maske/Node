// Express library ko import kar rahe hain
// Express ka kaam hota hai server create karna
const express = require("express");

// Express ka object bana rahe hain
const app = express();

/*
Middleware:
express.json() ka kaam hota hai
Postman / frontend se jo JSON data body me aata hai
use readable format me convert karna
*/
app.use(express.json());

/*
Notes ko store karne ke liye ek array
Example note:
{
  title: "My first note",
  description: "This is my first note"
}
*/
const notes = [];

/*
POST REQUEST
Jab server par data bhejna ho (note create karna ho)
URL: /notes
*/
app.post("/notes", (req, res) => {
  // req.body me postman se bheja hua data hota hai
  notes.push(req.body);

  // Success response
  res.status(201).json({
    message: "Note created successfully",
  });
});

/*
GET REQUEST
Jab server se data fetch karna ho
URL: /notes
*/
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes, // saare notes bhej rahe hain
  });
});

/*
DELETE REQUEST
Specific note delete karne ke liye
:index => dynamic value hoti hai
Example URL: /notes/0
*/
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  // Note delete kar rahe hain (index ke basis par)

  delete notes[ index ]

  res.status(200).json({
    message: "Note deleted successfully",
  });
});



// Pach method use kiya jata ki jab bhi existiong data ko update karna ho tab
app.patch("/notes/:index",(req,res)=>{
  const index = req.params.index

  const description = req.body.description

  notes[index].description=description;
  
  res.status(200).json({
    message : "Note upadated successfully"
  })

})


// App ko export kar rahe hain (use hota hai server.js ya index.js me)
module.exports = app;
