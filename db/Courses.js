const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    us:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"us"   
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    }

    })
module.exports = mongoose.model("courses",userSchema);