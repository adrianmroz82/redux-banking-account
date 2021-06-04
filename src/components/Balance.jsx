import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const store = useSelector((state) => state);
  return <h1>{store}</h1>;
};

export default Balance;
