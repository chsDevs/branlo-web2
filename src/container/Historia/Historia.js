import React, { Component } from 'react'
import './Historia.css';
import imagenes from '../../img/logo-branlo.png';
export default class Historia extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div >
                            <h1 align="center"><span className="lineaDebajo">HISTORIA</span></h1>
                        </div>
                        <p align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, harum quam! Illum in, reiciendis obcaecati recusandae nostrum doloribus? Corrupti doloribus esse consectetur sint vitae, harum labore laboriosam temporibus omnis cupiditate.
                            Delectus aut dolor ad impedit, officiis ipsam? Maxime veritatis eos iste dolor, est ea ut laborum, ducimus odio quaerat quam sunt, cupiditate exercitationem. Quasi vitae consequatur quos, quam perferendis dolorum!
                            Temporibus nemo hic inventore fugit ad illo dicta natus, laudantium nihil ipsa maiores debitis, totam asperiores saepe ducimus molestias commodi sed? Quis provident aliquid similique aliquam. Nulla, quisquam. Aspernatur, error.
                        </p>  
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div >
                            <h1 align="center"><span className="lineaDebajo">MISION</span></h1>
                        </div>
                        <p align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, harum quam! Illum in, reiciendis obcaecati recusandae nostrum doloribus? Corrupti doloribus esse consectetur sint vitae, harum labore laboriosam temporibus omnis cupiditate.
                            Delectus aut dolor ad impedit, officiis ipsam? Maxime veritatis eos iste dolor, est ea ut laborum, ducimus odio quaerat quam sunt, cupiditate exercitationem. Quasi vitae consequatur quos, quam perferendis dolorum!
                            Temporibus nemo hic inventore fugit ad illo dicta natus, laudantium nihil ipsa maiores debitis, totam asperiores saepe ducimus molestias commodi sed? Quis provident aliquid similique aliquam. Nulla, quisquam. Aspernatur, error.
                        </p>  
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div >
                            <h1 align="center"><span className="lineaDebajo">VISION</span></h1>
                        </div>
                        <p align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, harum quam! Illum in, reiciendis obcaecati recusandae nostrum doloribus? Corrupti doloribus esse consectetur sint vitae, harum labore laboriosam temporibus omnis cupiditate.
                            Delectus aut dolor ad impedit, officiis ipsam? Maxime veritatis eos iste dolor, est ea ut laborum, ducimus odio quaerat quam sunt, cupiditate exercitationem. Quasi vitae consequatur quos, quam perferendis dolorum!
                            Temporibus nemo hic inventore fugit ad illo dicta natus, laudantium nihil ipsa maiores debitis, totam asperiores saepe ducimus molestias commodi sed? Quis provident aliquid similique aliquam. Nulla, quisquam. Aspernatur, error.
                        </p>  
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div >
                            <h1 align="center"><span className="lineaDebajo">VALORES</span></h1>
                        </div>
                        <p align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, harum quam! Illum in, reiciendis obcaecati recusandae nostrum doloribus? Corrupti doloribus esse consectetur sint vitae, harum labore laboriosam temporibus omnis cupiditate.
                            Delectus aut dolor ad impedit, officiis ipsam? Maxime veritatis eos iste dolor, est ea ut laborum, ducimus odio quaerat quam sunt, cupiditate exercitationem. Quasi vitae consequatur quos, quam perferendis dolorum!
                            Temporibus nemo hic inventore fugit ad illo dicta natus, laudantium nihil ipsa maiores debitis, totam asperiores saepe ducimus molestias commodi sed? Quis provident aliquid similique aliquam. Nulla, quisquam. Aspernatur, error.
                        </p>  
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div >
                            <h1 align="center"><span className="lineaDebajo">EQUIPO BRANLO</span></h1>
                        </div> 
                    </div>
                    <div className="col-sm-12 mt-5" align="center">
                        <img src={imagenes} alt="" className="responsive-img"/>
                        <h2>FUNDADOR</h2>
                        <p>(Nombre)</p>
                    </div>
                </div>
                <div className="row mt-3" align="center">
                    <div className="col-md-4">
                        <img src={imagenes} alt="" className="responsive-img"/>
                        <h2>DIRECTOR <br/> GENERAL</h2>
                        <p>(Nombre)</p>
                    </div>
                    <div className="col-md-4">
                        <img src={imagenes} alt="" className="responsive-img"/>
                        <h2>DIRECTOR <br/>DE <br/>DEPARTAMENTO</h2>
                        <p>(Nombre)</p></div>
                    <div className="col-md-4">
                        <img src={imagenes} alt="" className="responsive-img"/>
                        <h2>VENDEDOR</h2>
                        <p>(Nombre)</p>
                    </div>
                </div>
            </div>
        )
    }
}
