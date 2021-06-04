import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { bankingReducer } from './reducers/bankingReducers';
import { Provider } from 'react-redux';

const store = createStore(bankingReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
