import React from 'react'

const Navegador = () => {
    return (   
         <main role="main">

    <div className="botonCodigos">
        <p>
            <a className="btn" data-toggle="collapse" 
            href="#collapseExample" role="button" aria-expanded="false" 
            aria-controls="collapseExample">
                <img src="./img/bt_codigos.svg" alt=""/>
            </a>
        </p>
    </div>
    <div className="menuCodigos">
        <div className="collapse" id="collapseExample">
            <div className="card card-body cardCodigos">
                <div className="row">
                    <div className="botonCollapse">
                        <p>
                            <a className="btn" data-toggle="collapse" 
                            href="#collapseExample" role="button" aria-expanded="false" 
                            aria-controls="collapseExample">
                                <img src="./img/bt_collapse.svg" alt=""/>
                            </a>
                        </p>
                    </div>
                    <div className="col-6">
                        <p>
                            Códigos de Funciones
                        </p>
                        <table>
                            <tr>
                                <td>Número</td>
                                <td>Función</td>
                            </tr>
                            <tr>
                                <td>*72</td>
                                <td>Activar Desvio de Llamada</td>
                            </tr>
                            <tr>
                                <td>*73+Ext.</td>
                                <td>Desactivar Desvío de Llamada</td>
                            </tr>
                            <tr>
                                <td>12345</td>
                                <td>Prueba de Conexión con la Planta Telefónica</td>
                            </tr>
                            <tr>
                                <td>*11+Ext.</td>
                                <td>Logueo de Agente</td>
                            </tr>
                            <tr>
                                <td>*12</td>
                                <td>Deslogueo de Agente</td>
                            </tr>
                            <tr>
                                <td>*98</td>
                                <td>Correo de Voz</td>
                            </tr>
                            <tr>
                                <td>
                                    Llamada Nacional
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    07 + Código de Área + Número Telefónico
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-6">
                        <p>
                            Números de Emergencias Colombia
                        </p>
                        <table>
                            <tr>
                                <td colspan="2" style={{textalign: "center"}}>
                                    Entidad
                                </td>
                                <td>
                                    Número
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">
                                    Emergencias
                                </td>
                                <td>123</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">(DPAE) Dirección de Prevención y Atención de Emergencias </td>
                                <td>429</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">(DPAE) Dirección de Prevención y Atención de Emergencias </td>
                                <td>429</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">Accidentes Con Productos Químicos</td>
                                <td>427</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">Acueducto</td>
                                <td>116</td>
                            </tr>
                            <tr>
                                <td colspan="2"s cope="row">Ambulancias-CRU Centro Regulador de Urgencias</td>
                                <td>125</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">	Bomberos	 </td>
                                <td>119</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">	Centro Toxicológico</td>
                                <td>136</td>
                            </tr>
                            <tr>
                                <td colspan="2" scope="row">	Cruz Roja – Ambulancias – Urgencias (24 Horas)</td>
                                <td>132</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    )
}

export default Navegador
