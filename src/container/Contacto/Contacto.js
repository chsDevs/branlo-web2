import React, { Component } from 'react';
import './Contacto.css';

export default class Contacto extends Component {
    
    ColorInstitucional = {
        color: 'rgb(39,40,91)'
    }

    render() {
        return (
            <div className="container">
                <div className="row mb-5 mt-3" align="center">
                    <div className="col-sm-12" align="center">
                        <h1 className="titulo">CONTACTANOS</h1>
                    </div>
                    <div className="col-sm-3">
                        <i id="azulFb" className="fab fa-facebook-square fa-7x" style={this.ColorInstitucional}></i>
                    </div>
                    <div className="col-sm-3">
                        <i className="fab fa-instagram fa-7x" style={this.ColorInstitucional}></i>
                    </div>
                    <div className="col-sm-3">
                        <i className="fa fa-envelope fa-7x" style={this.ColorInstitucional}></i>
                    </div>
                    <div className="col-sm-3">
                    <i className="fas fa-mobile-alt fa-7x" style={this.ColorInstitucional}></i>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-sm-12" align="center">
                        <h1 className="titulo">UBICANOS</h1>
                        <iframe title="1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14806.612421775668!2d-102.33713686466217!3d21.909430055154225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef3878a08ee5%3A0xf591d317b88c267a!2sGasolinera+Pemex!5e0!3m2!1ses-419!2smx!4v1566399000083!5m2!1ses-419!2smx" width="90%" height="500px" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
