import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const store = useSelector((state) => state);
  return (
    <div>
      <h1>Please enter the amount of money</h1>
      <h1 style={{ color: 'green' }}>{store}$</h1>
    </div>
  );
};

export default Balance;
