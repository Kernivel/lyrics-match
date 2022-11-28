import React from 'react';
import cardsData from '../../songList.js';
import Card from '../card/card.js';
import GameOver from '../gameOver/gameOver.js';
import './game.css';

export default function Game(){
    const [cardIndex,setCardIndex] = React.useState(0);
    const [guesses,setGuesses] = React.useState({correct:0,wrong:0});

    function correctGuess(){
        setCardIndex((prevIndex)=>{
            return prevIndex+1;
        })
        setGuesses((prevGuesses)=>{
            return {
                ...prevGuesses,
                correct:prevGuesses.correct+1
            }
        })
    }

    function wrongGuess(){
        setCardIndex((prevIndex)=>{
            return prevIndex+1
        })

        setGuesses((prevGuesses)=>{
            return {
                ...prevGuesses,
                wrong:prevGuesses.wrong+1
            }
        })
    }

    return(
        <div className='game'>
            {cardIndex<cardsData.length && <div className='wrongGuessButton' onClick = {wrongGuess}></div>}
                {cardIndex<cardsData.length?<Card {...cardsData[cardIndex]}/>:<GameOver {...guesses}/>}
            {cardIndex<cardsData.length && <div className='correctGuessButton' onClick = {correctGuess}></div>}
        </div>
    );
}