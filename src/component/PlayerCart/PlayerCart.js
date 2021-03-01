import React from 'react';
import CartPlayerDetails from '../CartPlayerDetails/CartPlayerDetails'
import './PlayerCart.css'

const PlayerCart = (props) => {
    // Get total Player Information
    const playerCart = props.playerCart
    // Player Total Salary Sum function for Cart Section
    const totalSalary = playerCart.reduce((total, player) => total + player.salary, 0)
    return (
        <div >
            {/*Player Cart Summery div*/}
            <div className='team-summery'>
                <h1>Team Summery</h1>
                <h2>Total Player: {playerCart.length}</h2>
                <h3>Total Budget <br /><span className='total-budget-box'>${totalSalary}</span> </h3>
            </div >

            {/* Player Cart Summery with Selected Player Details div */}
            <div className='team-summery-selected-player'>
                <h2>Selected Team Player</h2>
                {
                    playerCart.map(PlayerDetails => <CartPlayerDetails PlayerDetails={PlayerDetails}></CartPlayerDetails>)
                }
            </div>
        </div>
    );
};


export default PlayerCart;