import React from 'react'

function ScoreBoard({ score, highestScore }) {
    return <div className="score-board">
        <span><h2>Score: &nbsp;&nbsp;&nbsp; {score}</h2></span>
        <span><h2>Highest Score: &nbsp;&nbsp;&nbsp; {highestScore}</h2></span>
    </div>
}

export default ScoreBoard;