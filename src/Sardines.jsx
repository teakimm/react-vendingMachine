import React from 'react';
import { Link } from 'react-router-dom';


function Sardines() {
    return (
        <div>
            🐟🐟🐟🐟🐟🐟🐟🐟🐟
            <div>
                <Link className='btn btn-dark' to="/">Home</Link>
            </div>
        </div>
    );
}

export default Sardines;