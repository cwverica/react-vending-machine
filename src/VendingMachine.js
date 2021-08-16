import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {

    return (
        <div>
            <h1>You are staring at a vending machine.</h1>
            <p>Someone has already entered some money. Might as well choose one of the options:</p>

            Got a sweet tooth? How about a<Link to='/candy'>candy bar.</Link><br />
            Need something salty? Grab a<Link to='/chips'>bag of chips.</Link><br />
            Trying to avoid calories? Blow bubbles on<Link to='/gum'>bubble gum.</Link><br />
        </div>
    )
}

export default VendingMachine;