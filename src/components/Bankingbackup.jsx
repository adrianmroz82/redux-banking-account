import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  collectInterest,
  deleteAccount,
  deposit,
  withdraw,
} from '../actions/bankingActions';

const Banking = () => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleDeposit = () => {
    // amount initailly is a string, it has to be converted to int
    dispatch(deposit(amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };
  const handleCollectInterest = () => {
    dispatch(collectInterest());
  };
  const handleDelete = () => {
    dispatch(deleteAccount());
  };

  return (
    <div className="form-group">
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        className="form-control"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleCollectInterest}>Collect Interest %</button>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default Banking;
