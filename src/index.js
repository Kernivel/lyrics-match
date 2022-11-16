import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar.js';
import Card from './card.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
              <Navbar/>
              <div className='gamemodes'>
                <Card img = "/images/sing-icon-placeholder.png" gamemode = "Hiphop" minPlayers = "2" maxPlayers = "4" description = "Rap songs from 2010"/>
                <Card img = "/images/sing-icon-placeholder.png" gamemode = "Hiphop" minPlayers = "2" maxPlayers = "4" description = "Rap songs from 2010"/>
                <Card img = "/images/sing-icon-placeholder.png" gamemode = "Hiphop" minPlayers = "2" maxPlayers = "4" description = "Rap songs from 2010"/>
                <Card img = "/images/sing-icon-placeholder.png" gamemode = "Hiphop" minPlayers = "2" maxPlayers = "4" description = "Rap songs from 2010"/>
              </div>
            </React.StrictMode>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
