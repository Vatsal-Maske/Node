//iske andar double se moongoose ko require karna hai taki hum database se connect ho sake
const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    title: String,
    description : String,
    // age: Number,
    // dob : Date
})


const noteModel = mongoose.model("Note",noteSchema);

module.exports = noteModel;