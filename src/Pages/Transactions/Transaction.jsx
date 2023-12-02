import React, { useState } from "react";
import './Transaction.css';

function Transaction() {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [walletAddressError, setWalletAddressError] = useState("");
  const [amountError, setAmountError] = useState("");

  const handleWalletAddressChange = (event) => {
    const value = event.target.value;
    setWalletAddress(value);
    setWalletAddressError(validateWalletAddress(value));
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setAmountError(validateAmount(value));
  };

  const validateWalletAddress = (address) => {
    // Simple validation for Ethereum address format (0x...)
    return address.startsWith("0x") && address.length === 42
      ? ""
      : "Invalid Ethereum address";
  };

  const validateAmount = (amount) => {
    // Simple validation for a numeric value within a specified range
    const numericAmount = parseFloat(amount);
    return !isNaN(numericAmount) && numericAmount >= 0 && numericAmount <= 10000
      ? ""
      : "Invalid amount (should be a number between 0 and 10,000)";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if there are no errors before submitting the form
    if (!walletAddressError && !amountError) {
      // Your form submission logic here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="transaction-page">
            <div className="homepage-header">
        Transaction
      </div>
      <div>
        <form className="transaction-form" onSubmit={handleSubmit}>
          <div>Add Transactions</div>
          <div>
            <input
              type="text"
              className="transaction-input"
              placeholder="Wallet Address Here"
              value={walletAddress}
              onChange={handleWalletAddressChange}
            />
            <div className="error-message">{walletAddressError}</div>
          </div>
          <div>
            <input
              type="text"
              className="transaction-input"
              placeholder="Enter Amount Here"
              value={amount}
              onChange={handleAmountChange}
            />
            <div className="error-message">{amountError}</div>
          </div>
          <div>
            <button type="submit" className="homepage-btn transaction-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Transaction;
