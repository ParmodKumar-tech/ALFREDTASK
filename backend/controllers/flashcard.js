const flashcardModel=require("../models/flashcard");

module.exports.addFlashcard=async(req,res)=>{
    try{
        const {question,answer}=req.body;
        const {userId}=req.params;
        const flashCard=await flashcardModel.create(
            {question,
            answer,
            userId});
    
        await flashCard.save();
        res.status(200).json({success:true});
    }
    catch(e){
        res.status(500).json({success:false,message:"Internal Sever Error!"});

    }
    
}

module.exports.getFlashcards=async(req,res)=>{
    try{
    const {userId}=req.params;
    const flashCards=await flashcardModel.find({userId:userId})
    res.status(200).json({success:true,data:flashCards});
       
    }
    catch(e){
        res.status(500).json({success:false,message:"Internal Sever Error!"});

    }
}

module.exports.updateFlashcard=async(req,res)=>{
    try{
    const {flashcardId}=req.params;
    const flashCards=await flashcardModel.findOneAndUpdate({_id:flashcardId},{...req.body});
    res.status(200).json({success:true,message:"Update Successfully!"});
    }
    catch(e){
        res.status(500).json({success:false,message:"Internal Sever Error!"});

    }
}


module.exports.showUpdateFlashcard=async(req,res)=>{
    try{
    const {flashcardId}=req.params;
    const flashcard=await flashcardModel.findById({_id:flashcardId});
    res.status(200).json({success:true,data:flashcard});
}
    catch(e){
    res.status(500).json({success:false,message:"Internal Sever Error!"});
    }
}



module.exports.deleteFlashcard=async(req,res)=>{
    try{
    const {flashcardId}=req.params;
    const flashCards=await flashcardModel.findOneAndDelete({_id:flashcardId});
    res.status(200).json({success:true,message:"Delete Successfully!"});
    }
    catch(e){
        res.status(500).json({success:false,message:"Internal Sever Error!"});

    }
}