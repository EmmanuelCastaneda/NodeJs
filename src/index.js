 const express=require("express");
 const mongoose = require('mongoose');

 require("dotenv").config();
 const userRoutes=require("./routes/user");
 const GuardiaRoutes=require("./routes/guardia");

//  const Guardia=require("./models/guardia");

 //express app

 const app=express();
 const port= process.env.PORT || 3000;

 //middleware
 app.use(express.json());
 app.use("/api",userRoutes,GuardiaRoutes);

 //routes
 app.get("/",(req,res)=>{
     res.send('hello world');
     
 });

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to MongoDB Atlas")) 
    .catch((error)=>console.error(error));


 //mongodb db

 app.listen(port,()=>console.log("server listening on port ",port));