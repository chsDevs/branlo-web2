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
import Socios from './components/Socios/Socios';
import Testimoniales from './components/Testimoniales/Testimoniales';

function App() {
  return (
    <Router>
      <Navegacion/>
      <Route exact path="/" component={QuienesSomos} />
      <Route path="/AcercaDeNosotros" component={AcercaDeNosotros}/>
      <Route path="/Historia" component={Historia} />
      <Route path="/Contacto" component={Contacto} />
      <Route path="/Testimoniales" component={Testimoniales} />
      <Route path="/Socios" component={Socios} />
      <Footer/>
    </Router>
  );
}

export default App;