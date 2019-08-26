import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';
import logo from '../../img/logo-branlo.png';

export default class Navegacion extends Component {
    render() {
        return (
            <div className="row">
                <header className="col-sm-12 mb-5 pb-5">
                    <nav className="transparent navbar navbar-expand-lg p-3 m-0 navbar-light sticky">
                        <img src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto pr-3 negro">
                                <li className="nav-item pr-3 mr-3">
                                    <Link to='/' className="Link"> Inicio </Link>
                                </li>
                                <li className="nav-item pr-3 mr-3">
                                    <Link to='/Historia' className="Link"> Acerca De Nosotros </Link>
                                </li>
                                <li className="nav-item pr-3 mr-3">
                                    <Link to='/Contacto' className="Link"> Contacto </Link>
                                </li>
                                <li className="nav-item pr-3 mr-3">
                                    <Link to='/Testimoniales' className="Link"> Testimoniales </Link>
                                </li>
                                <li className="nav-item pr-3 mr-3">
                                    <Link to='/Clientes' className="Link"> Clientes </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="centradoHeader mb-5 mt-4 pt-4">
                        <div className="wraperHeader">
                            <h1 className="azul unico">BRANLO</h1>
                            <h3 className="corporativo">CORPORATIVO</h3>
                            <p className="leyenda">
                                (LEYENDA DE LA EMPRESA)
                            </p>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
