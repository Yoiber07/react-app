import React from 'react'
import imagen from './assets/img/logo-mok-header.svg';
import './assets/css/main.css';
const Navbar = () => {
    return (
        <div>
            <nav  className="navbar navbar-expand-md fixed-top bgNavbar">
        <a className="navbar-brand" href="#">
            <img className="logoMokheader" src={imagen} alt="Mok"/>
        </a>
    
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link btnNav" target="_blank" href="http://157.101.91.104/admin/config.php">
                        Free PBX
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btnNav" target="_blank" href="http://157.101.91.104/fop2/">
                        Fop2
                    </a>
                </li>
                <li className="nav-item">
                    <a class="nav-link btnNav" target="_blank" href="http://157.101.91.104/qstats/">
                        Asternic
                    </a>
                </li>
            </ul>
        </div>

        <div className="container-flex buscador">
            <h1>
                Directorio Telefónico Mok Colombia
            </h1>
            <form className="form-inline formBuscar mt-5">
                <input className="form-control inputBuscar mr-sm-2" type="text" placeholder="Digita el nombre y/o apellido a buscar" aria-label="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>

        <div className="container-flex menuMobile">
            <div className="row justify-content-end no-gutters">
                <div className="col-4">
                    <a className="nav-link btnNav" target="_blank" href="http://157.101.91.104/admin/config.php">
                        Free PBX
                    </a>
                </div>
                <div className="col-4">
                    <a className="nav-link btnNav" target="_blank" href="http://157.101.91.104/fop2/">
                        Fop2
                    </a>
                </div>
                <div className="col-4">
                    <a className="nav-link btnNav" target="_blank" href="http://157.101.91.104/qstats/">
                        Asternic
                    </a>
                </div>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar
