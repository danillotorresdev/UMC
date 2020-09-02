import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import CreateGlobalStyle from './styles/globals';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />
    <CreateGlobalStyle />
  </Router>
);

export default App;
