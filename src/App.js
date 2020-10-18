import React from 'react';
import GameBoard from './components/GameBoard'
import './App.css';
import Cards from './components/Cards';
import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard'


function App() {
  const [cards, setCards] = useState(Cards)
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)

  const handleCardClick = (e) => {
    const clickedCard = cards.find((item) => item.logoURL === e.target.id)
    if (!clickedCard.clicked) {
      clickedCard.clicked = true
      setScore(score + 1)
      setCards(cards)
    } else {
      alert('Game Over');
      if (score > highestScore) {
        setHighestScore(score)
      }
      setScore(0)
      setCards(cards.map((item) => { return { ...item, clicked: false } }))
    }
  };

  return <div className="app">
    <div className="header"><h1>Memory Game</h1></div>
    <ScoreBoard score={score} highestScore={highestScore}></ScoreBoard>
    <GameBoard cards={cards} handleCardClick={handleCardClick} />
  </div>
}

export default App;
