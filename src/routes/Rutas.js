import React from 'react'

const Rutas = () => {
    return (
        <div class="container-flex border contenedorPrincipal" >
            <div class="row no-gutters">
                <div class="col-11 m-auto">
                    <div class="col-10 m-auto">
                        <ul class="nav nav-pills mb-3 nav-justified navAreas" id="pills-tab" role="tablist">
                            <li class="nav-item " role="presentation">
                                <a class="nav-link tabMenu active" id="pills-todos-tab" data-toggle="pill" href="#pills-todos" role="tab" aria-controls="pills-todos" aria-selected="true">
                                    <div>
                                        TODOS
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-sedes-tab" data-toggle="pill" href="#pills-sedes" role="tab" aria-controls="pills-sedes" aria-selected="false">
                                    <div>
                                        Sedes
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-presidencia-tab" data-toggle="pill" href="#pills-presidencia" role="tab" aria-controls="pills-presidencia" aria-selected="false">
                                    <div>
                                        Presidencia
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-comercial-tab" data-toggle="pill" href="#pills-comercial" role="tab" aria-controls="pills-comercial" aria-selected="false">
                                    <div>
                                        Comercial
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-operaciones-tab" data-toggle="pill" href="#pills-operaciones" role="tab" aria-controls="pills-operaciones" aria-selected="false">
                                    <div>
                                        Operaciones
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-tecnologia-tab" data-toggle="pill" href="#pills-tecnologia" role="tab" aria-controls="pills-tecnologia" aria-selected="false">
                                    <div>
                                        Tecnología
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-soat-tab" data-toggle="pill" href="#pills-soat" role="tab" aria-controls="pills-soat" aria-selected="false">
                                    <div>
                                        Soat
                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link tabMenu" id="pills-asistencias-tab" data-toggle="pill" href="#pills-asistencias" role="tab" aria-controls="pills-asistencias" aria-selected="false">
                                    Asistencias<br />Call center
                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rutas
