const mongoose=require("mongoose");

const flashcardSchema=new mongoose.Schema({
    question:{
        type: String,
        require:true,
        trim:true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    },
    boxNumber: {
        type: Number,
        default: 1, // All flashcards start in Box 
        min: 1,
        max: 5 // Assume max 5 review levels
    },
    nextReviewDate: {
        type: Date,
        default:new Date() // Initially set to the current date
    }
    ,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
}, { timestamps: true })

const flashcardModel=mongoose.model("flashcard",flashcardSchema);
module.exports=flashcardModel;