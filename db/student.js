const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    courses:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses"   
    },
    us:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"us"   
    }
    })
module.exports = mongoose.model("student",userSchema);