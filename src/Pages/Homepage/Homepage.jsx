import React from "react";
import { useNavigate } from "react-router-dom";
import photo from '../Homepage/crypto-homepage.png'

import './Homepage.css'

function Homepage() {
  const navigate = useNavigate();

  const handleTransactionsButtonClick = () => {
    navigate('/transactions');
  };
  const handleDataButtonClick = () => {
    navigate('/data');
  };

  return (
    <div className="homepage">
      <div className="homepage-header">
        Homepage
      </div>

      <div className="home-display">
        <div className="homepage-subheader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
          <div className="homepage-btn-section">
            <div>
              <button className="homepage-btn" onClick={handleTransactionsButtonClick}>
                Transactions
              </button>
            </div>
            <div>
              <button className="homepage-btn" onClick={handleDataButtonClick}>Data</button>
            </div>
          </div>
        </div>
        <div>
          <img src={photo} alt="Crypto-Homepage" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
