import React, { Component } from 'react';

export default class Contacto extends Component {
    
    instagram = {
        color: '#c2185b'
    }

    correo = {
        color: '#ffca28'
    }

    telefono = {
        color: '#b0bec5'
    }

    render() {
        return (
            <div className="container">
                <div className="row mb-5 mt-3" align="center">
                    <div className="col-sm-12" align="center">
                        <h1>CONTACTANOS</h1>
                    </div>
                    <div className="col-sm-3">
                        <i id="azulFb" className="fab fa-facebook-square fa-7x text-primary"></i>
                    </div>
                    <div className="col-sm-3">
                        <i className="fab fa-instagram fa-7x" style={this.instagram}></i>
                    </div>
                    <div className="col-sm-3">
                        <i className="fa fa-envelope fa-7x" style={this.correo}></i>
                    </div>
                    <div className="col-sm-3">
                    <i className="fas fa-mobile fa-7x" style={this.telefono}></i>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-sm-12" id="mapa" align="center">
                        <h1>UBICANOS</h1>
                        <iframe title="1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14806.612421775668!2d-102.33713686466217!3d21.909430055154225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef3878a08ee5%3A0xf591d317b88c267a!2sGasolinera+Pemex!5e0!3m2!1ses-419!2smx!4v1566399000083!5m2!1ses-419!2smx" width="90%" height="500px" frameborder="0" allowfullscreen></iframe>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
