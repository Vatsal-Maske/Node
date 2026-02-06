const express = require('express')
// const model = require('./models/note.model');
const noteModel = require('./models/note.model');

const app = express();

app.use(express.json());//middleware to parse json body

/*

so apan char API banayenge
1. Create a note  (POST)
2. Get all notes (GET)
3. Update a note (PUT)
4. Delete a note (DELETE)   
*/

app.post('/notes',async (req,res)=>{
    const data = req.body 
    /*
    {title ,description}
    */
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note created successfully"
    })
})

app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find(); // ye hamesha data dengi par array ke format me chahe data ho ya na ho

    //findone bhi hota hai jo single object deta hai
    res.status(200).json({
        message:"All notes fetched successfully",
        notes:notes      
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

module.exports = app;
