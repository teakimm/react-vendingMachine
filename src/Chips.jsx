import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
    return (
        <div>
            yummy chips
            <div>
                <Link className='btn btn-warning' to="/">Home</Link>
            </div>
        </div>
    );
}

export default Chips;