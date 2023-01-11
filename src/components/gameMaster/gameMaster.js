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
    let guessedSongs = Array(songsPerPlayer);
    guessedSongs = guessedSongs.fill(false);
    console.log(guessedSongs);
    const [songsGuessed,setSongsGuessed] = React.useState(guessedSongs);

    function nextPlayer()
    {
        setPlayerIndex((prevPlayer)=> {
            return prevPlayer+1;
        })
        setCardIndex(() => {
            return 0;
        })
        setGuesses(()=>{
            return {correct:0,wrong:0};
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

        setSongsGuessed((prevGuesses)=>
        {
            return prevGuesses.map((el,idx)=>{
                if(idx === cardIndex)
                {
                    return true
                } else {
                    return el;
                }
            })
        })

    }

    function wrongGuess()
    {
        setCardIndex((prevIndex)=>{
            return prevIndex+1
        })

        setGuesses((prevGuesses)=>{
            return {
                ...prevGuesses,
                wrong:prevGuesses.wrong+1
            }
        })

        setSongsGuessed((prevGuesses)=>
        {
            return prevGuesses.map((el,idx)=>{
                if(idx === cardIndex)
                {
                    return false
                } else {
                    return el;
                }
            })
        })
    }

    function retry()
    {
        window.location.reload(false);
    }

    return(
        <div className="gameMaster">
            {playerIndex < maxPlayers && cardIndex < songsPerPlayer && <div className='smallButton wrongGuessButton' onClick = {wrongGuess}><img src="/images/Wrong_Click.png" alt="Wrong"/></div>}
            {playerIndex < maxPlayers && cardIndex < songsPerPlayer && <Game playersSongs = {playersSongs[playerIndex]} cardIndex = {cardIndex}/>}
            {playerIndex < maxPlayers && cardIndex < songsPerPlayer && <div className='smallButton correctGuessButton' onClick = {correctGuess}><img src="/images/Correct_Click.png" alt="Correct"/></div>}

            {playerIndex < maxPlayers && cardIndex >= songsPerPlayer && <GameOver songsGuessed = {songsGuessed} songList = {playersSongs[playerIndex]} correct = {guesses.correct} wrong = {guesses.wrong}/>}
            {playerIndex < maxPlayers && cardIndex >= songsPerPlayer && <div className='smallButton nextPlayerButton' onClick = {nextPlayer}><img src="/images/Next_Click.png" alt="Next Player"/></div>}
            {playerIndex >= maxPlayers && <div className='smallButton retryButton' onClick = {retry}><img src="/images/Redo_Click.png" alt="Replay"/></div>}
        </div>
    );
}