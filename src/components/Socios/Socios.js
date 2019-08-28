import React, { Component } from 'react';
import Coca from '../../img/coca-logo.png';
import Amazon from '../../img/amazon-logo.png';
import Bimbo from '../../img/Bimbo_logo.png';
import Bitcoin from '../../img/Bitcoin_Cash.png';
import './Socios.css';

export default class Socios extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-sm-12 mt-3 mb-5 pb-3" align="center">
                    <h1 className="clientes">Socios Comerciales</h1>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={Coca} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Amazon} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Bimbo} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Bitcoin} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-sm-3">
                        <img src={Amazon} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Bitcoin} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Coca} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={Bimbo} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}
