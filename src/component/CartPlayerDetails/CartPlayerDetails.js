import React from 'react';
import './CartPlayerDetails.css'
const CartPlayerDetails = (props) => {
    //Get Selected Player Name and Salary by props
    const { name, salary}=props.PlayerDetails
    return (
        // Selected Player Information div
        <div className='selected-team-player-details'>
            <h4>{name}</h4>
            <p>Salary: ${salary}</p>

        </div>
    );
};

export default CartPlayerDetails;