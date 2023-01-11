import songs from "../../songList";
import Game from "../gamePlaying/game";
import GameOver from "../gameOver/gameOver"
import React from "react";
import "./gameMaster.css"
export default function GameMaster()
{
    // Load and shuffle the data needed for the next games
    const shuffledSongs = songs.sort((a, b) => 0.5 - Math.random());
    const maxPlayers = 3;
    const songsPerPlayer = 3;
    let playersSongs = [];
    for(let i = 0;i<maxPlayers;i++)
    {
        const playerSongs = shuffledSongs.slice(i*songsPerPlayer,(i+1)*songsPerPlayer)
        playersSongs.push(playerSongs);
    }
    //States
    const [playerIndex,setPlayerIndex] = React.useState(0);
    const [cardIndex,setCardIndex] = React.useState(0);
    const [guesses,setGuesses] = React.useState({correct:0,wrong:0});

    function nextPlayer()
    {
        setPlayerIndex((prevPlayer)=> {
            return prevPlayer+1;
        })
        setCardIndex(() => {
            return 0;
        })

    }

    function correctGuess()
    {
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
        <div className="gameMaster">
            {cardIndex < songsPerPlayer && <div className='wrongGuessButton' onClick = {wrongGuess}></div>}
            {cardIndex < songsPerPlayer && <Game playersSongs = {playersSongs[playerIndex]} cardIndex = {cardIndex}/>}
            {cardIndex < songsPerPlayer && <div className='correctGuessButton' onClick = {correctGuess}></div>}
            
            {cardIndex >= songsPerPlayer && <GameOver correct = {guesses.correct} wrong = {guesses.wrong}/>}
            {cardIndex >= songsPerPlayer && <div className='nextPlayerButton' onClick = {nextPlayer}></div>}
        </div>
    );
}