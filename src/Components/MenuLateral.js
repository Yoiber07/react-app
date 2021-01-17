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



        <div className="col-11 m-auto borderf  tabsContainer">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-todos" role="tabpanel" aria-labelledby="pills-todos-tab">
                                
                                
                            <div className="menuLateral ">
                            <div>
                                <a className="btLateral menuL" href="#sedes">
                                    <img className="" src={Sedes} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a className="btLateral" href="#presidencia">
                                    <img src={Presidencia} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a className="btLateral" href="#comercial">
                                    <img src={Comercial} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a className="btLateral" href="#operaciones">
                                    <img src={Operaciones} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a className="btLateral" href="#tecnologia">
                                    <img src={Tegnologia} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a className="btLateral" href="#soat">
                                    <img src={Soat} alt=""/>
                                </a>
                            </div>
                            <div>
                                <a className="btLateral" href="#asistencias">
                                    <img src={CallCenter} alt=""/>
                                </a>
                            </div>
                        </div>
 

                                <div className="tab-tabContent" id="sedes">
                                <div className="row justify-content-center" style={{"padding":"10px"}}>
                                    <div className="col sedesContenedor">
                                        <p className="sedestitle">DIFICIO BTC | SEDE 97  Bogotá</p>
                                         Carrera 10º 97a-13 Torre A Of. 301
                                        <br/>
                                        IP-PBX (57 1) 486 3922 / 628 3599
                                        <br/>
                                    </div>
                                    <div className="col sedesContenedor">
                                        <p className="sedestitle">EDIFICIO MOK | SEDE 94  Bogotá</p>
                                         Calle 94a # 13-42
                                        <br/>
                                        IP-PBX (57 1) 628 3600 /486 3921
                                        <br/>
                                        2121 Recepción Edificio MOK Calle 94
                                    </div>
                                    <div className="col sedesContenedor">
                                        <p className="sedestitle">Comercial – Cali</p>
                                        <br/>
                                        Cali | Av. De las Americas # 18n - 26 Of. 202
                                        <br/>
                                        (57+2) 681 9739 - 374 7054
                                    </div>
                                    <div className="col sedesContenedor">
                                       <p className="sedestitle"> Comercial – Medellín</p>
                                        <br/>
                                        Medellín | Calle 7 Sur # 42 - 70 Of. 805
                                        <br/>
                                        Edificio Forum
                                        <br/>
                                        (57+4) 320 4650 - 204 2360
                                    </div>
                                    <div className="col sedesContenedor">
                                        <p className="sedestitle">Comercial – Bucaramanga</p>
                                         Bucaramanga | Calle 36 No 31-39 Oficina 101-102
                                        <br/>
                                        Centro Empresarial Chicamocha
                                        <br/>
                                        (57+7) 657 4342
                                    </div>
                                    <div className="col sedesContenedor">
                                        <p className="sedestitle">SOAT Colpatria</p>
                                        <br/>
                                        Oficina Torre Colpatria
                                        <br/>
                                        (57+1) 3364677 - Ext. 6036
                                    </div> 
                                </div>
                             </div>                         
                     </div>
             </div>
        </div>

           
                        
    )
}



export default MenuLateral
