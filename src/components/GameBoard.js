import React from 'react'

function GameBoard({ cards, handleCardClick }) {

    shuffle(cards)

    function shuffle(list) {
        for (var currentIndex = list.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            const temp = list[currentIndex];
            list[currentIndex] = list[randomIndex];
            list[randomIndex] = temp
        }
    }

    return <div className="game-bord">
        {
            cards.map((card) => <img className={card} key={card.id} src={card.logoURL} onClick={handleCardClick} id={card.logoURL} alt='card'></img>)
        }
    </div>
}

export default GameBoard;
