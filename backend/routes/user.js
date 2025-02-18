const express=require("express");
const router=express.Router({mergeParams:true})
const userController=require("../controllers/user");

router
    .route("/")
    .post(userController.login);

module.exports=router;