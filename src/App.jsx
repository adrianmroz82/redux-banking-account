import React from 'react';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const App = () => {
  return (
    <div className="container">
      <Container style={{ marginTop: '100px' }} fixed maxWidth="md">
        <Auth />
        <Balance />
        <Banking />
      </Container>
    </div>
  );
};

export default App;
