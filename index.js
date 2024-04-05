import express from "express";
import cors from 'cors';
import message from "./message.model.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use(cors())

const connectToMongoDB = async ()=>{
    try{
        await  mongoose.connect("mongodb+srv://ayush:ayush@cluster0.hdp8idk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to mongoDB");
    }catch(error){
        console.log(error)
    }
}

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.post("/message",(req,res)=>{
    console.log(req.body);
  const {content} =req.body;

  const new_m = new message({
    message : content
  })

  new_m.save();

  res.status(200).json({message:"saved success"})

})


app.listen(5000,()=>{
    connectToMongoDB();
    console.log("server running on port 5000")
})