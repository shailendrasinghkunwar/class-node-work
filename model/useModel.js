const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    _id:Number,
    name: String,
    age: Number,
    course: String,
    skills:[String],
    address: {city:String,pincode:Num},
    isActive:Boolean,
    marks:[{subject: String, Score: Number}],

})
const User=mongoose.model("User", userSchema, "myUser");
module.export=User;