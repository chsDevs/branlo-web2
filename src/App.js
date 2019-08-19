import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegacion from './container/Navegacion/Navegacion';
import QuienesSomos from './container/QuienesSomos/QuienesSomos';
import AcercaDeNosotros from './container/AcercaDeNosotros/AcercaDeNosotros';
import Historia from './container/Historia/Historia';

function App() {
  return (
    <Router>
      <Navegacion/>
      <Route exact path="/" component={QuienesSomos} />
      <Route path="/AcercaDeNosotros" component={AcercaDeNosotros}/>
      <Route path="/Historia" component={Historia} />
    </Router>
  );
}

export default App;