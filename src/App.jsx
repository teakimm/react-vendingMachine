import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
