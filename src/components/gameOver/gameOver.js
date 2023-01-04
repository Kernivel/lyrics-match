import React from "react";

function GameOver(props){
    return(
        <div>
            <h1>Game is over !</h1>
            <p>You had {props.correct} correct guesses</p>
            <p>And had {props.wrong} wrong guesses</p>
            <output></output>
        </div>
    )
}

export default GameOver;