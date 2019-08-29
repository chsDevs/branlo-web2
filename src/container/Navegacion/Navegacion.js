import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';
import logo from '../../img/logo-branlo.png';

export default class Navegacion extends Component {
    render() { 
        return (
            <div className="row overflow-auto">
                <header className="col-sm-12 mb-5 pb-5 container">
                    <nav className="transparent navbar navbar-expand-lg p-3 m-0 navbar-light sticky">
                        <img src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto pr-3 negro">
                                {/* <li className="nav-item pr-3 mr-3">
                                    <Link to='/' className="Link"> Inicio </Link>
                                </li> */}
                                {/* <li className="nav-item pr-2 mr-2">
                                    <Link to='/Historia' className="Link"> Acerca De Nosotros </Link>
                                </li> */}
                                {/* <li className="nav-item pr-2 mr-2">
                                    <Link to='/Contacto' className="Link"> Contacto </Link>
                                </li> */}
                                
                                <li className="nav-item pr-2 pl-3 mr-2 mt-2">
                                    <Link to='#' className="Link" data-toggle="collapse" data-target=".navbar-collapse"> Amortizaciones </Link>
                                </li>
                                <li className="nav-item pr-2 pl-3 mr-2 mt-2">
                                    <Link to='/Socios' className="Link" data-toggle="collapse" data-target=".navbar-collapse"> Socios-Comerciales </Link>
                                </li>
                                <li className="nav-item pr-2 pl-3 mr-2 mt-2">
                                    <Link to='#' className="Link" data-toggle="collapse" data-target=".navbar-collapse"> Testimoniales </Link>
                                </li>
                                <li className="nav-item pr-2 pl-3 mr-2 mt-2">
                                    <Link to='/Testimoniales' className="Link" data-toggle="collapse" data-target=".navbar-collapse"> Galeria </Link>
                                </li>
                                {/* <li className="nav-item pr-2 mr-2">
                                    <Link to='#' className="Link"> Regulaciones </Link>
                                </li> */}
                                {/* <div class="dropdown">
                                    <button className="btn nav-item dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <b>Empresa</b>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        
                                        <Link to='/Testimoniales' className="Link"> Galeria </Link>
                                    </div>
                                </div> */}
                                <div className="dropdown pr-2 mr-2">
                                    <button className="btn nav-item dropdown-toggle" type="button" 
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
                                            aria-expanded="false">
                                        <span className="dropMenu mt-0 pt-0">Conocenos</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to='/Contacto' className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse" > Contacto </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to='#' className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse"> Regulaciones </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to='/Historia' className="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse"> Acerca De Nosotros </Link>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="col-sm-12">
                            <div className="centradoHeader mb-5 mt-4 pt-4">
                                <div className="wraperHeader">
                                    <p className="azul unico width">BRANLO</p>
                                    <h3 className="corporativo">CORPORATIVO</h3>
                                    <p className="leyenda">
                                        (LEYENDA DE LA EMPRESA)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </header>
            </div>
        )
    }
}
