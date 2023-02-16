const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses"
    }
    
    })
module.exports = mongoose.model("us",userSchema);