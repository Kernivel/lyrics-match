import React from "react";
import './card.css'
export default function Card(props){
    return(
        <div className="card">
            <h2 className="card--artist">{props.artist}</h2>
            <hr/>
            <h3 className="card--title">{props.title}</h3>
            <p className="card--lyrics firstLyrics">{props.firstLyrics}...</p>
            <p className="card--lyrics secondLyrics">{props.secondLyrics}</p>
        </div>
    );
}