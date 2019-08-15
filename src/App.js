import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegacion from './container/Navegacion/Navegacion';

function App() {
  return (
    <Router>
      <Navegacion/>
    </Router>
  );
}

export default App;
