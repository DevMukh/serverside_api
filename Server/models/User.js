const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required: true,
        // unique: true,
        min:3,
    },
    email:{
        type:String,
        required: true,
        // unique:true,
    },
    password:{
        type:String,
        required: true,
        unique:true,
        min:6,
    }
},{timeStamp:true});
module.exports =mongoose.model('userSchema',userSchema);