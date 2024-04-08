import React from 'react';
import { Link } from 'react-router-dom';

const SODA_IMG = "https://img.freepik.com/free-vector/soda-can-aluminium-white_1308-32368.jpg";

function Soda() {
    return (
        <div>
            <img src={SODA_IMG} alt="soda" />
            <div>
                <Link className='btn btn-danger' to="/">Home</Link>
            </div>
        </div>
    );
}

export default Soda;