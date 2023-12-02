import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg'; // Assuming 'vite.svg' is in the same directory
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Transaction from './Pages/Transactions/Transaction';
import Data from './Pages/Data/Data';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
