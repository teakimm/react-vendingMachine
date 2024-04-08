import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link className="btn btn-primary" to="/chips">Chips</Link>
            <Link className="btn btn-primary" to="/soda">Soda</Link>
            <Link className="btn btn-primary" to="/sardines">Sardines</Link>
        </div>
    );
}

export default Home;