import React, { Component } from 'react';
import Bimbo from './Carrusel-img/Bimbo_logo.jpg'
import Amazon from './Carrusel-img/amazon-logo.jpg'
import Branlo from './Carrusel-img/bl.png'
import Cod from './Carrusel-img/Sin título-1.jpg'
import './Galeria.css';

export default class Testimoniales extends Component {
    render() {
          return (
            <div>
            <div className="row">
                <div className="col-sm-12 mt-5" align="center">
                    <h1 className="Titulo">Fotos y Videos</h1>
                </div>
            </div>
            <div className=" pt-5 pb-">  
                <div id="carouselExampleSlidesOnly" className="carousel slide pt-5 pb-5" data-ride="carousel">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner" align="center">
                            <div className="carousel-item active">
                            <img src={Cod} className="d-block" width="80%" height="500vh" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={Cod} className="d-block " width="80%" height="500vh" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Cod} className="d-block " width="80%" height="500vh" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev bg-dark" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next bg-dark" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <img src={Branlo} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={Amazon} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <img src={Bimbo} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-3">
                        <img src={Branlo} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Bimbo} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Branlo} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Amazon} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            </div>
          );
    }
}
