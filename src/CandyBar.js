import React from 'react';
import { Link } from 'react-router-dom';


function CandyBar() {

    return (
        <div>
            <h2>Sweet, smooth candy bar. Yumm!</h2>
            <Link to='/'>Get something else?</Link>
        </div>
    )
};

export default CandyBar;