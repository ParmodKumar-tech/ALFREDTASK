import React, { useEffect, useState } from "react";
import Flashcard from "../../Flashcard";
import { Button } from "../../ui/button";
import Box from "../../Box";
import Hero from "./Hero";
import axios from "axios";
import toast from "react-hot-toast";
import { Card } from "@/components/ui/card";
export default function Home() {
  const userId = localStorage.getItem("userId");

  const [box1, setBox1] = useState([]); 
  const [box2, setBox2] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = box1[currentCardIndex];

  useEffect(() => {
    fetchFlashcards();
  }, []);

  async function fetchFlashcards() {
    try {
      const res = await axios.get(`https://backend-alfredtask.vercel.app/flashcard/${userId}`);
      if (res.data.success) {
    
        setBox1(res.data.data); 
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  function moveCard(correct) {
    if (!currentCard) return;

    if (correct) {
      setBox2([...box2, currentCard]);
      const newBox1 = box1.filter((_, index) => index !== currentCardIndex);
      setBox1(newBox1);
    }
    setShowAnswer(false);
  }

  

  return (
    <div className="m-7">
      <Hero />
      <div className="flex flex-wrap gap-1 w-full bg-amber-400 justify-between p-3">
        <Box value={box1} boxNumber={1} />
        <Box value={box2} boxNumber={2} />
      </div>

      <Flashcard value={currentCard} showAnswer={showAnswer} home={true} />

      {currentCard && !showAnswer ? (
        <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
      ) : currentCard && showAnswer ? (
        <>
          <Button onClick={() => moveCard(true)} variant="outline">
            Got it right
          </Button>
          <Button onClick={() => moveCard(false)} variant="outline">
            Got it wrong
          </Button>
        </>
      ) : null}
    </div>
  );
}
