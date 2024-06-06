import React, { useState, useEffect } from "react"; // Import all necessary hooks
import SingleCard from "./SingleCard.jsx";

const cardImages = [
  { src: "/images/i1.jpg", matched: false },
  { src: "/images/i2.jpg", matched: false },
  { src: "/images/i3.jpg", matched: false },
  { src: "/images/i4.jpg", matched: false },
  { src: "/images/i5.jpg", matched: false },
  { src: "/images/i6.jpg", matched: false },
];

function MemoryGame()  {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false)

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // Duplicate images
      .sort(() => Math.random() - 0.5) // Randomize order
      .map((card) => ({ ...card, id: Math.random() })); // Add unique IDs

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    console.log(card)
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card) // Update choices based on current state
  };

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            } else{
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() =>resetTurn(), 1000)
      }

    }
  }, [choiceOne, choiceTwo]);

  console.log()
  // Reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false)
  };

  //start a new game automagically
  useEffect(() => {
    shuffleCards()
  },[])

  return (
    <div className="Magic">
      <h1>Magic Match</h1>
      <button className="mb" onClick={shuffleCards} style={styles.button}>
        New Game
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={() => handleChoice(card)} // Pass handleChoice function correctly
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

const styles = {
  mb: {
    backgroundColor: "none",
    color: "white",
    border: "2px solid #fff",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1em",
    fontFamily: "Poppins, sans-serif",
  },
  hover: {
    background: "#c23866",
    color: "#fff",
  },
};

export default MemoryGame;
