import React from 'react'
import './assets/css/main.css'
import imgArea from './assets/img/hero_in_3.jpg'
import MenuLateral from './MenuLateral'



const Imagenes = () => {
    return (
      <div>
        <div className="card mb-3 .borderf1" />
            <div className="row no-gutters">
              <div className="col-md-2 imgArea" >
                <div>
                    <div className="txtArea">
                        Presidencia
                        <br/>
                        628 36 11
                   </div>
               </div>
           </div>
           <div className="col-md-10">
        <div className="card-body" >
          <div className="card">
            <div className="cardbody" style={{ "padding": "1px", "border-radius": "4px", "border": "2px solid #3E484C" }}>
              <div className="card" style={{ "border": "1px solid #7D8787;" }}>
                <div className="card-header headerM">
                  <div className="row">
                    <div className="col-md-2 text-center" style={{ "border-rigth": "1px solid #D21268;" }}>
                      <p style={{ "color:": "#3E484C;" }}>
                        Extensión
                      </p>
                    </div>
                    <div className="col-md-6 text-center" style={{ "border-rigth": " 1px solid #D21268;" }}>
                      <p style={{ "color:": "#3E484C;" }}>
                        Nombre
                      </p>
                    </div>
                    <div className="col-md-2 text-center">
                      <p style={{ "color:": "#3E484C;" }}>
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
       
       </div>
    )
}

export default Imagenes
