import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="gamemode-icon" alt="sing-icon-ph"></img>
            <div className="card-presentation">
                <h3>{props.gamemode}</h3>
                <p>{props.description}</p>
            </div>
            <p>For <b>{props.minPlayers}-{props.maxPlayers}</b></p>
        </div>
    );
}