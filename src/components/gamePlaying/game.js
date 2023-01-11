import React from 'react';
import Card from '../card/card.js';
import './game.css';

export default function Game(props){

    console.log(props);
    return(
        <div className='window'>
            <div className='game'>
                <Card {...props.playersSongs[props.cardIndex]}/>
            </div>
        </div>
    );
}