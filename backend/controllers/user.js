
const userModel=require("../models/user");

module.exports.login=async(req,res)=>{
    const {username}=req.body;
    const findUser=await userModel.findOne({username});
    if(findUser){
        return res.status(200).json({success:true,data:findUser,message:"Login Successfull!"});    
    }
    const newUser=await userModel.create({...req.body})
    await newUser.save();
    res.status(200).json({success:true,data:newUser,message:"Login Successfull!"});
}
