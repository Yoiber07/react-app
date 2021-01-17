import React from 'react'
import Sedes from './assets/img/bt_001_sedes.svg';
import Presidencia from './assets/img/bt_002_presidencia.svg';
import Comercial from './assets/img/bt_003_comercial.svg';
import Operaciones from './assets/img/bt_004_operaciones.svg';
import Tegnologia from './assets/img/bt_005_tecnologia.svg';
import Soat from './assets/img/bt_006_soat.svg';
import CallCenter from './assets/img/bt_007_call-center.svg';
import './assets/css/main.css'


const MenuLateral = () => {
    return (



        <div >
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-todos" role="tabpanel" aria-labelledby="pills-todos-tab">


                    <div className="menuLateral ">
                        <div>
                            <a className="btLateral menuL" href="#sedes">
                                <img className="" src={Sedes} alt="" />
                            </a>
                        </div>
                        <div>
                            <a className="btLateral" href="#presidencia">
                                <img src={Presidencia} alt="" />
                            </a>
                        </div>
                        <div>
                            <a className="btLateral" href="#comercial">
                                <img src={Comercial} alt="" />
                            </a>
                        </div>
                        <div>
                            <a className="btLateral" href="#operaciones">
                                <img src={Operaciones} alt="" />
                            </a>
                        </div>
                        <div>
                            <a className="btLateral" href="#tecnologia">
                                <img src={Tegnologia} alt="" />
                            </a>
                        </div>
                        <div>
                            <a className="btLateral" href="#soat">
                                <img src={Soat} alt="" />
                            </a>
                        </div>
                        <div>
                            <a className="btLateral" href="#asistencias">
                                <img src={CallCenter} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}



export default MenuLateral
