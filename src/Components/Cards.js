import React from 'react'
import './assets/css/main.css';



const Cards = () => {
    return (
        <div>
        <div className="col-md-10">
        <div className="card-body" >
            <div className="card">
            <div className="card-body"  style={{"padding": "10px","border-radius" : "4px","border" :"2px solid #3E484C"}}>
                    <div className="card" style={{"border" : "1px solid #7D8787;"}}>
                        <div classname ="card-header : headerN">
                            <div className="row">
                                <div className="col-2 text-center" style={{"border-right": "1px solid #D21268;"}}>
                                    <p style={{"color" :"#ffffff;"}}>
                                        Extensión
                                    </p>
                                </div>
                                <div className="col-6 text-center" style={{"border-right" : "1px solid #D21268;"}}>
                                    <p  style={{"color" :"#ffffff;"}}>
                                        Nombre
                                    </p>
                                </div>
                                <div className="col-4 text-center">
                                    <p  style={{"color" : "#ffffff;"}}>
                                        Cargo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
             </div>
            </div>
        </div>
        </div>
    )
}

export default Cards
