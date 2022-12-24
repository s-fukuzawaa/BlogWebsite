const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

console.log("baby")

app.use("/eyeray", (req,res)=>{
    console.log("hey this is eyeray url")
})

app.listen("5001", ()=>{
    console.log("Backend is running.");
})