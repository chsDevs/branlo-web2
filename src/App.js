//Librerias
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Estaticos
import Navegacion from './container/Navegacion/Navegacion';
import Footer from './container/Footer/Footer';
//Dinamicos
import QuienesSomos from './container/QuienesSomos/QuienesSomos';
import AcercaDeNosotros from './container/AcercaDeNosotros/AcercaDeNosotros';
import Historia from './container/Historia/Historia';
import Contacto from './container/Contacto/Contacto';
import Clientes from './components/Clientes/Clientes';


function App() {
  return (
    <Router>
      <Navegacion/>
      <Route exact path="/" component={QuienesSomos} />
      <Route path="/AcercaDeNosotros" component={AcercaDeNosotros}/>
      <Route path="/Historia" component={Historia} />
      <Route path="/Contacto" component={Contacto} />
      <Route path="/Clientes" component={Clientes} />
      <Footer/>
    </Router>
  );
}

export default App;