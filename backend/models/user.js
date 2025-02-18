const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        require:true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

const userModel=mongoose.model("user",userSchema);
module.exports=userModel;