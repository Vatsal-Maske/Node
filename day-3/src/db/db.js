const mongoose = require('mongoose');


async function connectDB(){

    // await mongoose.connect("mongodb+srv://yt:YoKJIMG9k807mRaG@nodejs-1.fjaiisf.mongodb.net/") 
    //this uri from the cluster only to apan ko database ke pass jana hai


    await mongoose.connect("mongodb+srv://yt:YoKJIMG9k807mRaG@nodejs-1.fjaiisf.mongodb.net/halley") 

    //last me hally database ka name de diya hai taki wo database create ho jaye agar wo pehle se na ho to create ho jayenga

    console.log("Database connected successfully")
}

module.exports = connectDB;