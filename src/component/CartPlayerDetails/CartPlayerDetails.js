import React from 'react';
import './CartPlayerDetails.css'
const CartPlayerDetails = (props) => {
    const { name, salary}=props.PlayerDetails
    return (
        <div className='selected-team-player-details'>

            <h4>{name}</h4>
            <p>Salary: ${salary}</p>

        </div>
    );
};

export default CartPlayerDetails;