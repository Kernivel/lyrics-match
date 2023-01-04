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

    function retry()
    {
        setCardIndex(()=>{
            return 0
        })

        setGuesses((prevGuesses)=>{
            return {
                ...prevGuesses,
                wrong:0,
                correct:0
            }
        })
    }

    return(
        <div className='window'>
        { cardIndex<cardsData.length && 
            <div className='game'>
            <div className='wrongGuessButton' onClick = {wrongGuess}></div>
            <Card {...cardsData[cardIndex]}/>
            <div className='correctGuessButton' onClick = {correctGuess}></div>
            </div>
        }
        { cardIndex>=cardsData.length &&
            <div className='endGame'>
                <GameOver {...guesses}/>
                <div className='retryButton' onClick = {retry}></div>
            </div>
        }

        </div>
    );
}