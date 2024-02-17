const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    projectname:String,
    projecttype:String,
    userprofile:Number,
    budget:Number,
    referencewebsites:String,
    companylogo:String,
    moto:String,
    addads:String,
    technologies:String,
    timeline:String

});

module.exports=mongoose.model("UserInfo",UserSchema);