const express=require("express");
const router=express.Router({mergeParams:true})
const flashcardController=require("../controllers/flashcard");

router
    .route("/:userId")
    .get(flashcardController.getFlashcards);

router
    .route("/add/:userId")
    .post(flashcardController.addFlashcard);   


router
    .route("/update/:flashcardId")
    .get(flashcardController.showUpdateFlashcard)
    .post(flashcardController.updateFlashcard);

    

router
    .route("/delete/:flashcardId")
    .get(flashcardController.deleteFlashcard);

        
module.exports=router;