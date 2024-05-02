const express=require("express");
const GuardiaSchema=require("../models/guardia");
const router =express.Router();

// create guardia 
router.post("/guardias",(req,res)=>{
    const guardia= GuardiaSchema(req.body);
    guardia
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//get all Guardias

router.get("/guardias",(req,res)=>{
    GuardiaSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});


//get a guardia

router.get("/guardias/:id",(req,res)=>{
    const {id}=req.params;  
    GuardiaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//update a guardia
router.put("/guardias/:id",(req,res)=>{
    const {id}=req.params;
    const {name,age,contacto}=req.body;
    GuardiaSchema
        .updateOne({_id:id},{$set:{name,age,contacto}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

//delete a user
router.delete("/guardias/:id",(req,res)=>{
    const {id}=req.params;
    GuardiaSchema
        .deleteOne({_id:id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});



module.exports=router;
