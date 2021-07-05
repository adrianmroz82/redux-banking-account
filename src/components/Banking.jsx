import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  collectInterest,
  deleteAccount,
  deposit,
  withdraw,
} from '../actions/bankingActions';
import { Button } from '@material-ui/core';
import '../App.css';

const Banking = () => {
  const [amount, setAmount] = useState(1);
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
      <br />
      <Button
        style={{ marginRight: '5px' }}
        variant="contained"
        color="primary"
        onClick={handleDeposit}
      >
        Deposit
      </Button>
      <Button
        style={{ marginRight: '5px' }}
        onClick={handleWithdraw}
        variant="contained"
        color="primary"
      >
        Withdraw
      </Button>
      <Button
        style={{ marginRight: '5px' }}
        variant="contained"
        color="primary"
        onClick={handleCollectInterest}
      >
        Collect Interest %
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete Account
      </Button>
    </div>
  );
};

export default Banking;
