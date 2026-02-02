// is ka kam kya rahat hai ?
//is ka kam rahat hai server ko create karna
/*
note = {
title : "my first note
description : "this is my first note"
}
*/
// make a note array in which we add the note
const express = require("express")


const app = express()

//ye 1 middleware hai
app.use(express.json()) //jo bhi data tum postman se body ke tarf bhej rahe ho o by default express ko rdable form me karta hai 

const notes=[]

// server pe jab data send karna ho tab iska use karna
app.post('/notes',(req,res)=>{
    // console.log(req.body)
    //iske anadar data store hota hai

    notes.push(req.body)

    res.status(201).json({
        message:"Note create successfully"
    })//success
 
})

// server se data fetch karva ho tb use kartein hai get
app.get("/notes",(req,res)=>{


    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })
})


module.exports= app


