import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, picture, salary}= props.player
    return (
        <div className="player-card  p-2">
           <img src={picture} alt=""/>
            <div className='player-card-body' >
            <h3>{name}</h3>
            <p>Salary: ${salary}</p>
            <button className="add-player-button" onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
            
        </div>
    );
};

export default Player;