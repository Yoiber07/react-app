import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CallCenter from './Callcenter/CallCenter';
import Comercial from './Comercial/Comercial';
import Imagenes from './Imagenes';
import Operaciones from './Operaciones/Operaciones';
import Presidencia from './Presidencia/Presidencia';
import Sedes from './Sedes/Sedes';
import Soat from './Soat/Soat';
import Tecnologia from './Tegnologia/Tecnologia';
import Todos from './Todos/Todos';

const Menu = () => {

    const [ show, setShow ] = useState([]);

    const mostrar = (e) =>{
        console.log()
        if (e.target.name === "sede")setShow(<Sedes/>)
        if (e.target.name === "presidencia")setShow(<Presidencia/>)
        if (e.target.name === "comercial")setShow(<Comercial/>)
        if (e.target.name === "operaciones")setShow(<Operaciones/>)
        if (e.target.name === "tecnologia")setShow(<Tecnologia/>)
        if (e.target.name === "soat")setShow(<Soat/>)
        if (e.target.name === "call-center")setShow(<CallCenter/>)
        if (e.target.name === "todos")setShow(<Todos/>)
    }

    return (
    <>
                <div className="container-flex border contenedorPrincipal" >
            <div className="row no-gutters">
                <div className="col-12 m-auto">
                    <div className="col-10 m-auto">
                        <ul className="nav nav-pills mb-3 nav-justified navAreas" id="pills-tab" role="tablist">
                            <li className="nav-item " role="presentation">
                                <a href="/#"  onClick={ (e)=>mostrar(e) } name="todos" className="nav-link tabMenu" id="pills-todos-tab" data-toggle="pill" role="tab" aria-controls="pills-todos" aria-selected="true">
                                    <div>
                                        TODOS
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a  href="/#"   onClick={ (e)=>mostrar(e) } name="sede" activeClassName="active" className="nav-link tabMenu" id="pills-sedes-tab" data-toggle="pill" role="tab" aria-controls="pills-sedes" aria-selected="false">
                                    <div>
                                        Sedes
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="/#" onClick={ (e)=>mostrar(e) } name="presidencia" className="nav-link tabMenu" id="pills-presidencia-tab" data-toggle="pill" role="tab" aria-controls="pills-presidencia" aria-selected="false">
                                    <div>
                                        Presidencia
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a  href="/#" onClick={ (e)=>mostrar(e) } name="comercial" className="nav-link tabMenu" id="pills-comercial-tab" data-toggle="pill" role="tab" aria-controls="pills-comercial" aria-selected="false">
                                    <div>
                                        Comercial
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="/#" onClick={ (e)=>mostrar(e) } name="operaciones" className="nav-link tabMenu" id="pills-operaciones-tab" data-toggle="pill"  role="tab" aria-controls="pills-operaciones" aria-selected="false">
                                    <div>
                                        Operaciones
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="/#" onClick={ (e)=>mostrar(e) } name="tecnologia" className="nav-link tabMenu" id="pills-tecnologia-tab" data-toggle="pill"  role="tab" aria-controls="pills-tecnologia" aria-selected="false">
                                    <div>
                                        Tecnología
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="/#" onClick={ (e)=>mostrar(e) } name="soat" className="nav-link tabMenu" id="pills-soat-tab" data-toggle="pill" role="tab" aria-controls="pills-soat" aria-selected="false">
                                    <div>
                                        Soat
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="/#" onClick={ (e)=>mostrar(e) } name="call-center" className="nav-link tabMenu" id="pills-asistencias-tab" data-toggle="pill"  role="tab" aria-controls="pills-asistencias" aria-selected="false">
                                    Asistencias<br/> Call Center</a>
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-11 m-auto borderf  tabsContainer" >
            { show }
        </div>
    </>
    )
}

export default Menu
