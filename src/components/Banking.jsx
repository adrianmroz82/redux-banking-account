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
      <button onClick={handleDeposit} className="btn btn-success">
        Deposit
      </button>
      <button onClick={handleWithdraw} className="btn btn-primary">
        Withdraw
      </button>
      <button onClick={handleCollectInterest} className="btn btn-warning">
        Collect Interest %
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete Account
      </button>
    </div>
  );
};

export default Banking;
