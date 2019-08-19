import React, { Component } from 'react'
import imagen from '../../img/bl.png';
import './QuienesSomos.css';

export default class QuienesSomos extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div >
                                <h1 align="center"><span className="lineaDebajo">QUIENES SOMOS</span></h1>
                            </div>
                            <p align="center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, harum quam! Illum in, reiciendis obcaecati recusandae nostrum doloribus? Corrupti doloribus esse consectetur sint vitae, harum labore laboriosam temporibus omnis cupiditate.
                            Delectus aut dolor ad impedit, officiis ipsam? Maxime veritatis eos iste dolor, est ea ut laborum, ducimus odio quaerat quam sunt, cupiditate exercitationem. Quasi vitae consequatur quos, quam perferendis dolorum!
                            Temporibus nemo hic inventore fugit ad illo dicta natus, laudantium nihil ipsa maiores debitis, totam asperiores saepe ducimus molestias commodi sed? Quis provident aliquid similique aliquam. Nulla, quisquam. Aspernatur, error.
                            </p>  
                        </div>
                        <div className="col-sm-6">
                            <div align="right">
                            <img src={imagen} alt="Logo de la compañia" className="img-fluid" width="350vw" height="10vh"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
