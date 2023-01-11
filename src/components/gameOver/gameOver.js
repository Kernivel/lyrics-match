import React from "react";
import "./gameOver.css"
function GameOver(props){
    return(
        <div className="gameover">
            <h1>Game is over !</h1>
            <ul>
                {props.songsGuessed.map((el,idx) => {
                    if(el === true)
                    {
                        return (<li className="guesses correctGuess">
                                    <ul>
                                        <li>
                                            {props.songList[idx].artist}
                                        </li>
                                        <li>
                                            {props.songList[idx].title}
                                        </li>
                                        <li>
                                            {props.songList[idx].firstLyrics}
                                        </li>
                                        <li>
                                            {props.songList[idx].secondLyrics}
                                        </li>
                                    </ul>
                        </li>)
                    }else{
                        return (<li className="guesses wrongGuess">
                                    <ul>
                                        <li>
                                            {props.songList[idx].artist}
                                        </li>
                                        <li>
                                            {props.songList[idx].title}
                                        </li>
                                        <li>
                                            {props.songList[idx].firstLyrics}
                                        </li>
                                        <li>
                                            {props.songList[idx].secondLyrics}
                                        </li>
                                    </ul>
                        </li>)
                    }
                })}
            </ul>
            <p>You had {props.correct} correct guesses</p>
            <p>And had {props.wrong} wrong guesses</p>
            <output></output>
        </div>
    )
}

export default GameOver;