import React, { Component } from 'react';
import './Navegacion.css';
import logo from '../../img/logo-branlo.png';

export default class Navegacion extends Component {
    render() {
        return (
            <div className="row">
                <header className="col-sm-12">
                    <nav className="navbar navbar-expand-lg p-3 m-0 navbar-light">
                        <img src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto pr-5 mr-5 negro">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="centradoHeader mb-5">
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
