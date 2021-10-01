import React from "react";

import logo from '../img/herra21.png'

export default class Tarjeta extends React.Component {
  render() {
    return (

        <div className="container" id="tarjeta">

        <div className="card bg-transparent border-warning" style={{width: "20rem"}}>
            <img src={logo} className="card-img-top" alt="..."/>
        <div className="card-body" style={{color: "#ECBE13"}}>
         <h4 className="card-title">Título del Producto</h4>
        <p className="card-text" style={{color: "aliceblue"}}>  </p>
         <a href="#" className="btn btn-warning">Comprar</a>
        </div>
        </div>

        </div>
    );
  }
}

// export default App;
