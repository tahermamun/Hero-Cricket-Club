import './App.css';
import { React, useEffect, useState } from 'react';
import Data from './fakeData/data.json'
import Player from './component/Player/Player'
import PlayerCart from "./component/PlayerCart/PlayerCart";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  // state use for all Player Section
  const [player, setPlayer] = useState([])
  //State use for Player Cart Section
  const [playerCart, setPlayerCart] = useState([])

  // Data load from json file
  useEffect(() => {
    setPlayer(Data)
  }, []);

  // Player Add button function
  const handleAddPlayer = (player) => {
    const addPlayer = [...playerCart, player]
    setPlayerCart(addPlayer)
  }
  return (
    <div className='main-container'>
      <h1 className='heading success'>Hero Cricket Club 2021</h1>

      {/* Full website body div */}
      <div className="d-flex">
        {/* Random 15 player div */}
        <div className="player-card-container">
{/*Get Player information using map function */}
          {
            player.map(player => <Player key={player.id} player={player} handleAddPlayer={handleAddPlayer}></Player>)

          }
        </div>
        {/* Selected Plyer summery div */}
        <div className="selected-player-container">
          <PlayerCart playerCart={playerCart}></PlayerCart>
        </div>

      </div>
    </div>
  );
}

export default App;
