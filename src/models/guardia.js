const mongoose=require("mongoose");
const GuardiaSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    contacto:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model('Guardia',GuardiaSchema);